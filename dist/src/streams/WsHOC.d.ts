/// <reference types="react" />
export declare const WsHOC: (Canvas: any) => ({ isOn, token, websocketURL, robotName, exchange, handleError, ...props }: {
    [x: string]: any;
    isOn?: boolean;
    token: any;
    websocketURL: any;
    robotName: any;
    exchange?: string;
    handleError?: (error: any) => void;
}) => JSX.Element;
