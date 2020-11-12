import React from 'react';
import {WebSocketObject} from "../../webSocket";

interface Props {
  WebSocket: WebSocketObject
};

const Lobby = ({ WebSocket }: Props): JSX.Element => {
  return <div>
    LobbyKey
  </div>
};

export default Lobby;

