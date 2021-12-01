// @ts-nocheck
// @ts-ignore
const wsWorkerCode = () => {
  let ws = null

  const getImageData = (data) => {
    return data
      .slice(0, 1)
      .arrayBuffer()
      .then((resp) => {
        const dataType = new Uint8Array(resp)[0]
        if (dataType === 1 || dataType === 2) {
          return data
            .slice(1, 13)
            .arrayBuffer()
            .then((response) => {
              const lengths = new Uint32Array(response)
              const HEADER_END = dataType === 1 ? 13 : 9
              return data
                .slice(HEADER_END, HEADER_END + lengths[0])
                .arrayBuffer()
            })
        }
      })
  }

  const streamStart = (packet, url, type) => {
    if (ws) {
      ws.onopen = () => {
        ws.send(packet)
      }
      ws.onmessage = (ev) => {
        const { data } = ev
        try {
          if (type === 'all') {
            data
              .slice(0, 1)
              .arrayBuffer()
              .then((arrbuff) => {
                const dataType = new Uint8Array(arrbuff)[0]
                if (dataType === 1) {
                  const HEADER_END = 13
                  data
                    .slice(1, HEADER_END)
                    .arrayBuffer()
                    .then((lengthbuff) => {
                      const lengths = new Uint32Array(lengthbuff)
                      Promise.all([
                        data
                          .slice(HEADER_END, HEADER_END + lengths[0])
                          .arrayBuffer(),
                        data
                          .slice(
                            HEADER_END + lengths[0],
                            HEADER_END + lengths[0] + lengths[1]
                          )
                          .arrayBuffer(),
                        data
                          .slice(
                            HEADER_END + lengths[0] + lengths[1],
                            HEADER_END + lengths[0] + lengths[1] + lengths[2]
                          )
                          .text()
                      ]).then((resp) => {
                        postMessage({
                          type: 'data',
                          payload: resp
                        })
                      })
                    })
                } else {
                  getImageData(data).then((val) => {
                    postMessage({
                      type: 'data',
                      payload: [val, null, null]
                    })
                  })
                }
              })
          } else if (type === 'image_only') {
            getImageData(data).then((val) => {
              const type = 'image/jpg'
              const uint8 = new Uint8Array(val)

              // Chrome thinks that uint8Array is too long to "String.fromCharCode" it,
              // so it's sliced, stringified and than concated back
              // It's kinda disgusting but it works
              let prebtoabuf = ''
              for (let i = 0; i < 10; i++) {
                let n = uint8.length / 10
                prebtoabuf += String.fromCharCode.apply(
                  null,
                  uint8.slice(n * i, n * (i + 1))
                )
              }
              const buf = btoa(prebtoabuf)
              postMessage({
                type: 'image',
                payload: `data:${type};base64,` + buf
              })
            })
          }
        } catch (err) {
          postMessage(`Websocket received message: ${data}`)
        }
      }
      ws.onclose = (ev) => {
        if (ev.reason !== 'stay down') {
          setTimeout(() => {
            ws = new WebSocket(url)
            streamStart(packet, url, type)
          }, 5000)
        } else {
          if (type === 'image_only') {
            postMessage({ type: 'image', payload: null })
          } else if (type === 'all') {
            postMessage({
              type: 'data',
              payload: { image: null, depth: null, status: null }
            })
          }
        }
      }
      ws.onerror = (err) => {
        postMessage({ type: 'error', payload: err })
      }
    }
  }

  self.onmessage = ({ data }) => {
    const { type, payload, url, outputWanted } = data
    switch (type) {
      case 'open':
        if (ws) {
          ws.close(1000, 'stay down')
        }
        ws = new WebSocket(url)
        streamStart(payload, url, outputWanted)
        return

      case 'close':
        if (ws) {
          ws.close(1000, 'stay down')
          ws = null
        }
        return
    }
  }
}

let code = wsWorkerCode.toString()
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'))

const blob = new Blob([code], { type: 'application/javascript' })
const worker_script = URL.createObjectURL(blob)

module.exports = worker_script
