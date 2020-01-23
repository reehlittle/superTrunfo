import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

import { Container } from './styles';
import CardGame from '../../components/Card';
import data from '../../data/cars';

export default function BoardGame() {
  const [playerDeck, setPlayerDeck] = useState({});
  const [computerDeck, setComputerDeck] = useState({});
  const [playerTurn, setPlayerTurn] = useState(true);
  const [playerActiveCard, setPlayerActiveCard] = useState({});
  const [computerActiveCard, setComputerActiveCard] = useState({});

  useEffect(() => {
    //On load board game
    //Divide cards in two arrays and start a new game
    shuffleAndDeal();
    //await newRound();
  }, []);

  useEffect(() => {
    newRound();
  }, [playerDeck, computerDeck]);

  function shuffleAndDeal() {
    //Shuffle cards and divide
    console.tron.log('ShuffleAndDeal');
    var cardArray = data;
    cardArray.sort(() => Math.random() - 0.5);
    const pd = Object.entries(cardArray).slice(0,15).map(entry => entry[1]);
    const cd = Object.entries(cardArray).slice(16,31).map(entry => entry[1]);
    setPlayerDeck(pd);
    setComputerDeck(cd);
  }

  function newRound() {
    //both arrays have cards
    // ? load first card from each array
      // is playerTurn
      // ? do nothing, wait for action
      // : randon choose option and handleOptionSelect()
    // : finishGame()
    console.tron.log('newRound');
    console.tron.log(playerDeck);
    console.tron.log(computerDeck);
    if(playerDeck.length && computerDeck.length) {
      setPlayerActiveCard(playerDeck[0]);
      setComputerActiveCard(computerDeck[0]);

    setTimeout(function () {
      console.tron.log(playerActiveCard);
      console.tron.log(computerActiveCard);
    }, 5000);

    }
    else {
       finishGame();
    }
  }

  function handleOptionSelect() {
    //load the values from both cards and compare.
    //put both cards in the end of winner's  array.
    //newRound()
  }

  function finishGame() {
    //show modal with score and button to new game or home
    console.tron.log('finishGame');
  }



  return (
    <Container>
      <Text>Teste</Text>
      <CardGame data={playerActiveCard}></CardGame>
    </Container>
  );
}
