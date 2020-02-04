import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import BoardGame from './pages/BoardGame';
import Dashboard from './pages/Dashboard';

export default (gameOnProgress = false) =>
createAppContainer(
  createSwitchNavigator({
    Dashboard,
    BoardGame
  },
  {
    initialRouteName: gameOnProgress ? 'Dashboard' : 'BoardGame'
  }
));