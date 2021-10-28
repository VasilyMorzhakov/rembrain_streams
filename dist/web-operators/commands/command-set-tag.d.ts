import { RobotData } from "../entities";
import { CommandBase } from "./command-base";
export declare class CommandSetTag extends CommandBase {
    tag_id: number;
    constructor(tag_id: number, robotStatus: RobotData);
}
