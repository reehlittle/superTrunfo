import { all } from 'redux-saga/effects';
import game from './game/sagas';

export default function* rootSaga() {
  return yield all([game]);
}