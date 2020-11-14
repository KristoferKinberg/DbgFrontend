import {ReduxState} from "../types";

const initialState: ReduxState = {
  room: {
    roomId: null,
    clientType: null,
    players: [],
  }
};

export default initialState;
