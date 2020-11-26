import {ReduxSlices, ReduxState} from "../types";
import {Action} from "redux";
import initialState from "../store/initialState";

/**
 * Merges several reducers together
 * @param initialState
 * @param reducerModels
 * @returns {Function}
 */
//const mergeReducers = (initialState: ReduxStatePart, ...reducerModels: any) => createReducer(initialState, reducerModels.reduce((acc: any, curr: any) => ({ ...acc, ...curr }), {}));

/**
 * Creates a reducer
 * @param key
 * @param handlers
 * @returns {Function}
 */
export const createReducer = (key: ReduxSlices, handlers: any) =>
  (state: ReduxState = initialState, action: Action): ReduxState => action.type in handlers
    ? { ...state, ...handlers[action.type](action, state[key]) }
    : state;

//export default mergeReducers;
