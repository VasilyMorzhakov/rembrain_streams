// @ts-nocheck
import React from 'react';
import ReactDOM from "react-dom";
import { SetCommandOperatorValue } from "./commands/command-base";
import { IOperatorProps } from "./entities";
import { OperatorCanvas, OperatorDebug } from "./web-operators";

export function initWebOperator(settings: IOperatorProps, element: HTMLElement) {
    SetCommandOperatorValue("operator");

    if (!settings.accessToken) {
        console.error("No access token provided!");
    }

    ReactDOM.render(
        <OperatorCanvas {...settings}/>,
        element
    );
}

export function initDebugOperator(settings: IOperatorProps, element: HTMLElement) {
    SetCommandOperatorValue("debugOperator");

    if (!settings.accessToken) {
        console.error("No access token provided!");
    }

    ReactDOM.render(
        <OperatorDebug {...settings}/>,
        element
    );
}