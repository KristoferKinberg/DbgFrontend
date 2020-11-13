import React from 'react';
import {WebSocketObject} from "../../webSocket/webSocket";
import {useSelector} from "react-redux";
import {selectRoomIdAbbrv} from "../../store/room/room.selectors";
import Button from "../../components/button";
import {StyledLobby} from "./lobby.styles";

interface Props {
  WebSocket: WebSocketObject;
}

const Lobby = ({ WebSocket }: Props): JSX.Element => {
  const connectionKey = useSelector(selectRoomIdAbbrv);

  const startGame = () => {
    console.log('start game');
  }

  return <StyledLobby>
    <p>
      LobbyKey: { connectionKey }
    </p>

    <p>
      players:
    </p>

    <Button onClick={startGame} text={'Start Game'}/>
  </StyledLobby>
};

export default Lobby;

