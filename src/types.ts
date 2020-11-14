export interface ReduxState {
  room: {
    roomId: string | null;
    clientType: string | null;
    players: any;
  };
}
