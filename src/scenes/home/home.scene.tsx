import React from 'react';
import Button from "../../components/button";
import {WebSocketObject} from "../../webSocket/webSocket";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";
import {actionSetClientType} from "../../store/room/room.actions";
import {HOST} from "../../constants";

interface Props {
  WebSocket: WebSocketObject
}

const Home = ({ WebSocket: { createServer }}: Props):JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();

  /**
   * Create server
   */
  const _createServer = () => {
    dispatch(actionSetClientType(HOST));
    history.push('/lobby')
    createServer();
  };

  /**
   * Join server
   */
  const _joinServer = () => {
    history.push('/join');
  }

  return <div>
    <Button text={'Create'} onClick={_createServer} />
    <Button text={'Join'} onClick={_joinServer} />
  </div>
};

export default Home;
