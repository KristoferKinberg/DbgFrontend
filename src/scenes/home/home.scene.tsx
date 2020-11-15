import React from 'react';
import Button from "../../components/button";
import {WebSocketObject} from "../../webSocket/webSocket";
import {useDispatch} from "react-redux";
import {actionSetClientType} from "../../store/room/room.actions";
import {HOST} from "../../constants";
import {goToJoin, goToLobby} from "../../store/router/router.actions";

interface Props {
  WebSocket: WebSocketObject
}

const Home = ({ WebSocket: { createServer }}: Props):JSX.Element => {
  const dispatch = useDispatch();

  /**
   * Create server
   */
  const _createServer = () => {
    dispatch(actionSetClientType(HOST));
    dispatch(goToLobby());
    createServer();
  };

  /**
   * Join server
   */
  const _joinServer = () => dispatch(goToJoin());

  return <div>
    <Button text={'Create'} onClick={_createServer} />
    <Button text={'Join'} onClick={_joinServer} />
  </div>
};

export default Home;
