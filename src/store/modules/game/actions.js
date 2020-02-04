export function newGameRequest(gameMode) {
  return {
    type: '@game/NEW_GAME_REQUEST',
    payload: {gameMode}
  };
}

export function existingGameRequest() {
  return {
    type: '@game/EXISTING_GAME_REQUEST'
  };
}

export function newGameSuccess() {
  return {
    type: '@game/NEW_GAME_SUCCESS'
  };
}

export function endGame() {
  return {
    type: '@game/END_GAME'
  };
}

export function saveAndHome(onGoingGame) {
  return {
    type: '@game/SAVE_AND_HOME',
    payload: {onGoingGame}
  };
}