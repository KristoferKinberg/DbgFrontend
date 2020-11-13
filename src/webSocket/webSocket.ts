import React from "react";
import {useDispatch} from "react-redux";
import {
  actionSetPlayers, clientSuccessfullyConnected, JOINED_GAME,
  thunkSetUpClient
} from "../store/room/room.actions";
import {CLIENT_CONNECTED, CREATE_SERVER, PLAYER_CONNECTED, PLAYER_JOINED, ROOM_CREATION} from "./webSocketActions";
import {HOST, PLAYER} from "../constants";

export interface WebSocketObject {
  webSocket: any;
  createServer(): void;
}

const WebSocketHook = (): WebSocketObject => {
  const webSocket: any = React.useRef(null);
  const ws = webSocket?.current;
  const dispatch = useDispatch();

  React.useEffect(() => {
    // @ts-ignore

    debugger;
    webSocket.current = new WebSocket('ws://localhost:8080');
    const ws = webSocket?.current;

    ws.onopen = (...args: any) => {
      console.log('connected', args);
    }

    ws.onmessage = (evt: any) => {
      console.log(evt)
      const data = JSON.parse(evt.data);

      if (data.type === CLIENT_CONNECTED) clientSuccessfullyConnected(data.clientId);

      if (data.type === ROOM_CREATION) dispatch(thunkSetUpClient(HOST));

      if (data.type === JOINED_GAME) dispatch(thunkSetUpClient(PLAYER))

      //if (data.type === PLAYER_JOINED) dispatch(actionSetPlayers(data.players));
    }

    ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
    }
  }, []);

  const createServer = () => sendMessage({ type: CREATE_SERVER })

  const sendMessage = (msg: object) => {
    debugger;
    webSocket.current.send(JSON.stringify({ ...msg, clientId: localStorage.getItem('clientId') }));
  };

  return {
    webSocket: ws,
    createServer
  }
};

export default WebSocketHook;
