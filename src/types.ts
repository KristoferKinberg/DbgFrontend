import {games} from "./games/games.types";

export interface RoomState {
  roomId: string | null;
  clientType: string | null;
  players: any;
  game: games | null;
}

export interface ReduxState {
  room: RoomState;
}

export enum ReduxSlices {
  room = 'room',
}

export type ReduxStatePart = RoomState;
