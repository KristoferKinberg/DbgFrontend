import React from 'react';
import {WebSocketObject} from "../../webSocket/webSocket";

interface Props {
  WebSocket: WebSocketObject
} 

const JoinGame = ({ WebSocket }: Props) => {
  const [val, setValue] = React.useState('')

  const _onChange = ({ target: { value }}: any) => {
    setValue(value);
  }

  return <div>
    <input type="text" onChange={_onChange} value={val}/>
  </div>
}

export default JoinGame;
