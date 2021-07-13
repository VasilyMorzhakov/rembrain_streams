import * as React from "react";
import Image from "image-js";
import {Rectangle, Point, RobotImageData,
        RobotData, RobotState} from "./entities";
import { IImageReceiver, WebSocketImageReceiver } from "./image-receiver";
import { INetworkOperator, NetworkOperator } from "./network-operator";
import { BehaviorSubject, Subscription } from "rxjs";
import { CommandGoto, CommandWaitForIdle } from "./commands/operator-commands";
import { distinctUntilChanged, distinctUntilKeyChanged, throttleTime } from "rxjs/operators";
import { IOperatorProps } from "./entities";
// import { IImageReceiver } from "./image-receiver";
// import { NetworkOperator } from "./network-operator";

export class OperatorCanvas extends React.Component {

    private canvasRef: React.RefObject<HTMLCanvasElement>;

    /**
     * Canvas on which our selection will be colored according to the depth map
     * The canvas is mixed in with the raw image canvas 
     */
    private depthCanvas: HTMLCanvasElement;
    /**
     * Current image of the depth map
     */
    private depthData: Image;

    // Point relative to which we're calculating the depth in the selection
    private medianPoint: Point;
    // Depth data at the median point
    private medianPointValue: number;

    private robotState: RobotState = undefined;

    private hasImage: boolean = false;
    private img: HTMLImageElement = document.createElement("img");

    private _imageReceiver: IImageReceiver;
    private _networkOperator: INetworkOperator;

    // While a user a selecting, this stores the point of origin
    // Once user has selected an area, it's stored in selection, and this one is set to null
    private selectionStart: Point;
    
    // Mouse position in the canvas, used to draw the crosshair
    private mousePos: Point;

    // Defines the selected area
    private selection: Rectangle;

    private robotData: RobotData;
    private settings: IOperatorProps;
    private subscriptions: Subscription[] = [];


    private selectionSubject = new BehaviorSubject<Rectangle>(undefined);


    constructor(props: IOperatorProps) {
        super(props);
        this.settings = {
            dataWSUrl: props.dataWSUrl,
            robotName: props.robotName,
            accessToken: props.accessToken,
        };
        this.canvasRef = React.createRef();
    }

    public render() {
        return (
            <canvas ref={this.canvasRef} width="1280" height="720"
                    onContextMenu={(e) => {e.preventDefault()}} 
                    tabIndex={1} 
                    onMouseDown={this.pressEventHandler}
                    onMouseMove={this.dragEventHandler}
                    onMouseUp={this.releaseEventHandler}
                    onKeyUp={this.keyPressEventHandler}/>
        )
    }

    componentDidMount() {
        this.depthCanvas = document.createElement("canvas");
        this.depthCanvas.width = 1280;
        this.depthCanvas.height = 720;
    
        this._imageReceiver = new WebSocketImageReceiver(this.settings);
        this._networkOperator = new NetworkOperator(this.settings);

        this.img.onload = () => this.redraw();
        // Subscribing to all the required observables
        this.subscriptions.push(
            this.selectionSubject.subscribe(s => this.redrawDepth(s)),
            this._imageReceiver.imageSubject.subscribe(d => this.setVideoFeed(d)),
            this._imageReceiver.depthSubject.subscribe(d => this.setDepthData(d)),
            this._imageReceiver.dataSubject.subscribe(d => this.updateStatus(d)),
            this._imageReceiver.stateSubject
                .pipe(
                    distinctUntilKeyChanged("state_machine"),
                    throttleTime(1000)
                ).subscribe(d => this.updateState(d)),
        );
    }

    componentWillUnmount() {
        this._imageReceiver?.shutdown();
        this._networkOperator?.shutdown();
        this.subscriptions.forEach(s => s.unsubscribe());
        this.subscriptions = [];
    }

    private setVideoFeed(imageData: RobotImageData) {
        // Assuming we are getting PNG for now
        if (imageData === undefined)
        {
            this.hasImage = false;
            return;
        }
        this.hasImage = true;
        let buf = imageData.data.toString('base64');
        this.img.src = `data:${imageData.type};base64,`+buf;
    }

    private setDepthData(depthData: Image) {
        this.depthData = depthData;
        this.redrawDepth(this.selection);
        this.redraw();
    }

    private updateStatus(status: RobotData) {
        this.robotData = status;
    }
    
    private updateState(state: RobotState) {
        this.robotState = state;
        this.redraw();
    }


