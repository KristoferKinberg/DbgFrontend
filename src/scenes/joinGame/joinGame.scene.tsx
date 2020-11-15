import React from 'react';
import {WebSocketObject} from "../../webSocket/webSocket";
import Button from "../../components/button";
interface Props {
  WebSocket: WebSocketObject
}

const JoinGame = ({ WebSocket: { joinGame }}: Props) => {
  const [val, setValue] = React.useState('cab4b5');

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
