import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { OperatorCanvas, OperatorDebug } from "../src";

//const props = {
//    minWidth: 400,
//    maxWidth: 800,
//    aspectRatio: 1/1,
//    websocketURL: "wss://monitor-dev.rembrain.ai:5443",
//    robotName: "aivero_xarm2",
//    exchange: "camera0"
//}

const TestApp = () => {
    //const [token, setToken] = useState(null)
    const [props, setProps] = useState({
        robotName:"aivero_robot1", dataWSUrl:"wss://monitor-dev.rembrain.ai:5443",
        accessToken:""
    })

    useEffect(() => {
        fetch("https://monitor-dev.rembrain.ai/login", {method:"POST", body: JSON.stringify({
            username: "",
            password: ""
          })}).then((data) => {
              data.json().then((resp) => {
                  //setToken(resp.access_token)
                  setProps({...props, accessToken:resp.access_token})
              })
              
          })
    },[])

    return( 
        <div>
            <div>
                {props.accessToken && <OperatorDebug {...props}/>}
            </div>
        </div>
    )
}

ReactDOM.render(
    <TestApp/>,
    document.getElementById('root-debug')
);