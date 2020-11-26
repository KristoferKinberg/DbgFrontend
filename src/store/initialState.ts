import {ReduxState} from "../types";

const initialState: ReduxState = {
  room: {
    roomId: null,
    clientType: null,
    players: [],
    game: null,
  }
};

export default initialState;
