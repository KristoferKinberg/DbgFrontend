import React from "react";
import {useDispatch} from "react-redux";
import {JOIN_GAME } from "../store/room/room.actions";
import {CREATE_SERVER, LEAVE_GAME, START_GAME} from "./webSocketActions";
import generateMessageHandlers from "./messangeHandlers";
import {WebSocketObject} from "./Websocket.types";

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
      console.log('disconnected');
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
   * Leave game
   * @param roomId
   */
  const leaveGame = (roomId: string) => sendMessage({ type: LEAVE_GAME, roomId });

  /**
   * Start game
   * @param roomId
   */
  const startGame = (roomId: string) => sendMessage({ type: START_GAME, roomId });

  /**
   * Add new message handlers
   * @param newMessageHandlers
   */
  const addMessageHandlers = (newMessageHandlers: any) => {
    setMessageHandlers({ ...newMessageHandlers, ...messageHandlers });
  };

  return {
    webSocket: ws,
    createServer,
    joinGame,
    leaveGame,
    startGame,
    addMessageHandlers
  }
};

export default WebSocketHook;
