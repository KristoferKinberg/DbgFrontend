import { combineReducers } from 'redux';
import Pagination from './room/room.reducer';

const rootReducer = combineReducers({
    pagination: Pagination,
});

export default rootReducer;
