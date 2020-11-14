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

export interface WebSocketObject {
  webSocket: any;
  createServer(): void;
  joinGame(roomId: string): void;
}

const WebSocketHook = (): WebSocketObject => {
  const webSocket: any = React.useRef(null);
  const ws = webSocket?.current;
  const dispatch = useDispatch();

  React.useEffect(() => {
    webSocket.current = new WebSocket('ws://localhost:8080');
    const ws = webSocket?.current;

    ws.onopen = (...args: any) => {
      console.log('connected', args);
    }

    ws.onmessage = (evt: any) => {
      console.log(evt, JSON.parse(evt.data));
      const data = JSON.parse(evt.data);

      if (data.type === CLIENT_CONNECTED) {
        localStorage.getItem('clientId')
          ? sendMessage({ type: RECONNECT, newId: data.clientId })
          : localStorage.setItem('clientId', data.clientId);
      }

      if (data.type === ROOM_CREATION) dispatch(actionSetClientType(HOST));

      if (data.type === JOINED_GAME) dispatch(actionSetClientType(PLAYER))

      if (data.type === PLAYER_JOINED) dispatch(actionSetPlayers(data.players));

      if (data.type === SUCCESSFULLY_JOINED) dispatch(actionSetUpGame(data.roomId, data.players, PLAYER));

      if (data.type === SUCCESSFULLY_RECONNECTED) dispatch(actionSetUpGame(data.roomId, data.players, data.clientType));
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

  return {
    webSocket: ws,
    createServer,
    joinGame,
  }
};

export default WebSocketHook;
