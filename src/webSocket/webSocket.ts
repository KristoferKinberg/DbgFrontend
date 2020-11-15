import React from "react";
import {useDispatch} from "react-redux";
import {JOIN_GAME } from "../store/room/room.actions";
import {CREATE_SERVER} from "./webSocketActions";
import generateMessageHandlers from "./messangeHandlers";

export interface WebSocketObject {
  webSocket: any;
  createServer(): void;
  joinGame(roomId: string): void;
  addMessageHandlers(messageHandlers: any): void;
}

const WebSocketHook = (): WebSocketObject => {
  const webSocket: any = React.useRef(null);
  const ws = webSocket?.current;
  const dispatch = useDispatch();

  /**
   * Send message
   * @param msg
   */
  const sendMessage = (msg: object) => {
    console.log('Message: ', JSON.stringify({ ...msg, clientId: localStorage.getItem('clientId') }));
    webSocket.current.send(JSON.stringify({ ...msg, clientId: localStorage.getItem('clientId') }));
  };

  const [messageHandlers, setMessageHandlers]: any = React.useState(generateMessageHandlers(dispatch, sendMessage));

  React.useEffect(() => {
    webSocket.current = new WebSocket('ws://localhost:8080');
    const ws = webSocket?.current;

    ws.onopen = (...args: any) => {
      console.log('connected', args);
    }

    ws.onmessage = (evt: any) => {
      console.log(evt, JSON.parse(evt.data));
      const data = JSON.parse(evt.data);

      messageHandlers[data.type](data);
    }

    ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
    }
  }, [messageHandlers]);

  /**
   * Create server
   */
  const createServer = () => sendMessage({ type: CREATE_SERVER });

  /**
   * Join game
   * @param roomId
   */
  const joinGame = (roomId: string) => sendMessage({ type: JOIN_GAME, roomId })

  /**
   * Add new message handlers
   * @param newMessageHandlers
   */
  const addMessageHandlers = (newMessageHandlers: any) => {
    setMessageHandlers({ ...messageHandlers, ...newMessageHandlers });
  };

  return {
    webSocket: ws,
    createServer,
    joinGame,
    addMessageHandlers
  }
};

export default WebSocketHook;
