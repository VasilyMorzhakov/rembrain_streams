import { RobotData } from '../entities';
import { CommandBase } from './command-base';
export declare class CommandSetJoints extends CommandBase {
    joints: number[];
    constructor(joints: number[], robotStatus: RobotData);
}
