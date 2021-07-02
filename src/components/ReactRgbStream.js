import React, { useEffect, useState, useRef } from 'react'

export const ReactRgbStream = ({
  posX,
  posY,
  width,
  height,
  token,
  websocketURL,
  robotName,
  handleError,
  isOn,
  placeholderText,
  exchange
}) => {
  const canvasRef = useRef(null)
  const [image, setImage] = useState(new Image())
  const [websocket, setWebsocket] = useState(undefined)

  const canvasDraw = () => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.drawImage(image, posX, posY, width, height)
  }

  const connectWebsocket = () => {
    websocket.onopen = () => {
      let controlPacket = {
        command: 'pull',
        exchange: exchange ? exchange : 'rgbjpeg',
        accessToken: token,
        robot_name: robotName
      }
      websocket.send(JSON.stringify(controlPacket))
    }

    websocket.onmessage = async (ev) => {
      try {
        const { data } = ev
        const dataType = new Uint8Array(await data.slice(0, 1).arrayBuffer())[0]

        if (dataType == 2) {
          const L1 = new Uint8Array(await data.slice(1, 4).arrayBuffer())
          const jpgLength = L1.reduce((a, b) => a.toString() + b.toString(), 0)
          const jpgBlob = data.slice(9, 9 + jpgLength)

          jpgBlob.arrayBuffer().then((val) => {
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
        } else {
          //
          data.arrayBuffer().then((val) => {
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
        }
      } catch (err) {
        console.log(`Error occured while decoding websocket message ${err}`)
      }
    }

    websocket.onclose = (ev) => {
      console.log('Socket is closed. Reconnect will be attempted.', ev.reason)
      setWebsocket(new WebSocket(websocketURL))
      connectWebsocket()
    }
    websocket.onerror = (ev) => {
      handleError(ev)
    }
  }
  useEffect(() => {
    websocket && connectWebsocket()
    return () => {
      if (websocket) {
        websocket.onclose = () => {}
        websocket.close()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [websocket])

  const drawPlaceholder = () => {
    const context = canvasRef.current.getContext('2d')
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    context.fillStyle = '#d3d3d3'
    context.textAlign = 'center'
    context.font = '5em Arial'
    context.textBaseline = 'center'
    context.fillText(
      placeholderText,
      canvasRef.current.width / 2,
      canvasRef.current.height / 2
    )
  }

  useEffect(() => {
    websocket && websocket.close()
    setImage(new Image())
    drawPlaceholder()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [robotName])

  useEffect(() => {
    if (!isOn) {
      setImage(new Image())
      if (websocket) {
        websocket.onclose = () => {}
        websocket.close()
      }
    } else {
      setWebsocket(new WebSocket(websocketURL))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOn])

  useEffect(() => {
    canvasDraw()
    if (!image.src) {
      drawPlaceholder()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image])

  return <canvas ref={canvasRef} width={width} height={height} />
}
