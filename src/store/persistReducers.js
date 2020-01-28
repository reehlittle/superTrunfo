import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'superTrunfo',
      storage: AsyncStorage,
      whitelist: ['game']
    },
    reducers
  );

  return persistedReducer;
}