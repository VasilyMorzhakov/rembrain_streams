import React, { useEffect } from 'react/cjs/react.development'

export const RembrainImage = (token, url) => {
  useEffect(() => {
    fetch(url, { headers: { Authorization: token } }).then((resp) => {
      resp.blob().then((blobResp) => {
        const data = blobResp
        const urlCreator = window.URL || window.webkitURL
        document.getElementById('rembrainImage').src =
          urlCreator.createObjectURL(data)
      })
    })
  }, [token, url])
  return <img id='rembrainImage' />
}
