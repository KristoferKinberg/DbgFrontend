import { combineReducers } from 'redux';
import Room from './room/room.reducer';

const rootReducer = combineReducers({
    room: Room,
});

export default rootReducer;
