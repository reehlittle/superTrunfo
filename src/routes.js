import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import BoardGame from './pages/BoardGame';
import Dashboard from './pages/Dashboard';

export default () =>
createAppContainer(
  createSwitchNavigator({
    Dashboard,
    BoardGame
  },
  {
    initialRouteName: 'Dashboard'
  }
));