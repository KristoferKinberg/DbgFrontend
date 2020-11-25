export interface WebSocketObject {
  webSocket: any;
  createServer(): void;
  joinGame(roomId: string): void;
  leaveGame(roomId: string): void;
  startGame(roomId: string): void;
  addMessageHandlers(messageHandlers: any): void;
}