    private redraw() {
        const canvas = this.canvasRef.current;
        if (canvas) {        
            const ctx = canvas.getContext("2d");
            
            if (this.hasImage) {
                // Base: image from the robot
                ctx.drawImage(this.img, 0, 0);
                
                // Compositing depth calculation on top
                ctx.save();
                ctx.globalCompositeOperation = "screen";
                ctx.drawImage(this.depthCanvas, 0, 0);
                ctx.restore();
            
                // Selection area
                if (this.selection) {
                    this.SetCanvasStyle(ctx, StrokeStyle.SelectionRectangle);
                    let rect = this.selection;
                    this.doCanvasRect(ctx, CanvasAction.Stroke, rect);
                }
            
                // Median point
                if (this.medianPoint) {
                    this.SetCanvasStyle(ctx, StrokeStyle.MedianPoint);
                    ctx.beginPath();
                    ctx.arc(this.medianPoint.x, this.medianPoint.y,
                        10, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                }
                
                // Crosshair
                if (this.mousePos) {
                    this.SetCanvasStyle(ctx, StrokeStyle.Crosshair);
                    // horizontal line
                    ctx.beginPath();
                    ctx.moveTo(0, this.mousePos.y);
                    ctx.lineTo(canvas.width, this.mousePos.y);
                    ctx.stroke()
                    ctx.closePath();
                    // vertical line
                    ctx.beginPath();
                    ctx.moveTo(this.mousePos.x, 0);
                    ctx.lineTo(this.mousePos.x, canvas.height);
                    ctx.stroke()
                    ctx.closePath();
                }
            } else {
                this.SetCanvasStyle(ctx, StrokeStyle.NoImage_BG);
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            
                const canvasRect = new Rectangle(0, 0, canvas.width, canvas.height);
                this.SetCanvasStyle(ctx, StrokeStyle.NoImage_Text);
                ctx.fillText("No Image", canvasRect.Center.x, canvasRect.Center.y);
            }
        
            // Plaque with robot's status
            this.SetCanvasStyle(ctx, StrokeStyle.PlaqueBackground)
            let plaqueWidth = 500;
            let plaqueHeight = 60;
            let plaqueRect = new Rectangle(
                (canvas.offsetWidth - plaqueWidth) / 2,
                 canvas.offsetHeight - plaqueHeight,
                plaqueWidth,
                plaqueHeight
            );
            this.doCanvasRect(ctx, CanvasAction.Fill, plaqueRect);
            
            // Text of robot's status
            if (this.robotState) {
                const state = this.robotState.state_machine;
                this.SetCanvasStyle(ctx, StrokeStyle.PlaqueText)
                ctx.fillText(state, plaqueRect.Center.x, plaqueRect.Center.y);
            }
        
            // Border
            this.SetCanvasStyle(ctx, StrokeStyle.Border);
            ctx.strokeRect(0, 0, canvas.width, canvas.height);
        }
    }


    // Redraws the depth calculation
    private redrawDepth(selection: Rectangle) {
        // In the process of selection - skip
        if (this.selectionStart || (!this.medianPoint)) return;

        let depthCanvas = this.depthCanvas;
        let ctx = depthCanvas.getContext("2d");
        ctx.clearRect(0, 0, depthCanvas.width, depthCanvas.height);

        let imageCanvas = this.canvasRef.current;

        // No selection or no depth data - skip
        if (!selection || !this.depthData) return;

        // clamping selection to edges so we don't crop outside the range accidentally
        if (selection.x + selection.w > imageCanvas.width) {
            selection.w = imageCanvas.width - selection.x;
        }
        if (selection.y + selection.h > imageCanvas.height) {
            selection.h = imageCanvas.height - selection.y;
        }

        // not handling empty selections
        if (this.selection.w * this.selection.h == 0) return;
       
        let cropped_depth = this.depthData.crop({
            x: selection.x,
            y: selection.y,
            width: selection.w,
            height: selection.h
        });

        let median = this.getMedianForPoint(this.depthData, this.medianPoint);
        this.medianPointValue = median;
        // get the map we'd use for pixels that are close to the median
        let colorMap = this.calculateDepthDevColors(median, 30);
        const nChannels = 4;

        // calculate the ImageData that we will draw
        let pixelsToDraw = new Uint8ClampedArray(nChannels * cropped_depth.size);
        const imageData = new ImageData(selection.w, selection.h);
        for (let i = 0; i < cropped_depth.size; i++) {
            const depthPixel = cropped_depth.getPixel(i);
            const value = depthPixel[0];
            if (!colorMap.has(value)) {
                continue;
            }
            const color = colorMap.get(value);
            for (let j = 0; j < 4; j++) {
                pixelsToDraw[i*nChannels + j] = color[j];
            }
        }
        imageData.data.set(pixelsToDraw);
        // Draw it to the canvas
        ctx.putImageData(imageData, selection.x, selection.y);
    }

    private getMedianForPoint(image: Image, point: Point): number {
        const cropRadius = 10;

        let cropX = point.x - cropRadius / 2;
        if (cropX < 0) cropX = 0;
        let cropY = point.y - cropRadius / 2;
        if (cropY < 0) cropY = 0;

        let cropW = (cropX + cropRadius < image.width) ? cropRadius : image.width - cropX;
        let cropH = (cropY + cropRadius < image.height) ? cropRadius : image.height - cropY;
        let crop = image.crop({
            x: cropX,
            y: cropY,
            width: cropW,
            height: cropH
        });
        return (crop as any).median[0];
    }

    /**
     * Calculates a gradient of red-yellow-green in the interval
     * [median-spread, median+spread]
     * @param median the median value, that will be, well, in the middle
     * @param spread the spread of the values 
     */
    private calculateDepthDevColors(median: number, spread: number = 20): Map<number, number[]> {
        let map = new Map<number, number[]>();
        
        const colorNear = [255, 0, 0, 255];        //red
        const colorMedian = [255, 255, 0, 255];    //yellow
        const colorFar = [0, 255, 0, 255];         //green
        // Calculating near-med gradient values
        for (let i = median - spread; i < median; i++) {
            let p = (i - (median - spread)) / spread; // percentage how far along the gradient we are
            let color = [
                colorNear[0] + p*(colorMedian[0] - colorNear[0]),
                colorNear[1] + p*(colorMedian[1] - colorNear[1]),
                colorNear[2] + p*(colorMedian[2] - colorNear[2]),
                255,
            ]
            map.set(i, color);
        }
        // Calculating med-far gradient values
        for (let i = median; i <= median + spread; i++) {
            let p = (i - median) / spread; // percentage how far along the gradient we are
            let color = [
                colorMedian[0] + p*(colorFar[0] - colorMedian[0]),
                colorMedian[1] + p*(colorFar[1] - colorMedian[1]),
                colorMedian[2] + p*(colorFar[2] - colorMedian[2]),
                255,
            ]
            map.set(i, color);
        }
        return map;
    }

    private sendCommand() {
        var cmdGoto = new CommandGoto(
            this.robotData,
            this.medianPoint,
            this.selection,
            this.medianPointValue);
        this._networkOperator.enqueueCommand(cmdGoto)
        var cmdIdle = new CommandWaitForIdle(this.robotData);
        this._networkOperator.enqueueCommand(cmdIdle);
    }

    private releaseEventHandler = (e: React.MouseEvent) => {
        // If right click was pressed - ignore
        if (e.button == 2) {
            return;
        }
        // Finish selection
        this.selectionStart = null;
        if (this.selection) {
            // Sending out that we have finished the selection to subscribers
            this.selectionSubject.next(this.selection);
            this.medianPoint = this.selection.Center;
        }
        this.redraw();
    }

    private keyPressEventHandler = (e: React.KeyboardEvent) => {
        if (e.key == " ") {
            this.sendCommand();
        }
    }

    private pressEventHandler = (e: React.MouseEvent) => {
        let point = this.getXY(e);
        if (e.button == 2) {
            // right click - change median point
            this.medianPoint = point;
            this.redrawDepth(this.selection);
        } else {
            // Left click or tap
            // restart selection process
            this.selection = null;
            this.selectionStart = point;
        }

        this.redraw();
    }

    private dragEventHandler = (e: React.MouseEvent) => {
        let point = this.getXY(e);
        this.mousePos = point;

        // if we're currently selecting, refresh selection
        if (this.selectionStart) {
            this.selection = Rectangle.fromPoints(this.selectionStart, point);
        }
        this.redraw();

        e.preventDefault();
    }

    private getXY(e: React.MouseEvent): Point {
        let mouseX = e.pageX;
        let mouseY = e.pageY;
        mouseX -= this.canvasRef.current.offsetLeft;
        mouseY -= this.canvasRef.current.offsetTop;
        return {x: mouseX, y: mouseY};
    }

    private doCanvasRect(ctx: CanvasRenderingContext2D, action: CanvasAction, rect: Rectangle) {
        let x = rect.x;
        let y = rect.y;
        let w = rect.w;
        let h = rect.h;
        switch (action) {
            case CanvasAction.Fill:
                ctx.fillRect(x, y, w, h);
                break;
            case CanvasAction.Stroke:
                ctx.strokeRect(x, y, w, h);
                break;
        }
    }

    private SetCanvasStyle(ctx: CanvasRenderingContext2D, style: StrokeStyle) {
        switch (style) {
            case StrokeStyle.Border:
                ctx.strokeStyle = "green";
                ctx.lineWidth = 20;
                break;
            case StrokeStyle.SelectionRectangle:
                ctx.strokeStyle = "red";
                ctx.lineWidth = 7;
                break;
            case StrokeStyle.PlaqueBackground:
                ctx.fillStyle = "black";
                break;
            case StrokeStyle.PlaqueText:
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "white";
                ctx.font = "bold 48px sans-serif";
                break;
            case StrokeStyle.Crosshair:
                ctx.strokeStyle = "white";
                ctx.lineWidth = 2;
                break;
            case StrokeStyle.MedianPoint:
                ctx.fillStyle = "#aaaaaa99";
                ctx.strokeStyle = "#000000bb";
                ctx.lineWidth = 1;
                break;
            case StrokeStyle.NoImage_BG:
                ctx.fillStyle = "#aaaaaa";
                break;
            case StrokeStyle.NoImage_Text:
                ctx.fillStyle = "#eeeeee";
                ctx.font = "bold 200px sans-serif";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                break;
        }
    }
}



enum CanvasAction {
    Stroke,
    Fill,
}

enum StrokeStyle {
    Border,
    Crosshair,
    SelectionRectangle,
    PlaqueBackground,
    PlaqueText,
    MedianPoint,
    NoImage_BG,
    NoImage_Text
}

