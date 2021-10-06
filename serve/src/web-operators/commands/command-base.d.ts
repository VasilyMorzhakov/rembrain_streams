import { RobotData } from "../entities";
export interface OperatorCommand {
    op: string;
    source: string;
    timestamp: number;
    frame_timestamp: number;
}
export declare class CommandSettings {
    private static instance;
    source: string;
    static getInstance(): CommandSettings;
}
export declare class CommandBase implements OperatorCommand {
    op: string;
    source: string;
    timestamp: number;
    frame_timestamp: number;
    constructor(op: string, robotStatus: RobotData);
}
export declare function SetCommandOperatorValue(operator: string): void;
