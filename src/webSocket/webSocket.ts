import React from "react";
import {useDispatch} from "react-redux";
import {
  actionSetClientType,
  actionSetPlayers,
  actionSetUpGame,
  JOIN_GAME, JOINED_GAME,
} from "../store/room/room.actions";
import {
  CLIENT_CONNECTED,
  CREATE_SERVER, PLAYER_JOINED,
  RECONNECT,
  ROOM_CREATION, SUCCESSFULLY_JOINED, SUCCESSFULLY_RECONNECTED
} from "./webSocketActions";
import {HOST, PLAYER} from "../constants";
import {goToLobby} from "../store/router/router.actions";

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
  const [messageHandlers, setMessageHandlers]: any = React.useState({
    [CLIENT_CONNECTED]: (data: any) => {
      localStorage.getItem('clientId')
        ? sendMessage({ type: RECONNECT, newId: data.clientId })
        : localStorage.setItem('clientId', data.clientId);
    },
    [ROOM_CREATION]: (data: any) => dispatch(actionSetClientType(HOST)),
    [JOINED_GAME]: (data: any) => dispatch(actionSetClientType(PLAYER)),
    [PLAYER_JOINED]: (data: any) => dispatch(actionSetPlayers(data.players)),
    [SUCCESSFULLY_JOINED]: (data: any) => {
      dispatch(actionSetUpGame(data.roomId, data.players, PLAYER));
      dispatch(goToLobby())
    },
    [SUCCESSFULLY_RECONNECTED]: (data: any) => {
      dispatch(actionSetUpGame(data.roomId, data.players, data.clientType));
      dispatch(goToLobby());
    }
  });

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
  }, []);

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
   * Send message
   * @param msg
   */
  const sendMessage = (msg: object) => {
    console.log('Message: ', JSON.stringify({ ...msg, clientId: localStorage.getItem('clientId') }));
    webSocket.current.send(JSON.stringify({ ...msg, clientId: localStorage.getItem('clientId') }));
  };

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
