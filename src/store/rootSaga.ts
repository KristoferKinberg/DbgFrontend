import {all} from "redux-saga/effects";
import {fork} from "redux-saga/effects";
import {watchSetUpGame} from "./room/room.sagas";

export function* rootSaga() {
  yield all([
    fork(watchSetUpGame),
  ])
}
