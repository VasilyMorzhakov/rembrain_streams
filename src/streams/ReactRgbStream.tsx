// @ts-nocheck
import React, { useEffect, useRef } from 'react'
import { WsHOC } from './WsHOC'

let newImg = new Image(100,100)

const ReactRgbStream = ({
  posX = 0,
  posY = 0,
  width,
  height,
  placeholderText = 'No Image',
  image,
}: any) => {
  const canvasRef = useRef<HTMLCanvasElement | null> (null)

  const draw = () => {
    
      const canvas = canvasRef.current
      if (canvas) {
        const context = canvas.getContext('2d')
        context && context.drawImage(newImg, posX, posY, width, height)
      }
    
  }  

  const drawPlaceholder = () => {
    const canvas = canvasRef.current
    if (canvas) {
      const context = canvas.getContext('2d')
      if (context) {
        context.clearRect(1, 1, canvas.width-2, canvas.height-2)
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
    if(image) {
      newImg.src = image
    } else {
      drawPlaceholder()
    }
  }, [image])

  useEffect(() => {
    newImg.onload = () => {
      draw()
    }
  },[])

  return <canvas ref={canvasRef} width={width} height={height} />
}

export default WsHOC(ReactRgbStream)