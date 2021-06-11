# rembrain_streams

# React RGB stream canvas

# Install

```bash
yarn add rembrain_streams
or
npm install rembrain_streams
```

## Usage

## Fixed size canvas

```jsx
import { ReactRgbStream } from 'rembrain_streams'

const UsageExampleComponent = () => {
  return (
    <div>
      <ReactRgbStream
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

## Or if you want responsive canvas

```jsx
import { ReactResponsiveRgbStream } from 'rembrain_streams'

const UsageExampleComponent = () => {
  return (
    <div>
      <ReactResponsiveRgbStream
        maxWidth={640}
        minWidth={1024}
        aspectRatio={16 / 9}
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
