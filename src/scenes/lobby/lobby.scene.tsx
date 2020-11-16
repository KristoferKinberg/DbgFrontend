import React from 'react';
import {WebSocketObject} from "../../webSocket/webSocket";
import {useDispatch, useSelector} from "react-redux";
import {selectClientType, selectPlayers, selectRoomId, selectRoomIdAbbrv} from "../../store/room/room.selectors";
import Button from "../../components/button";
import {StyledLobby} from "./lobby.styles";
import {PLAYER} from "../../constants";
import {goToHome} from "../../store/router/router.actions";

interface Props {
  WebSocket: WebSocketObject;
}

const Lobby = ({ WebSocket: { leaveGame }}: Props): JSX.Element => {
  const clientType = useSelector(selectClientType);
  const players = useSelector(selectPlayers);
  const connectionKey = useSelector(selectRoomIdAbbrv);
  const roomId = useSelector(selectRoomId);
  const dispatch = useDispatch();

  if (!clientType) dispatch(goToHome());

  /**
   * Start game
   */
  const startGame = () => {
    console.log('start game');
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

    <Button onClick={startGame} text={'Start Game'} disabled={clientType === PLAYER}/>
    <Button onClick={_leaveGame} text={'Leave Game'}/>
  </StyledLobby>
};

export default Lobby;

