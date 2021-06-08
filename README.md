# rembrain_streams

# React RGB stream canvas

# Install

```bash
yarn add git+https://github.com/VasilyMorzhakov/rembrain_streams.git
```

## Usage

```jsx
import RgbStreamCanvas from 'rgb-stream-canvas'

const ExampleComponent = () => {
  return (
    <div>
      <RgbStreamCanvas
        posX={0}
        posY={0}
        width={640}
        height={360}
        token={'acces token goes here'}
        websocketURL={'websocket url here'}
        robotName={'your robot name'}
        handleError={(ev) => {
          console.log('Oh, no! Websocket error occured ', ev.message)
        }}
      />
    </div>
  )
}
```
