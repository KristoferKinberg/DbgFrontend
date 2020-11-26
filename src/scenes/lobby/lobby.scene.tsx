import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectClientType, selectPlayers, selectRoomId, selectRoomIdAbbrv} from "../../store/room/room.selectors";
import Button from "../../components/button";
import {StyledLobby} from "./lobby.styles";
import {PLAYER} from "../../constants";
import {goToHome} from "../../store/router/router.actions";
import {WebSocketObject} from "../../webSocket/Websocket.types";
import {games} from "../../games/games.types";

interface Props {
  WebSocket: WebSocketObject;
}

const Lobby = ({ WebSocket: { leaveGame, startGame }}: Props): JSX.Element => {
  const clientType = useSelector(selectClientType);
  const players = useSelector(selectPlayers);
  const connectionKey = useSelector(selectRoomIdAbbrv);
  const roomId = useSelector(selectRoomId);
  const dispatch = useDispatch();

  if (!clientType) dispatch(goToHome());

  /**
   * Start game
   */
  const _startGame = () => {
    console.log('start game');
    if (roomId){
      startGame(roomId, games.AVALON);
    }
  };

  /**
   * Leave game
   */
  const _leaveGame = () => {
    console.log(roomId);
    if (roomId) {
      leaveGame(roomId);
      console.log('leave game');
    }
  };

  /**
   * Render players
   */
  const renderPlayers = () => players.map((player: string) => <p key={player}>{ player }</p>);

  return <StyledLobby>
    <p>
      LobbyKey: { connectionKey }
    </p>

    <div>
      players:
      { renderPlayers() }
    </div>

    <Button onClick={_startGame} text={'Start Game'} disabled={clientType === PLAYER}/>
    <Button onClick={_leaveGame} text={'Leave Game'}/>
  </StyledLobby>
};

export default Lobby;

