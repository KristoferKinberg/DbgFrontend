import React from 'react';
import Button from "../../components/button";
import {WebSocketObject} from "../../webSocket";
import { useHistory } from "react-router-dom";

interface Props {
  WebSocket: WebSocketObject
}

const Home = ({ WebSocket: { createServer }}: Props):JSX.Element => {
  const history = useHistory();

  const _createServer = () => {
    createServer();
    history.push('/lobby');
  };

  return <div>
    <Button text={'Create server'} onClick={_createServer} />
  </div>
};

export default Home;
