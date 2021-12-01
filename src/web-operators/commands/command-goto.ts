// @ts-nocheck
import { Point, Rectangle, RobotData } from '../entities'
import { CommandBase } from './command-base'

export class CommandGoto extends CommandBase {
  pos: number[] // Physical XYZ coordinates of the selected point
  pick_point: number[] // Pixel XY coordinates of the selected point
  object_rect: number[][] // Selected area

  constructor(
    robotStatus: RobotData,
    selectionPoint: Point,
    selectionArea: Rectangle,
    depthValAtSelection: number
  ) {
    super('goto', robotStatus)

    this.pick_point = undefined
    this.pos = undefined
    this.object_rect = undefined

    if (selectionPoint) {
      this.pick_point = [selectionPoint.x, selectionPoint.y]
    }

    if (selectionArea) {
      this.object_rect = [
        [selectionArea.TopLeft.x, selectionArea.TopLeft.y],
        [selectionArea.BottomRight.x, selectionArea.BottomRight.y]
      ]
    }

    if (depthValAtSelection && selectionPoint) {
      let z = depthValAtSelection * robotStatus.depth_unit
      if (z) {
        let x = ((selectionPoint.x - robotStatus.ppx) * z) / robotStatus.fx
        let y = ((selectionPoint.y - robotStatus.ppy) * z) / robotStatus.fy
        this.pos = [x, y, z]
      }
    }
  }
}
