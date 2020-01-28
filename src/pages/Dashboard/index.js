import React from 'react';

import { Text, View, TouchableWithoutFeedback, Animated } from 'react-native';

import Background from '../../components/Background';
import { NewGameButton } from './styles';

export default function Dashboard() {
  function handleNewGame() {
    console.tron.log('handleNewGame');
  }

  return (
    <Background>
      <Text>Dashboard</Text>
      <NewGameButton loading={false} onPress={handleNewGame} style={{'h': 180, 'w': 180, 'c': '#ffb300'}}>New Game</NewGameButton>
    </Background>
  );

}
