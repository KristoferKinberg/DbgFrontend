import React from 'react';
import {WebSocketObject} from "../../webSocket/webSocket";
import {useDispatch, useSelector} from "react-redux";
import {selectClientType, selectPlayers, selectRoomIdAbbrv} from "../../store/room/room.selectors";
import Button from "../../components/button";
import {StyledLobby} from "./lobby.styles";
import {PLAYER} from "../../constants";

interface Props {
  WebSocket: WebSocketObject;
}

const Lobby = ({ WebSocket }: Props): JSX.Element => {
  const clientType = useSelector(selectClientType);
  const players = useSelector(selectPlayers);
  const connectionKey = useSelector(selectRoomIdAbbrv);
  const dispatch = useDispatch();

  if (!clientType) dispatch({ type: 'HOME' });

  /**
   * Start game
   */
  const startGame = () => {
    console.log('start game');
  }

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
  </StyledLobby>
};

export default Lobby;

