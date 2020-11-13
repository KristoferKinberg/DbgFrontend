export const SET_CLIENT_ID = 'SET_CLIENT_ID';
export const SET_ROOM_ID = 'SET_ROOM_ID';
export const SET_PLAYERS = 'SET_PLAYERS';
export const SET_CLIENT_TYPE = 'SET_CLIENT_TYPE';
export const JOINED_GAME = 'JOINED_GAME';

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
})

export const clientSuccessfullyConnected = (clientId: string) => {
  localStorage.setItem('clientId', clientId);
};

export const thunkSetUpClient = (clientType: string) => (dispatch: any) => {
  dispatch(actionSetClientType(clientType));
};
