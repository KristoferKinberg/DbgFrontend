import initialState from '../initialState';
import {SET_CLIENT_TYPE, SET_GAME, SET_PLAYERS, SET_ROOM_ID} from "./room.actions";

const roomReducer = (state: any = initialState.room, action: any) => {
    switch(action.type) {
        case SET_ROOM_ID:
            return { ...state, roomId: action.roomId };

        case SET_CLIENT_TYPE:
            return { ...state, clientType: action.clientType };

        case SET_PLAYERS:
            return { ...state, players: action.players };

        case SET_GAME:
            return { ...state, game: action.game };

        default:
            return state;
    }
}

export default roomReducer;
