import {SET_CLIENT_TYPE, SET_GAME, SET_PLAYERS, SET_ROOM_ID} from "./room.actions";
import {ReduxSlices} from "../../types";
import {createReducer} from "../../services/createReducer";
import {AcSetClientType, AcSetGame, AcSetPlayers, AcSetRoomId} from "./room.types";

const roomReducer = createReducer(ReduxSlices.room, {
    [SET_ROOM_ID]: ({ roomId }: AcSetRoomId) => ({ roomId }),
    [SET_CLIENT_TYPE]: ({ clientType }: AcSetClientType) => ({ clientType }),
    [SET_PLAYERS]: ({ players }: AcSetPlayers) => ({ players }),
    [SET_GAME]: ({ game }: AcSetGame) => ({ game })
});

export default roomReducer;
