// @ts-nocheck
import { RobotData } from '../entities'
import { CommandBase } from './command-base'

export class CommandWaitForIdle extends CommandBase {
  constructor(robotStatus: RobotData) {
    super('wait-for-idle', robotStatus)
  }
}
