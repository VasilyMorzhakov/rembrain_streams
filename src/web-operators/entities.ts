// @ts-nocheck
import { Buffer } from 'buffer/'

export interface IOperatorProps {
  dataWSUrl: string
  robotName: string
  accessToken: string
}

export interface RobotImageData {
  data: Buffer
  type: string
}

export interface IWebSocketControlPackage {
  command: string
  exchange: string
}

export interface RobotData {
  fx: number
  fy: number
  ppx: number
  ppy: number
  depth_unit: number
  time: number
  frameindex: number
}

export interface RobotState {
  arm_state: string
  state_machine: string
  last_goto: object
  joints: number[]
}

export interface Point {
  x: number
  y: number
}

export class Rectangle {
  x: number
  y: number
  w: number
  h: number

  public static fromPoints(p1: Point, p2: Point): Rectangle {
    // Determine topLeft and bottomRight points of the rectangle
    let topLeft = {
      x: Math.min(p1.x, p2.x),
      y: Math.min(p1.y, p2.y)
    }
    let bottomRight = {
      x: Math.max(p1.x, p2.x),
      y: Math.max(p1.y, p2.y)
    }
    return new Rectangle(
      topLeft.x,
      topLeft.y,
      bottomRight.x - topLeft.x,
      bottomRight.y - topLeft.y
    )
  }

  constructor(x: number, y: number, w: number, h: number) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }

  get TopLeft(): Point {
    return { x: this.x, y: this.y }
  }
  get TopRight(): Point {
    return { x: this.x + this.w, y: this.y }
  }
  get BottomLeft(): Point {
    return { x: this.x, y: this.y + this.h }
  }
  get BottomRight(): Point {
    return { x: this.x + this.w, y: this.y + this.h }
  }
  get Center(): Point {
    return { x: this.x + this.w * 0.5, y: this.y + this.h * 0.5 }
  }
  get CenterTop(): Point {
    return { x: this.x + this.w * 0.5, y: this.y }
  }
  get CenterBottom(): Point {
    return { x: this.x + this.w * 0.5, y: this.y + this.h }
  }
}
