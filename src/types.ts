import {games} from "./games/games.types";

export interface ReduxState {
  room: {
    roomId: string | null;
    clientType: string | null;
    players: any;
    game: games | null;
  };
}
