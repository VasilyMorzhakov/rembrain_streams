// @ts-nocheck
import { RobotData } from '../entities'
import { CommandBase } from './command-base'

export class CommandSetTag extends CommandBase {
  tag_id: number

  constructor(tag_id: number, robotStatus: RobotData) {
    super('calibration/set-tag', robotStatus)
    this.tag_id = tag_id
  }
}
