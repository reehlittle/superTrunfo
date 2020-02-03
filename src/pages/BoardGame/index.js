import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Modal from 'react-native-modal';

import Background from '../../components/Background';
import { 
  Container, 
  CompCardContainer, 
  OptionsContainer, 
  PlayerCardContainer, 
  Score, 
  Options 
} from './styles';
import Card from '../../components/Card';
import data from '../../data/cars';

export default function BoardGame() {
  const [playerDeck, setPlayerDeck] = useState({});
  const [computerDeck, setComputerDeck] = useState({});
  const [playerTurn, setPlayerTurn] = useState(true);
  const [playerActiveCard, setPlayerActiveCard] = useState({});
  const [computerActiveCard, setComputerActiveCard] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  
  useEffect(() => {
    shuffleAndDeal();
  }, []);

  useEffect(() => {
    //make it not call newRound when active cards are not ready.
    console.tron.log(`PlayerActiveCard: ${playerActiveCard.cardName}`);
    console.tron.log(`ComputerActiveCard: ${computerActiveCard.cardName}`);
      newRound();
  }, [playerDeck, computerDeck]);

  useEffect(() => {
    console.tron.log(`playerTurn: ${playerTurn}`);
    if(!playerTurn) {
      handleComputerOptionSelect();
    }
  }, [playerTurn]);

  function shuffleAndDeal() {
    console.tron.log('ShuffleAndDeal');
    var cardArray = data;
    cardArray.sort(() => Math.random() - 0.5);

    const pd = Object.entries(cardArray).slice(0,16).map(entry => entry[1]);
    const cd = Object.entries(cardArray).slice(16,32).map(entry => entry[1]);
    
    setPlayerDeck(pd);
    setComputerDeck(cd);
  }

  function newRound() {
    console.tron.log('newRound');
      if(playerDeck.length != 0 && computerDeck.length != 0) {
        if(playerDeck.length && computerDeck.length){
          setPlayerActiveCard(playerDeck[0]);
          setComputerActiveCard(computerDeck[0]);
          if(!playerTurn){
            handleComputerOptionSelect();
          }
        }
      }
      else {
        finishGame();
      }
  }

  function handleOptionSelect(option) {
    console.tron.log('handleOptionSelect');
    console.tron.log(`Opção: ${option}`);
    newPlayerDeck = playerDeck.filter((card) => {
      return playerActiveCard.cardId != card.cardId;
    });
    newComputerDeck = computerDeck.filter((card) => {
      return computerActiveCard.cardId != card.cardId;
    });
    if(playerActiveCard.cardOptions[option].value >= computerActiveCard.cardOptions[option].value) {
      newPlayerDeck.push(playerActiveCard);
      newPlayerDeck.push(computerActiveCard);
      setPlayerTurn(true);
    }
    else {
      newComputerDeck.push(computerActiveCard);
      newComputerDeck.push(playerActiveCard);
      setPlayerTurn(false);
    }
    setPlayerDeck(newPlayerDeck);
    setComputerDeck(newComputerDeck);
  }

  function handleComputerOptionSelect(){
    console.tron.log('handleComputerOptionSelect');
    //get game dificulty
    const dificulty = 'easy';
    let option = {};
    switch(dificulty) {
      case 'easy':
        option = random();
      case 'hard' :
        option = random();
    };
    handleOptionSelect(option);
  }

  function finishGame() {
    //show modal with score and button to new game or home
    console.tron.log('finishGame');
    setModalVisible(true);
  }

  function random() { // min and max included 
    return Math.floor(Math.random() * (2 - 1 +1) + 1) -1;
  }

  function newGame(){
    console.tron.log('NewGame');
    setPlayerDeck({});
    setComputerDeck({});
    setPlayerTurn(true);
    setPlayerActiveCard({});
    setComputerActiveCard({});
    setModalVisible(false);
    shuffleAndDeal();
  }

  return (
    <Background>
      <Container>
        <CompCardContainer>
          {/* <Card data={computerActiveCard} 
            handleOptionSelect={handleOptionSelect} 
            player={false}>
          </Card> */}
        </CompCardContainer>
        <OptionsContainer>
          <Score></Score>
          <Options></Options>
        </OptionsContainer>
        <PlayerCardContainer>
          <Card data={playerActiveCard} 
            handleOptionSelect={handleOptionSelect} 
            player={playerTurn}>
          </Card>
        </PlayerCardContainer>
         
        <Modal isVisible={modalVisible}>
            <View style={{ flex: 1 }}>
              <Text>Game Over!</Text>
              <Button title="New Game" onPress={newGame} />
            </View>
          </Modal>
      </Container>
    </Background>
  );
}
