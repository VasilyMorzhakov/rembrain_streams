import React, { useState, useEffect } from "react"
//@ts-ignore
import worker_script from './ws.worker';

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
    const [depth,setDepth] = useState(null)
    const [status, setStatus] = useState(null)

    const [wsworker,setWorker] = useState(null)
      
      useEffect(() => {
        let webworker
        webworker = new Worker(worker_script)

        webworker.addEventListener('message', ({data}) => {
          const {type, payload} = data
          switch (type) {
            case"data":
              const [image,depth,status] = payload
              setImage(image)
              setDepth(depth)
              setStatus(status)
            case "image":
              if (payload) {
                const newImg = new Image()
                newImg.src = payload
                newImg.onload = () => {
                  setImage(newImg)
                }
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
    
    return <Canvas image={image} depth={depth} status={status} {...props}/>    
}