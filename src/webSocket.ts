import React from "react";

export interface WebSocketObject {
  webSocket: any;
  connect(): void;
  createServer(): void;
}

const WebSocketHook = (): WebSocketObject => {
  const webSocket: any = React.useRef(null);
  const ws = webSocket?.current;

  React.useEffect(() => {
    // @ts-ignore
    webSocket.current = new WebSocket('ws://localhost:8080');
    const ws = webSocket?.current;

    ws.onopen = () => {
      console.log('connected')
    }

    ws.onmessage = (evt: any) => {
      console.log(evt)
    }

    ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
    }
  }, []);

  const connect = () => {
    // @ts-ignore
    new WebSocket('ws://localhost:8080');
  }

  const createServer = () => {
    webSocket.current.send('createServer');
  };

  return {
    webSocket: ws,
    connect,
    createServer
  }
};

export default WebSocketHook;
