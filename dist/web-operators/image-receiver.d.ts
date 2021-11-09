import { Observable } from 'rxjs';
import { RobotImageData, RobotState, RobotData } from './entities';
import { Image } from 'image-js';
import { IOperatorProps } from './entities';
export interface IImageReceiver {
    imageSubject: Observable<RobotImageData>;
    depthSubject: Observable<Image>;
    dataSubject: Observable<RobotData>;
    stateSubject: Observable<RobotState>;
    shutdown(): void;
}
export declare class WebSocketImageReceiver implements IImageReceiver {
    wsWorker: Worker;
    stateWebsocket: WebSocket;
    dataURL: string;
    robotName: string;
    accessToken: string;
    constructor(settings: IOperatorProps);
    openDataWebsocket(): void;
    sendDataInitPacket(): void;
    imageSubject: any;
    depthSubject: any;
    dataSubject: any;
    onWorkerMessage: (ev: any) => void;
    stateSubject: any;
    openStateWebsocket(): void;
    sendStateInitPacket(): void;
    onStateClosed: (ev: CloseEvent) => void;
    onStateOpen: (ev: Event) => void;
    onStateError: (ev: Event) => void;
    onStateMessage: (ev: any) => void;
    unpackState(data: Blob | string): void;
    shutdown(): void;
}
