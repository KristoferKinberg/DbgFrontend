import React from 'react';
import {WebSocketObject} from "../../webSocket/Websocket.types";

interface Props {
  WebSocket: WebSocketObject
}

const TestPage = ({ WebSocket }: Props): JSX.Element => {
  return <div>:D</div>;
}

export default TestPage;
