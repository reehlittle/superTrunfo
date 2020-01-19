import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import BoardGame from './pages/BoardGame';

export default () =>
createAppContainer(
  createSwitchNavigator({
    BoardGame
  })
);