import {ReduxState} from "../../types";
import {games} from "../../games/games.types";

export const selectRoomId = (state: ReduxState) => state.room.roomId;
export const selectClientType = (state: ReduxState) => state.room.clientType;
export const selectPlayers = (state: ReduxState) => state.room.players;
export const selectGame = (state: ReduxState): games | null => state.room.game;
export const selectRoomIdAbbrv = (): string => localStorage.getItem('clientId')
// @ts-ignore
  ? localStorage
    .getItem('clientId')
    .split('-')
    .reduce((acc, curr) => acc + curr.charAt(0), '')
  : '';
