// @ts-nocheck
import { RobotData } from '../entities'
import { CommandBase } from './command-base'

export class CommandSetJoints extends CommandBase {
  joints: number[]

  constructor(joints: number[], robotStatus: RobotData) {
    super('setJ', robotStatus)
    this.joints = joints
  }
}
