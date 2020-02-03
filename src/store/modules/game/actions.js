export function newGameRequest(gameMode) {
  return {
    type: '@game/NEW_GAME_REQUEST',
    payload: {gameMode}
  };
}

export function newGameSuccess() {
  return {
    type: '@game/NEW_GAME_SUCCESS'
  };
}