import React from 'react';
import TeamsGenerator from "./teamsGenerator";

export interface Props {
  players: any[];
  host: any;
  registerMessageHandlers(messageHandlers: any[]): void;
}

const Avalon = ({ players, host, registerMessageHandlers }: Props) => {
  const characters = TeamsGenerator(players);

  console.log(characters);

  return <div>:D</div>
};

export default Avalon;
