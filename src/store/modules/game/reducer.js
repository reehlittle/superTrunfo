import produce from 'immer';

const INITIAL_STATE = {
  onGoing: {
    gameMode: '',
    playerDeck: {},
    computerDeck: {},
    playerTurn: {}
  },
  energy: 0
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@game/NEW_GAME_REQUEST' : {
        //draft.energy = action.payload.energy;
        draft.onGoing.gameMode = action.payload.gameMode;
        break;
      }
    }
  });
}