import React, { useEffect, useState, useRef } from 'react'

export const ReactRgbStream = ({
  posX,
  posY,
  width,
  height,
  token,
  websocketURL,
  robotName,
  handleError
}) => {
  let websocket
  const canvasRef = useRef(null)
  const [image, setImage] = useState(new Image())

  const canvasDraw = () => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.drawImage(image, posX, posY, width, height)
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
  useEffect(() => {
    connectWebsocket()
    return () => {
      websocket.onclose = () => {}
      websocket.close()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    canvasDraw()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image])

  return <canvas ref={canvasRef} width={width} height={height} />
}
