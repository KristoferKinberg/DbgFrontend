import React from 'react';
import {WebSocketObject} from "../../webSocket/webSocket";
import Button from "../../components/button";
import {useSelector} from "react-redux";
import {selectClientType, selectRoomId} from "../../store/room/room.selectors";
import {PLAYER} from "../../constants";
import {useHistory} from "react-router-dom";

interface Props {
  WebSocket: WebSocketObject
}

const JoinGame = ({ WebSocket: { joinGame }}: Props) => {
  const clientType = useSelector(selectClientType);
  const roomId = useSelector(selectRoomId);
  const history = useHistory();

  const [val, setValue] = React.useState('cab4b5');

  if (clientType === PLAYER && roomId) history.push('/lobby');

  /**
   * On change
   * @param value
   */
  const _onChange = ({ target: { value }}: any) => {
    setValue(value);
  }

  /**
   * Join game
   */
  const _joinGame = () => {
    console.log('join game!! :D ', val);
    joinGame(val);
  };

  return <div>
    <input type="text" onChange={_onChange} value={val}/>
    <Button onClick={_joinGame} text={'Join'} />
  </div>
}

export default JoinGame;
