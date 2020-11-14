import {put, takeEvery } from "redux-saga/effects";
import {actionSetClientType, actionSetPlayers, actionSetRoomId, SET_UP_GAME} from "./room.actions";

export function* watchSetUpGame() {
  yield takeEvery(
    SET_UP_GAME,
    makeSetUpGame
  );
}

function* makeSetUpGame({ roomId, players, clientType }: any) {
  console.log('D::D:D:D:D')
  yield put(actionSetRoomId(roomId));
  yield put(actionSetPlayers(players));
  yield put(actionSetClientType(clientType));
}
