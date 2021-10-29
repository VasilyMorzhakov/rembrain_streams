/*let ws = null

const streamStart = (packet, url) => {
  if (ws) {
    ws.onopen = () => {
      ws.send(packet)
    }

    ws.onmessage = async (ev) => {
      try {
        const { data } = ev
        if (typeof data === 'object') {
          const dataType = new Uint8Array(
            await data.slice(0, 1).arrayBuffer()
          )[0]
          let imageBlob = null
          if (dataType === 2) {
            const lengths = new Uint32Array(
              await data.slice(1, 13).arrayBuffer()
            )
            imageBlob = data.slice(9, 9 + lengths[0])
          } else if (dataType === 1) {
            const HEADER_END = 13
            const lengths = new Uint32Array(
              await data.slice(1, HEADER_END).arrayBuffer()
            )
            imageBlob = data.slice(HEADER_END, HEADER_END + lengths[0])
          }
          if (imageBlob) {
            imageBlob.arrayBuffer().then((val) => {
              const type = 'image/jpg'
              const uint8 = new Uint8Array(val)
              // Chrome thinks that uint8Array is too long to "String.fromCharCode" it,
              // so it's sliced, stringified and than concated back
              // It's kinda disgusting but it works
              let prebtoabuf = ''
              for (let i = 0; i < 5; i++) {
                let n = uint8.length / 5
                prebtoabuf += String.fromCharCode.apply(
                  null,
                  uint8.slice(n * i, n * (i + 1))
                )
              }
              const buf = btoa(prebtoabuf)

              const src = `data:${type};base64,` + buf
              postMessage({ type: 'image', payload: src })
            })
          } else {
          }
        } else {
          postMessage(`Websocket received message: ${data}`)
        }
      } catch (err) {
        postMessage({ type: 'error', payload: err })
      }
    }
    ws.onclose = (ev) => {
      if (ev.reason !== 'stay down') {
        ws = new WebSocket(url)
        streamStart(packet, url)
      } else {
        postMessage({ type: 'image', payload: null })
      }
    }
    ws.onerror = (err) => {
      postMessage({ type: 'error', payload: err })
    }
  }
}

onmessage = ({ data }) => {
  const { type, payload, url } = data
  switch (type) {
    case 'open':
      if (ws) {
        ws.close(1000, 'stay down')
      }
      ws = new WebSocket(url)
      streamStart(payload, url)
      return

    case 'close':
      if (ws) {
        ws.close(1000, 'stay down')
        ws = null
      }
      return
  }
}
*/
onmessage = () => {
  postMessage('WEBWORKER ALIVE')
}
