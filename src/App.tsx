import React from 'react';
import './App.css';
import WebSocket, {WebSocketObject} from "./webSocket/webSocket";
import Scenes from './scenes';
import {useSelector} from "react-redux";

const App = () => {
  const WebSocketObject: WebSocketObject = WebSocket();
  const scene = useSelector((state: any) => state.router);

  // @ts-ignore
  const Component = Scenes[scene]

  return <div className="App">
    <Component WebSocket={WebSocketObject} />
  </div>;
}

export default App;
