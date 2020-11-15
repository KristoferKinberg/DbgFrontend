import {
  CLIENT_CONNECTED,
  CREATE_SERVER,
  PLAYER_JOINED,
  RECONNECT,
  ROOM_CREATION,
  SUCCESSFULLY_JOINED,
  SUCCESSFULLY_RECONNECTED
} from "./webSocketActions";
import {actionSetClientType, actionSetPlayers, actionSetUpGame, JOINED_GAME} from "../store/room/room.actions";
import {HOST, PLAYER} from "../constants";
import {goToLobby} from "../store/router/router.actions";

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
  const roomCreation = (data: any) => dispatch(actionSetClientType(HOST));

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
  }

  /**
   * On successful reconnect
   * @param data
   */
  const successfullyReconnected = (data: any) => {
    dispatch(actionSetUpGame(data.roomId, data.players, data.clientType));
    dispatch(goToLobby());
  }

  return {
    [CLIENT_CONNECTED]: clientConnected,
    [ROOM_CREATION]: roomCreation,
    [JOINED_GAME]: joinedGame,
    [PLAYER_JOINED]: playerJoined,
    [SUCCESSFULLY_JOINED]: successfullyJoined,
    [SUCCESSFULLY_RECONNECTED]: successfullyReconnected,
  }
}

export default generateMessageHandlers;
