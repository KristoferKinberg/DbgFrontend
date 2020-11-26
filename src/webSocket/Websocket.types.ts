import {games} from "../games/games.types";

export interface WebSocketObject {
  webSocket: any;
  createServer(): void;
  joinGame(roomId: string): void;
  leaveGame(roomId: string): void;
  startGame(roomId: string, game: games): void;
  addMessageHandlers(messageHandlers: any): void;
}
