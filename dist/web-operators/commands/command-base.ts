import { RobotData } from '../entities'

export interface OperatorCommand {
  op: string
  source: string
  timestamp?: number
  frame_timestamp?: number
}

export class CommandSettings {
  private static instance: CommandSettings
  public source: string = 'operator'

  public static getInstance(): CommandSettings {
    if (!CommandSettings.instance) {
      CommandSettings.instance = new CommandSettings()
    }
    return CommandSettings.instance
  }
}

export class CommandBase implements OperatorCommand {
  op: string
  source = CommandSettings.getInstance().source
  timestamp = Date.now()
  frame_timestamp: number

  constructor(op: string, robotStatus: RobotData) {
    this.op = op
    this.frame_timestamp = robotStatus.frameindex
    this.timestamp = robotStatus.time
  }
}

export function SetCommandOperatorValue(operator: string) {
  CommandSettings.getInstance().source = operator
}
