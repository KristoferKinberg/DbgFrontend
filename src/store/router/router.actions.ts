export const HOME: string = 'HOME';
export const LOBBY: string = 'LOBBY';
export const JOIN: string = 'JOIN';
export const TEST_PAGE: string = 'TEST_PAGE';
export const GAME: string = 'GAME';

export const goToHome = () => ({
  type: HOME
});

export const goToLobby = () => ({
  type: LOBBY
});

export const goToJoin = () => ({
  type: JOIN
});

export const goToTest = () => ({
  type: TEST_PAGE
});

export const goToGame = () => ({
  type: GAME
})
