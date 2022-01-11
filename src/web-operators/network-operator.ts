// @ts-nocheck
import { IOperatorProps } from './entities'
import { OperatorCommand } from './commands/command-base'

export interface INetworkOperator {
  enqueueCommand(command: OperatorCommand): void
  shutdown(): void
}

type Message = {
  command: string
  exchange: string
  robot_name: string
  message: OperatorCommand
  access_token: string
}

export class NetworkOperator implements INetworkOperator {
  private commandWebsocket: WebSocket
  private settings: IOperatorProps

  // private hasSentCommand = false;

  private messageQueue: Message[] = []

  constructor(settings: IOperatorProps) {
    this.settings = settings
    this.openWebsocket()
  }

  enqueueCommand(command: OperatorCommand): void {
    let messageObj: Message = {
      command: 'push',
      exchange: `commands`,
      robot_name: this.settings.robotName,
      message: command,
      access_token: this.settings.accessToken
    }
    console.log({ messageObj })
    console.log('Enqueuing command:', command)
    this.messageQueue.push(messageObj)
    this.sendQueuedCommands()
  }

  private sendQueuedCommands(): void {
    if (this.messageQueue.length == 0) return
    // sending commands one by one, since the websocket closes after each one
    while (
      this.messageQueue.length &&
      this.commandWebsocket.readyState === WebSocket.OPEN
    ) {
      let command = this.messageQueue.shift()
      console.debug('Sending:', command)
      this.commandWebsocket.send(JSON.stringify(command))
    }
  }

  openWebsocket() {
    this.commandWebsocket = new WebSocket(this.settings.dataWSUrl)
    this.commandWebsocket.onopen = this.onWSOpen
    this.commandWebsocket.onclose = this.onWSClosed
    this.commandWebsocket.onerror = this.onWSError
    this.commandWebsocket.onmessage = this.onWSMessage
  }

  onWSClosed = (ev: CloseEvent) => {
    console.debug('Command Websocket Closed', ev)
    console.debug('Trying to open the websocket again')
    this.openWebsocket()
  }

  onWSOpen = (ev: Event) => {
    console.debug('Command Websocket Opened', ev)
    // this.hasSentCommand = false;
    if (this.messageQueue.length) {
      console.log('There are unsent messages in the queue, sending them')
      this.sendQueuedCommands()
    }
  }

  onWSError = (ev: Event) => {
    console.log('Command Websocket Error', ev)
  }

  onWSMessage = (ev: any) => {
    this.unpackData(ev.data)
  }

  unpackData(data: Blob | string) {
    if (typeof data === 'string') {
      console.log('Command answer:', data)
      return
    }
    data.text().then((res) => console.log(JSON.parse(res)))
  }

  public shutdown() {
    this.commandWebsocket.onclose = null
    this.commandWebsocket.close()
    this.commandWebsocket = null
  }
}
