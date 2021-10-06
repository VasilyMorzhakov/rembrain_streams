import * as React from "react";
import { IOperatorProps } from "./entities";
export declare class OperatorCanvas extends React.Component {
    private canvasRef;
    /**
     * Canvas on which our selection will be colored according to the depth map
     * The canvas is mixed in with the raw image canvas
     */
    private depthCanvas;
    /**
     * Current image of the depth map
     */
    private depthData;
    private medianPoint;
    private medianPointValue;
    private robotState;
    private hasImage;
    private img;
    private _imageReceiver;
    private _networkOperator;
    private selectionStart;
    private mousePos;
    private selection;
    private robotData;
    private settings;
    private subscriptions;
    private selectionSubject;
    constructor(props: IOperatorProps);
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private setVideoFeed;
    private setDepthData;
    private updateStatus;
    private updateState;
    private redraw;
    private redrawDepth;
    private getMedianForPoint;
    /**
     * Calculates a gradient of red-yellow-green in the interval
     * [median-spread, median+spread]
     * @param median the median value, that will be, well, in the middle
     * @param spread the spread of the values
     */
    private calculateDepthDevColors;
    private sendCommand;
    private releaseEventHandler;
    private keyPressEventHandler;
    private pressEventHandler;
    private dragEventHandler;
    private getXY;
    private doCanvasRect;
    private SetCanvasStyle;
}
