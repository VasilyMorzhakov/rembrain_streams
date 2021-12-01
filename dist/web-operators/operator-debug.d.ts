import * as React from "react";
import { IOperatorProps, RobotData, RobotImageData, RobotState } from "./entities";
import "./operator-debug.scss";
interface IOperatorState {
    wsUrl: string;
    robotName: string;
    accessToken: string;
    depthData: string;
    imageData: string;
    fps: number;
    connected: boolean;
    isCalibrating: boolean;
    tagsCalibrated: {
        [tag: string]: boolean;
    };
    joints: number[];
    commandList: any[];
    commandNameInput: string;
    commandOpInput: string;
    state_machine: string;
}
export declare class OperatorDebug extends React.Component<IOperatorProps, IOperatorState> {
    private _imageReceiver;
    private _networkOperator;
    private subscriptions;
    private lastFrameDate;
    private robotData;
    private robotState;
    constructor(props: IOperatorProps);
    connectionSettingChanged(e: React.ChangeEvent<HTMLInputElement>): void;
    componentWillUnmount(): void;
    componentDidMount(): void;
    addCommand(): void;
    removeCommand(name: any): void;
    connect(): void;
    disconnect(): void;
    gotCameraData(cameraData: RobotImageData): void;
    recalculateFPS(): void;
    gotDepthData(depthData: any): void;
    gotRobotState(state: RobotState): void;
    gotRobotData(data: RobotData): void;
    calibrationStart(): void;
    canFinishCalibration(): boolean;
    finishCalibration(): void;
    resetTagState(): void;
    detectCalibrationTags(): void;
    tagClicked(tag: string): void;
    renderTagButtons(): JSX.Element;
    renderJoints(): JSX.Element | undefined;
    moveJoint(jointNum: number, degrees: number): void;
    radianToDegrees: (rad: number) => number;
    degreesToRadian: (deg: number) => number;
    sendOp: (op: string) => void;
    sendOpClosure: (op: string) => () => void;
    render(): JSX.Element;
}
export {};
