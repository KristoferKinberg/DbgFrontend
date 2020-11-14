import { NOT_FOUND } from 'redux-first-router'

const components = {
  HOME: 'Home',
  LOBBY: 'Lobby',
  JOIN: 'Join',
  [NOT_FOUND]: 'NotFound'
}

export default (state = 'HOME', action: any = {}) =>
// @ts-ignore
  components[action.type] || state;
