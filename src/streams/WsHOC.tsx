// @ts-nocheck
import React, { useState, useEffect } from "react"
import worker_script from './ws.worker';

let newImg = new Image(100,100)

export const WsHOC = (Canvas) => ({
    isOn=true,
    token,
    websocketURL,
    robotName,
    exchange="rgbjpeg",
    handleError=(error:any) => {console.log({error})},
    canDownload=false,
    ...props
  }) => {
    
    const [image, setImage] = useState(null)
    const [data, setData] = useState(null)

    const [wsworker,setWorker] = useState(null)
      
      useEffect(() => {
        let webworker
        webworker = new Worker(worker_script)

        webworker.addEventListener('message', ({data}) => {
          const {type, payload} = data
          switch (type) {
            case"data":
              setData(payload)
            case "image":
              if (payload) {
                const newImg = new Image(100,100)
                newImg.src = payload
              } else {
                setImage(null)
              }
              return
            case "error":
              handleError(payload)
              return
            default:
              console.log(data)
              return
          }
        })
        setWorker(webworker)
        return () => {
          webworker.postMessage({type:"close"})
          webworker.terminate()
        }
      },[])

      useEffect(() => {
        if (wsworker) {
          if (isOn) {
            let controlPacket = {
              command: 'pull',
              exchange: exchange,
              accessToken: token,
              robot_name: robotName
            }
            wsworker.postMessage({type:"open", payload: JSON.stringify(controlPacket), url: websocketURL, outputWanted:canDownload?"all":"image_only"})
          } else {
            wsworker.postMessage({type:"close"})
          }
          
        }  
      }, [robotName, exchange, token, isOn, wsworker])

      useEffect(() => {
        newImg.onload = () => {
          setImage(newImg)
          
        }
        return () => {
          newImg = new Image(100,100)
        }
      },[])
    
    return <Canvas image={image} data={data} {...props}/>    
}