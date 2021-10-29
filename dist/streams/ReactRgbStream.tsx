import React, { useEffect, useRef } from 'react'
import { WsHOC } from './WsHOC'

const ReactRgbStream = ({
  posX = 0,
  posY = 0,
  width,
  height,
  placeholderText = 'No Image',
  image = new Image(),
}: any) => {
  const canvasRef = useRef<HTMLCanvasElement | null> (null)

  const canvasDraw = () => {
    const canvas = canvasRef.current
    if (canvas) {
      const context = canvas.getContext('2d')
      context && context.drawImage(image, posX, posY, width, height)
    }
    
  }  

  const drawPlaceholder = () => {
    const canvas = canvasRef.current
    if (canvas) {
      const context = canvas.getContext('2d')
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height)
        context.fillStyle = '#d3d3d3'
        context.textAlign = 'center'
        context.font = '5em Arial'
        context.textBaseline = 'middle'
        context.fillText(
          placeholderText,
          canvas.width / 2,
          canvas.height / 2
        )
      }
    
    }
    
  }

  useEffect(() => {
    canvasDraw()
    if (!image.src){
      drawPlaceholder()
    }
  }, [image])

  return <canvas ref={canvasRef} width={width} height={height} />
}

export default WsHOC(ReactRgbStream)