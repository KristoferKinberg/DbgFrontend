import React from 'react';

export interface Props {
  players: any[];
  host: any;
  registerMessageHandlers(messageHandlers: any[]): void;
}

const Avalon = ({ players, host, registerMessageHandlers }: Props) => {
  return <div>AVALON GAME</div>
};

export default Avalon;
