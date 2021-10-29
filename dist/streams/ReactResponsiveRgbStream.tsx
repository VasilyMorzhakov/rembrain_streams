import React, { useEffect, useRef, useState } from 'react'
import fit from 'canvas-fit'
import { WsHOC } from './WsHOC'

const ReactResponsiveRgbStream = ({
  maxWidth,
  minWidth,
  aspectRatio,
  placeholderText = 'No Image',
  image
} : {
  maxWidth: number,
  minWidth: number,
  aspectRatio: number,
  placeholderText: string,
  image: any,
}) => {
  let resizeTimeout:any
  const [drawing, setDrawing] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  
  const draw = () => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      ctx && ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    }
  }

  const handleResize = () => {
    clearTimeout(resizeTimeout)
    setDrawing(false)
    resizeTimeout = setTimeout(() => {
      const canvas = canvasRef.current
      if (canvas) {
        fit(canvas)
        setDrawing(true)
        if (!image.src) {
          drawPlaceholder()
        }
      }
      
    }, 500)
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
    const canvas = canvasRef.current
    if (canvas) {
      fit(canvas)
      draw()
      setDrawing(true)
      window.addEventListener('resize', handleResize, false)
    }
    return () => {
      window.removeEventListener('resize', handleResize, false)
    }
  }, [])

  useEffect(() => {
    draw()
    if (!image.src) {
      drawPlaceholder()
    }
  }, [image])

  return (
    <div
      style={{
        aspectRatio: aspectRatio.toString(),
        maxWidth,
        minWidth,
        padding: 0,
        margin: 0,
        position: 'relative'
      }}
    >
      <canvas style={drawing ? {} : { display: 'none' }} ref={canvasRef} />
    </div>
  )
}

export default WsHOC(ReactResponsiveRgbStream)