import axios from 'axios';
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
        const data = {username: "",
        password: ""}

        axios.post("https://monitor-dev.rembrain.ai/login", data ).then((resp) => {
            setToken(resp.data.access_token)
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