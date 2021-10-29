import React, { useState, useEffect } from "react"

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
    const [wsworker,setWorker] = useState(null)
      
      useEffect(() => {
        let webworker
        webworker = new Worker("worker.js")

        webworker.addEventListener('message', ({data}) => {
          const {type, payload} = data
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
        if (wsworker) {
          if (isOn) {
            let controlPacket = {
              command: 'pull',
              exchange: exchange,
              accessToken: token,
              robot_name: robotName
            }
            wsworker.postMessage({type:"open", payload: JSON.stringify(controlPacket), url: websocketURL})
          } else {
            wsworker.postMessage({type:"close"})
          }
          
        }  
      }, [robotName, exchange, token, isOn, wsworker])
    
    return <Canvas image={image} {...props}/>    
}