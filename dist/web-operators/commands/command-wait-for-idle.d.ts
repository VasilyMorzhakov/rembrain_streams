import { RobotData } from '../entities';
import { CommandBase } from './command-base';
export declare class CommandWaitForIdle extends CommandBase {
    constructor(robotStatus: RobotData);
}
