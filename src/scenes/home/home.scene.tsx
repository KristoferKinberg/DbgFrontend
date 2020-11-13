import React from 'react';
import Button from "../../components/button";
import {WebSocketObject} from "../../webSocket/webSocket";
import { useHistory } from "react-router-dom";
import {useSelector} from "react-redux";
import {HOST, PLAYER} from "../../constants";
import {selectClientType} from "../../store/room/room.selectors";

interface Props {
  WebSocket: WebSocketObject
}

const Home = ({ WebSocket: { createServer }}: Props):JSX.Element => {
  const history = useHistory();
  const clientType = useSelector(selectClientType);

  if (clientType && clientType === HOST) history.push('/lobby');
  if (clientType && clientType === PLAYER) history.push('/join');

  const _createServer = () => {
    createServer();
  };

  return <div>
    <Button text={'Create'} onClick={_createServer} />
    <Button text={'Join'} onClick={_createServer} />
  </div>
};

export default Home;
