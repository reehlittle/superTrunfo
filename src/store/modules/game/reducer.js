import produce from 'immer';

const INITIAL_STATE = {
  onGoing: {
    gameMode: '',
    playerDeck: {},
    computerDeck: {},
    playerTurn: ''
  },
  energy: 0,
  authorization: false
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@game/NEW_GAME_REQUEST' : {
        draft.onGoing = {
          gameMode: '',
          playerDeck: {},
          computerDeck: {},
          playerTurn: ''
        };
        draft.onGoing.gameMode = action.payload.gameMode;
        break;
      }
      case '@game/EXISTING_GAME_REQUEST' : {
        draft.authorization = true;
        break;
      }
      case '@game/NEW_GAME_SUCCESS' : {
        draft.authorization = true;
        break;
      }
      case '@game/SAVE_AND_HOME' : {
        draft.onGoing = action.payload.onGoingGame
        draft.authorization = false;
        break;
      }
      case '@game/END_GAME' : {
        draft.onGoing = {
          gameMode: '',
          playerDeck: {},
          computerDeck: {},
          playerTurn: ''
        };
        draft.authorization = false;
        break;
      }
    }
  });
}