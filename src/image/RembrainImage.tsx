import React, { useEffect, useState } from 'react'

export const RembrainImage = ({ token, url, width, height, alt="Image", onLoad=()=>{}, onError=()=>{} }:
  {
    token: string,
    url: string,
    width: number,
    height: number,
    alt: string,
    onLoad: ()=>any,
    onError: ()=>any,
  }) => {
  const [src, setSrc] = useState("")
  useEffect(() => {
    if (url) {
      fetch(url, { headers: { Authorization: token } }).then((resp) => {
        resp.blob().then((blobResp) => {
          const data = blobResp
          const urlCreator = window.URL || window.webkitURL
          const objectUrl = urlCreator.createObjectURL(data)
          setSrc(objectUrl)
        })
      })
    }
  }, [url])
  return (
    <img
      onLoad={onLoad}
      onError={onError}
      src={src && src}
      id='rembrainImage'
      className='rembrain-image'
      width={width}
      height={height}
      alt={alt ? alt : ''}
    />
  )
}
