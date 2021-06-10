import React, { useEffect, useRef, useState } from 'react'
import { Segment } from 'semantic-ui-react'
import fit from 'canvas-fit'

export const ReactResponsiveRgbStream = ({
  token,
  websocketURL,
  robotName,
  handleError,
  maxWidth,
  minWidth,
  aspectRatio
}) => {
  let resizeTimeout
  let websocket

  const [image, setImage] = useState(new Image())
  const [drawing, setDrawing] = useState(false)

  const canvasRef = useRef(null)

  const draw = () => {
    const canvas = canvasRef.current
    console.log(image)
    const ctx = canvas.getContext('2d')
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
  }

  const connectWebsocket = () => {
    websocket = new WebSocket(websocketURL)

    websocket.onopen = () => {
      let controlPacket = {
        command: 'pull',
        exchange: `rgbjpeg`,
        accessToken: token,
        robot_name: robotName
      }
      websocket.send(JSON.stringify(controlPacket))
    }

    websocket.onmessage = (ev) => {
      try {
        ev.data.arrayBuffer().then((val) => {
          var imData = {
            data: Buffer.from(val),
            type: 'image/jpg'
          }
          const newImg = new Image()
          const buf = imData.data.toString('base64')
          newImg.src = `data:${imData.type};base64,` + buf
          newImg.onload = () => {
            setImage(newImg)
          }
        })
      } catch (err) {
        console.log(`Error occured while decoding websocket message ${err}`)
      }
    }

    websocket.onclose = (ev) => {
      console.log('Socket is closed. Reconnect will be attempted.', ev.reason)
      connectWebsocket()
    }
    websocket.onerror = (ev) => {
      handleError(ev)
    }
  }

  const handleResize = () => {
    clearTimeout(resizeTimeout)
    setDrawing(false)
    resizeTimeout = setTimeout(() => {
      fit(canvasRef.current)
      setDrawing(true)
    }, 500)
  }

  useEffect(() => {
    fit(canvasRef.current)
    draw()
    setDrawing(true)
    //
    connectWebsocket()
    //
    window.addEventListener('resize', handleResize, false)
    return () => {
      window.removeEventListener('resize', handleResize, false)
      websocket.onclose = () => {}
      websocket.close()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    draw()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image])

  return (
    <Segment
      basic
      style={{
        aspectRatio: aspectRatio.toString(),
        maxWidth,
        minWidth,
        padding: 0,
        margin: 0
      }}
    >
      <canvas style={drawing ? {} : { display: 'none' }} ref={canvasRef} />
    </Segment>
  )
}
