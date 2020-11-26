import React from 'react';
import {WebSocketObject} from "../../webSocket/Websocket.types";
import GamesComponents from '../game';
import {useSelector} from "react-redux";
import {selectGame} from "../../store/room/room.selectors";

interface Props {
  WebSocket: WebSocketObject
}

const Game = ({ WebSocket }: Props): JSX.Element => {
  const game = useSelector(selectGame);

  if (!game) return <React.Fragment />;

  const GameComponent = GamesComponents[game];

  return <div>
    <div>:D GAME :D</div>
    <GameComponent />
  </div>;
};

export default Game;
