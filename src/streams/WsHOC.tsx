import React, { useState, useEffect } from "react"
import {Buffer} from "buffer/"

export const WsHOC = (Canvas) => ({
    isOn=true,
    token,
    websocketURL,
    robotName,
    exchange="rgbjpeg",
    handleError=(error:any) => {console.log({error})},
    ...props
  }) => {
    
    const [image, setImage] = useState(new Image())
    const [websocket, setWebsocket] = useState<WebSocket|undefined>(undefined)

    const connectWebsocket = () => {
        if (websocket !== undefined) {
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
              
              if (dataType === 2) {
                let lengths = new Uint32Array(
                  await data.slice(1, 13).arrayBuffer()
                );
                let jpgBlob = data.slice(9, 9 + lengths[0]);
                
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
              } else if (dataType === 1){      
                const HEADER_END = 13
                let lengths = new Uint32Array(
                  await data.slice(1, HEADER_END).arrayBuffer()
                )
                let imageBlob = data.slice(HEADER_END, HEADER_END + lengths[0])
                imageBlob.arrayBuffer().then(
                  (val) => {
                    let imData = {
                      data: Buffer.from(val),
                      type: 'image/jpg'
                    }
                    const newImg = new Image()
                    const buf = imData.data.toString('base64')
                    newImg.src = `data:${imData.type};base64,` + buf
                    newImg.onload = () => {
                      setImage(newImg)
                    }
                  }
                )
              }
            } catch (e) {
              handleError(ev.data)
            }
          }
          websocket.onclose = (ev) => {
            console.log('Socket is closed. Reconnect will be attempted.', ev.reason)
            if (ev.reason !== 'stay down') {
              connectWebsocket()
              setWebsocket(new WebSocket(websocketURL))
            } else {
              setWebsocket(undefined)
            }
          }
          websocket.onerror = (ev) => {
            handleError(ev)
          }
        }
      }

      useEffect(() => {
        websocket && connectWebsocket()
      }, [websocket])

      useEffect(() => {
        websocket && websocket.close(1000, "stay down")
        if (!isOn) {
          setWebsocket(undefined)
          setImage(new Image())
        } else {
          setWebsocket(new WebSocket(websocketURL))
        }
      }, [robotName, exchange, token, isOn])

    return <Canvas image={image} {...props}/>    
}