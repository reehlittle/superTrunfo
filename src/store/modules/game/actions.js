export function newGameRequest() {
  return {
    type: '@game/NEW_GAME_REQUEST',
    payload: {}
  };
}

export function newGameSuccess() {
  return {
    type: '@game/NEW_GAME_SUCCESS',
    payload: {}
  };
}