import {
  CLIENT_CONNECTED,
  PLAYER_JOINED, PLAYER_LEFT,
  RECONNECT,
  ROOM_CREATION,
  SUCCESSFULLY_JOINED,
  SUCCESSFULLY_LEFT_GAME,
  SUCCESSFULLY_RECONNECTED,
} from "./webSocketActions";
import {actionSetClientType, actionSetPlayers, actionSetUpGame, JOINED_GAME} from "../store/room/room.actions";
import {HOST, PLAYER} from "../constants";
import {goToHome, goToLobby} from "../store/router/router.actions";

const generateMessageHandlers = (dispatch: any, sendMessage: any) => {
  /**
   * Client connected
   * @param data
   */
  const clientConnected = (data: any) => {
      localStorage.getItem('clientId')
        ? sendMessage({ type: RECONNECT, newId: data.clientId })
        : localStorage.setItem('clientId', data.clientId);
    };

  /**
   * On creation of a room
   * @param data
   */
  const roomCreation = (data: any) => {
    dispatch(actionSetUpGame(data.roomId, data.players, HOST));
  };

  /**
   * On joined game
   * @param data
   */
  const joinedGame = (data: any) => dispatch(actionSetClientType(PLAYER));

  /**
   * On player joined game
   * @param data
   */
  const playerJoined = (data: any) => dispatch(actionSetPlayers(data.players));

  /**
   * On successfully joined
   * @param data
   */
  const successfullyJoined = (data: any) => {
    dispatch(actionSetUpGame(data.roomId, data.players, PLAYER));
    dispatch(goToLobby())
  };

  /**
   * On successful reconnect
   * @param data
   */
  const successfullyReconnected = (data: any) => {
    dispatch(actionSetUpGame(data.roomId, data.players, data.clientType));
    dispatch(goToLobby());
  };

  /**
   * Leave game
   */
  const leaveGame = () => {
    dispatch(actionSetUpGame(null, [], null));
    dispatch(goToHome());
  };

  /**
   * Player left
   */
  const playerLeft = (data: any) => dispatch(actionSetPlayers(data.players));

  return {
    [CLIENT_CONNECTED]: clientConnected,
    [ROOM_CREATION]: roomCreation,
    [JOINED_GAME]: joinedGame,
    [PLAYER_JOINED]: playerJoined,
    [PLAYER_LEFT]: playerLeft,
    [SUCCESSFULLY_JOINED]: successfullyJoined,
    [SUCCESSFULLY_RECONNECTED]: successfullyReconnected,
    [SUCCESSFULLY_LEFT_GAME]: leaveGame,
  }
}

export default generateMessageHandlers;
