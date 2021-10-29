import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ReactResponsiveRgbStream, ReactRgbStream, OperatorDebug, OperatorCanvas } from "../src";

const props = {
    minWidth: 400,
    maxWidth: 800,
    aspectRatio: 1/1,
    websocketURL: "wss://monitor.rembrain.ai:5443",
    robotName: "aivero_xarm2",
    exchange: "camera0"
}
/*
const props = {
    dataWSUrl:"wss://monitor.rembrain.ai:5443",
    robotName: "aivero_xarm2",
}
*/

const TestApp = () => {
    const [token, setToken] = useState(null)

    useEffect(() => {
        fetch("https://monitor.rembrain.ai/login", {method:"POST", body: JSON.stringify({
            username: "test",
            password: "1322"
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