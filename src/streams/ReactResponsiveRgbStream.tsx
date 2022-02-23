// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react'
import fit from 'canvas-fit'
import { WsHOC } from './WsHOC'
import "./ReactResp.scss"

const ReactResponsiveRgbStream = ({
  maxWidth,
  minWidth,
  aspectRatio,
  placeholderText = 'No Image',
  image
}: {
  maxWidth: number,
  minWidth: number,
  aspectRatio: number,
  placeholderText: string,
  image: any,
}) => {
  let resizeTimeout: any

  const [drawing, setDrawing] = useState(false)
  const [imageExists, setImageExists] = useState(false)
  const [resizeImage, setResizeImage] = useState('')
  const [placeholderImage, setPlaceholderImage] = useState('')

  const newImg = useRef(new Image(100, 100))
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const draw = () => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        if (imageExists) {
          ctx.drawImage(
            newImg.current,
            0,
            0,
            canvas.width,
            canvas.height
          )
        }
      }
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
        draw()
      }
    }, 350)
  }


  useEffect(() => {
    if (imageExists) {
      dispatchEvent(new Event('resize'))
      const canvas = canvasRef.current
      if (canvas) {
        fit(canvas)
        setDrawing(true)
        window.addEventListener('resize', handleResize, false)
      }
      return () => {
        window.removeEventListener('resize', handleResize, false)
      }
    }
  }, [imageExists])

  useEffect(() => {
    if (image) {
      newImg.current.src = image
    } else {
      setImageExists(false)
    }
  }, [image])

  useEffect(() => {
    newImg.current.onload = () => {
      setImageExists(true)
      draw()
    }
  }, [imageExists])

  useEffect(() => {
    if (imageExists) {
      if (drawing) {
        setTimeout(() => {
          setResizeImage('')
        }, 300)
      } else {
        setResizeImage(newImg.current.src)
      }
    }
  }, [drawing, imageExists])

  useEffect(() => {
    const holderCanvas = document.createElement('canvas')
    const ctx = holderCanvas.getContext('2d')
    ctx.fillStyle = '#d3d3d3'
    ctx.textAlign = 'center'
    ctx.font = '3em Arial'
    ctx.textBaseline = 'middle'
    ctx.fillText(
      placeholderText,
      holderCanvas.width / 2,
      holderCanvas.height / 2
    )
    setPlaceholderImage(holderCanvas.toDataURL())
  }, [placeholderText])

  return (
    <div
      className='rembrain-responsive-stream-container'
      style={{
        aspectRatio: aspectRatio.toString(),
        maxWidth,
        minWidth,
        padding: 0,
        margin: 0,
        position: 'relative',
        overflow: "hidden"
      }}
    >
      <canvas
        style={resizeImage || !imageExists ? { display: 'none' } : {}}
        ref={canvasRef}
      />
      <img
        style={{ position: 'absolute', top: 0, left: 0 }}
        width="100%"
        height="100%"
        src={imageExists ? resizeImage : placeholderImage}
      />
    </div>
  )
}

export default WsHOC(ReactResponsiveRgbStream)