import React from 'react';
import './App.css';
import WebSocket from "./webSocket/webSocket";
import Scenes from './scenes';
import {useSelector} from "react-redux";
import {WebSocketObject} from "./webSocket/Websocket.types";

const App = () => {
  const Websocket: WebSocketObject = WebSocket();
  const scene = useSelector((state: any) => state.router);

  // @ts-ignore
  const Component = Scenes[scene]

  return <div className="App">
    <Component WebSocket={Websocket} />
  </div>;
}

export default App;
