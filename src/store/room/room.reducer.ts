import initialState from '../initialState';
import {SET_CLIENT_TYPE, SET_ROOM_ID} from "./room.actions";

export default function (state: any = initialState.room, action: any) {
    switch(action.type) {
        case SET_ROOM_ID:
            return { ...state, roomId: action.roomId };

        case SET_CLIENT_TYPE:
            return { ...state, clientType: action.clientType }

        default:
            return state;
    }
}
