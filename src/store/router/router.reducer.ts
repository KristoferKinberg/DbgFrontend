import { NOT_FOUND } from 'redux-first-router'
import {GAME, HOME, JOIN, LOBBY, TEST_PAGE} from "./router.actions";

const components = {
  [HOME]: 'Home',
  [LOBBY]: 'Lobby',
  [JOIN]: 'Join',
  [NOT_FOUND]: 'NotFound',
  [TEST_PAGE]: 'TestPage',
  [GAME]: 'Game',
}

export const routesMap = {
  [HOME]: '/',
  [LOBBY]: '/lobby',
  [JOIN]: '/join',
  [TEST_PAGE]: '/test',
  [GAME]: '/game',
}

export default (state = 'HOME', action: any = {}) =>
  components[action.type] || state;
