import {Action} from "redux";

export interface AcSetClientId extends Action {
  clientId: string;
}

export interface AcSetRoomId extends Action {
  roomId: string;
}

export interface AcSetClientType extends Action {
  clientType: string;
}

export interface AcSetPlayers extends Action {
  players: string[];
}

export interface AcSetGame extends Action {
  game: string[];
}
