import React, { useState, useEffect } from "react"
//import wsworker from "./wsworker";

//class WebWorker {
//  constructor(worker) {
//      const code = worker.toString();
//      const blob = new Blob(['('+code+')()']);
//      return new Worker(URL.createObjectURL(blob));
//  }
//}

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
    const [worker,setWorker] = useState(null)
      
      useEffect(() => {
        let webworker
        webworker = new Worker(new URL('./wsworker', import.meta.url))

        webworker.addEventListener('message', ({data}) => {
          const {type, payload} = data
          console.log("it's updated")
          switch (type) {
            case "image":
              const newImg = new Image()
              if (payload) {
                newImg.src = payload
                newImg.onload = () => {
                  setImage(newImg)
                }
              } else {
                setImage(newImg)
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
        if (worker) {
          if (isOn) {
            let controlPacket = {
              command: 'pull',
              exchange: exchange,
              accessToken: token,
              robot_name: robotName
            }
            worker.postMessage({type:"open", payload: JSON.stringify(controlPacket), url: websocketURL})
          } else {
            worker.postMessage({type:"close"})
          }
          
        }  
      }, [robotName, exchange, token, isOn, worker])
    
    return <Canvas image={image} {...props}/>    
}