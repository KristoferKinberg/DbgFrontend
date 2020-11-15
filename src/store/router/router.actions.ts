export const HOME: string = 'HOME';
export const LOBBY: string = 'LOBBY';
export const JOIN: string = 'JOIN';

export const goToHome = () => ({
  type: HOME
});

export const goToLobby = () => ({
  type: LOBBY
});

export const goToJoin = () => ({
  type: JOIN
});
