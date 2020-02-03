import { takeLatest, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { newGameSuccess } from './actions';

export function* startNewGame({ payload }) {
  try {
    console.tron.log('Saga: startNewGame');
    //make the energy verification yield a authorization or not
    yield put(newGameSuccess());
    // else {
    //   Alert.alert('Not enough energy');
    // }

  } catch (err) {
    Alert.alert(`Error: ${err}`);
  }
}


export default all([
  takeLatest('@game/NEW_GAME_REQUEST', startNewGame),
]);