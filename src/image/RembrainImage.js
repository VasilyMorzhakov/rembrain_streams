import React, { useEffect, useState } from 'react/cjs/react.development'

export const RembrainImage = ({ token, url, width, height, alt }) => {
  const [src, setSrc] = useState(null)
  useEffect(() => {
    if (url) {
      fetch(url, { headers: { Authorization: token } }).then((resp) => {
        resp.blob().then((blobResp) => {
          const data = blobResp
          const urlCreator = window.URL || window.webkitURL
          setSrc(urlCreator.createObjectURL(data))
        })
      })
    }
  }, [url])
  return (
    <img
      src={src}
      id='rembrainImage'
      className='rembrain-image'
      width={width}
      height={height}
      alt={alt ? alt : ''}
    />
  )
}
