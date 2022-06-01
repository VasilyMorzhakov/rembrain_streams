import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { OperatorCanvas, OperatorDebug, ReactResponsiveRgbStream, ReactRgbStream } from "../src";

const props = {
    height: 500,
    width: 500,
    minWidth: 400,
    maxWidth: 800,
    aspectRatio: 16 / 9,
    websocketURL: "wss://monitor.rembrain.ai:5443",
    robotName: "aivero_xarm2",
    exchange: "camera0"
}

const TestApp = () => {
    const [token, setToken] = useState('')

    useEffect(() => {
        const data = {
            username: "test",
            password: "1322"
        }

        axios.post("https://monitor.rembrain.ai/login", data).then((resp) => {
            setToken(resp.data.access_token)
        })


    }, [])

    return (
        <div>
            <div>
                {token && <OperatorDebug accessToken={token} dataWSUrl="wss://monitor.rembrain.ai:5443" robotName='aivero_xarm2' />}
            </div>
        </div>
    )
}

ReactDOM.render(
    <TestApp />,
    document.getElementById('root-debug')
);