import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';
import Card from '../../components/Card';
import data from '../../data/cars';

export default function BoardGames() {

  function shuffleFunction() {
    console.log("DEBUG: -> shuffleFunction");
    var _cardArray = this.state.cardArray;
    _cardArray.sort(() => Math.random() - 0.5);
    this.setState({ cardArray: _cardArray });
  }

  return (
    <View />
  );
}
