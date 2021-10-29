import { Buffer } from 'buffer/';
export interface IOperatorProps {
    dataWSUrl: string;
    robotName: string;
    accessToken: string;
}
export interface RobotImageData {
    data: Buffer;
    type: string;
}
export interface IWebSocketControlPackage {
    command: string;
    exchange: string;
}
export interface RobotData {
    fx: number;
    fy: number;
    ppx: number;
    ppy: number;
    depth_unit: number;
    time: number;
    frameindex: number;
}
export interface RobotState {
    arm_state: string;
    state_machine: string;
    last_goto: object;
    joints: number[];
}
export interface Point {
    x: number;
    y: number;
}
export declare class Rectangle {
    x: number;
    y: number;
    w: number;
    h: number;
    static fromPoints(p1: Point, p2: Point): Rectangle;
    constructor(x: number, y: number, w: number, h: number);
    get TopLeft(): Point;
    get TopRight(): Point;
    get BottomLeft(): Point;
    get BottomRight(): Point;
    get Center(): Point;
    get CenterTop(): Point;
    get CenterBottom(): Point;
}
