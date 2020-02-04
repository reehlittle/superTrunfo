import React from 'react';
import { useSelector } from 'react-redux';

import createRoutes from  './routes';

export default function App() {
  const gameOnProgress = useSelector(state => state.game.authorization);

  const Routes= createRoutes(gameOnProgress);

  return (
    <Routes />
  );
}
