import React, { useEffect, useRef, useState } from 'react'
import fit from 'canvas-fit'

export const ReactResponsiveRgbStream = ({
  token,
  websocketURL,
  robotName,
  handleError = () => {},
  maxWidth,
  minWidth,
  aspectRatio,
  isOn = true,
  placeholderText = 'No Image',
  exchange = 'rgbjpeg'
}: {
  token: string,
  websocketURL:string,
  robotName: string,
  handleError: any,
  maxWidth: number,
  minWidth: number,
  aspectRatio: number,
  isOn: boolean,
  placeholderText: string,
  exchange: string
}) => {
  let resizeTimeout:NodeJS.Timeout
  const [image, setImage] = useState(new Image())
  const [drawing, setDrawing] = useState(false)
  const [websocket, setWebsocket] = useState<WebSocket|undefined>(undefined)

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  
  const draw = () => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      ctx && ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    }
  }

  const connectWebsocket = () => {
    if(websocket !== undefined) {
    websocket.onopen = () => {
      let controlPacket = {
        command: 'pull',
        exchange: exchange,
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
          const jpgLength = L1.reduce((a, b) => parseInt(a.toString() + b.toString()), 0)
          const jpgBlob = data.slice(9, 9 + jpgLength)

          jpgBlob.arrayBuffer().then((val: ArrayBuffer) => {
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
          data.arrayBuffer().then((val: ArrayBuffer) => {
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
      websocket.close()
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
        if (!image.src) {
          drawPlaceholder()
        }
      }
      
    }, 500)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    draw()
    if (!image.src) {
      drawPlaceholder()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
