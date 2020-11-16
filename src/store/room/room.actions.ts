import {PLAYER} from "../../constants";

export const SET_CLIENT_ID = 'SET_CLIENT_ID';
export const SET_ROOM_ID = 'SET_ROOM_ID';
export const SET_PLAYERS = 'SET_PLAYERS';
export const SET_CLIENT_TYPE = 'SET_CLIENT_TYPE';
export const JOINED_GAME = 'JOINED_GAME';
export const JOIN_GAME = 'JOIN_GAME';
export const SET_UP_GAME = 'SET_UP_GAME';

export const actionSetClientId = (clientId: string) => ({
  type: SET_CLIENT_ID,
  clientId
});

export const actionSetRoomId = (roomId: string) => ({
  type: SET_ROOM_ID,
  roomId
});

export const actionSetPlayers = (players: any) => ({
  type: SET_PLAYERS,
  players,
});

export const actionSetClientType = (clientType: string) => ({
  type: SET_CLIENT_TYPE,
  clientType
});

export const actionSetUpGame = (roomId: string | null, players: string[], clientType: string | null) => ({
  type: SET_UP_GAME,
  roomId,
  players,
  clientType,
})

export const clientSuccessfullyConnected = (clientId: string) => {
  if (!localStorage.getItem('clientId')) {
    localStorage.setItem('clientId', clientId);
  }
};
