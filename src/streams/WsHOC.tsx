// @ts-nocheck
import React, { useState, useEffect } from "react"
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
              break
            case "image":
              if (payload) {
                setImage(payload)
              } else if (exchange !== "camera1") {
                setImage(null)
              }
              break
            case "error":
              handleError(payload)
              break
            default:
              console.log(data)
              break
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
              access_token: token,
              robot_name: robotName
            }
            wsworker.postMessage({type:"open", payload: JSON.stringify(controlPacket), url: websocketURL, outputWanted:canDownload?"all":"image_only"})
          } else {
            wsworker.postMessage({type:"close"})
          }
          
        }  
      }, [robotName, exchange, token, isOn, wsworker])
    
    return <Canvas image={image} data={data} {...props}/>    
}