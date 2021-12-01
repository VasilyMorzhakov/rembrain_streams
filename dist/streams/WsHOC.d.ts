/// <reference types="react" />
export declare const WsHOC: (Canvas: any) => ({ isOn, token, websocketURL, robotName, exchange, handleError, canDownload, ...props }: {
    [x: string]: any;
    isOn?: boolean | undefined;
    token: any;
    websocketURL: any;
    robotName: any;
    exchange?: string | undefined;
    handleError?: ((error: any) => void) | undefined;
    canDownload?: boolean | undefined;
}) => JSX.Element;
