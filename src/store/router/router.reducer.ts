import { NOT_FOUND } from 'redux-first-router'
import {HOME, JOIN, LOBBY} from "./router.actions";

const components = {
  [HOME]: 'Home',
  [LOBBY]: 'Lobby',
  [JOIN]: 'Join',
  [NOT_FOUND]: 'NotFound'
}

export const routesMap = {
  [HOME]: '/',
  [LOBBY]: '/lobby',
  [JOIN]: '/join',
}

export default (state = 'HOME', action: any = {}) =>
// @ts-ignore
  components[action.type] || state;
