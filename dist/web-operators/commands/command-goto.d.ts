import { Point, Rectangle, RobotData } from '../entities';
import { CommandBase } from './command-base';
export declare class CommandGoto extends CommandBase {
    pos: number[];
    pick_point: number[];
    object_rect: number[][];
    constructor(robotStatus: RobotData, selectionPoint: Point, selectionArea: Rectangle, depthValAtSelection: number);
}
