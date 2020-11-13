import {ReduxState} from "../../types";

export const selectRoomId = (state: ReduxState) => state.room.roomId;
export const selectClientType = (state: ReduxState) => state.room.clientType;
export const selectRoomIdAbbrv = (state: ReduxState): string => localStorage.getItem('clientId')
// @ts-ignore
  ? localStorage
    .getItem('clientId')
    .split('-')
    .reduce((acc, curr) => acc + curr.charAt(0), '')
  : '';
