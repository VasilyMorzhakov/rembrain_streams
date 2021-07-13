# rembrain_streams

## Remrain utils components

## How to install

`npm install rembrain_streams`
or
`yarn add rembrain_streams`
## How to use
### Web Operators
Use the two components (TypeScript typings are included):
- `OperatorDebug` - debugging operator with separate frames for image and depth + a bunch of controls
- `OperatorCanvas` - operator that composits image and depth image and allows you to mark stuff using your mouse

Props accepted by both operators:
```js
    dataWSUrl: string,   // websocket url
    robotName: string,   // robot's name
    accessToken: string  // access token
```
### RembrainImage
  Component to display image file from api
  Props:
```js
    token: string, 
    url: string,
    width: number,
    height: number,
    alt: string
```
### ReactRgbStream
  Fixed size rgbjpeg stream component
  Props:
```js
  posX: number, //default=0
  posY: number, //default=0
  width: number,
  height: number,
  token: string, 
  websocketURL: string,
  robotName: string,
  handleError: any, //default = (err) => {console.log(err))
  isOn: boolean, //default = true
  placeholderText:string, //default = "No Image"
  exchange: string //default="rgbjpeg" (but should use "camera0" if possible)
```
### ReactResponsiveRgbStream
  Responsive rgbjpeg stream component
  Props:
```js
token: string,
  websocketURL:string,
  robotName: string,
  handleError: any, //default = (err) => {console.log(err))
  maxWidth: number,
  minWidth: number,
  aspectRatio: number, 
  isOn: boolean, //default = true
  placeholderText:string, //default = "No Image"
  exchange: string //default="rgbjpeg" (but should use "camera0" if possible)
```
