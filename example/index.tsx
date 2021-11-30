import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { OperatorCanvas, OperatorDebug, ReactResponsiveRgbStream, ReactRgbStream } from "../src";

const props = {
    minWidth: 400,
    maxWidth: 800,
    aspectRatio: 16/9,
    websocketURL: "wss://monitor-dev.rembrain.ai:5443",
    robotName: "aivero_robot1",
    exchange: "camera0"
}

const TestApp = () => {
    const [token, setToken] = useState(null)

    useEffect(() => {
        fetch("https://monitor-dev.rembrain.ai/login", {method:"POST", body: JSON.stringify({
            username: "",
            password: ""
          })}).then((data) => {
              data.json().then((resp) => {
                  setToken(resp.access_token)
              })
              
          })
    },[])

    return( 
        <div>
            <div>
                {token && <ReactResponsiveRgbStream token={token} {...props}/>}
            </div>
        </div>
    )
}

ReactDOM.render(
    <TestApp/>,
    document.getElementById('root-debug')
);