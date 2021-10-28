import { IOperatorProps } from './entities';
import { OperatorCommand } from './commands/command-base';
export interface INetworkOperator {
    enqueueCommand(command: OperatorCommand): void;
    shutdown(): void;
}
export declare class NetworkOperator implements INetworkOperator {
    private commandWebsocket;
    private settings;
    private messageQueue;
    constructor(settings: IOperatorProps);
    enqueueCommand(command: OperatorCommand): void;
    private sendQueuedCommands;
    openWebsocket(): void;
    onWSClosed: (ev: CloseEvent) => void;
    onWSOpen: (ev: Event) => void;
    onWSError: (ev: Event) => void;
    onWSMessage: (ev: any) => void;
    unpackData(data: Blob | string): void;
    shutdown(): void;
}
