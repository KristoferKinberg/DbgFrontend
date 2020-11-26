import {Action} from "redux";

/**
 * Makes action creators
 * @param type
 * @param argNames
 * @returns {function(...[*]): *}
 */
const createAction = (type: string, ...argNames: string[]) => (...args: unknown[]): Action => argNames
  .reduce((acc, curr, index) => ({ ...acc, [curr]: args[index] }), { type });

export default createAction;
