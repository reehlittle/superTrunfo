import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Button, Image } from 'react-native';
import Modal from 'react-native-modal';

import { endGame, saveAndHome } from '../../store/modules/game/actions';
import Background from '../../components/Background';
import {
  Container,
  CompCardContainer,
  OptionsContainer,
  PlayerCardContainer,
  Score,
  ScoreText,
  ScoreSeparator,
  ComputerScore,
  PlayerScore,
  Options,
  HomeButton,
  PassButton,
  SurrenderButton
} from './styles';
import Card from '../../components/Card';
import data from '../../data/cars';

export default function BoardGame({ navigation }) {
  const dispatch = useDispatch();
  const [playerDeck, setPlayerDeck] = useState({});
  const [computerDeck, setComputerDeck] = useState({});
  const [playerTurn, setPlayerTurn] = useState(true);
  const [playerActiveCard, setPlayerActiveCard] = useState({});
  const [computerActiveCard, setComputerActiveCard] = useState({});

  const [cardZoom, setCardZoom] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const gameAuthorization = useSelector(state => state.game.authorization);
  const gameMode = useSelector(state => state.game.onGoing.gameMode);
  const statePlayerDeck = useSelector(state => state.game.onGoing.playerDeck);
  const stateComputerDeck = useSelector(state => state.game.onGoing.computerDeck);

  useEffect(() => {
    statePlayerDeck.length > 0 ? existingGame() : shuffleAndDeal();
  }, []);

  useEffect(() => {
      newRound();
  }, [playerDeck, computerDeck]);

  useEffect(() => {
    if(!playerTurn) {
      handleComputerOptionSelect();
    }
  }, [playerTurn]);

  useEffect(() => {
    if(!gameAuthorization) {
      navigation.navigate('Dashboard');
    }
  }, [gameAuthorization]);

  function existingGame() {
    setPlayerDeck(statePlayerDeck);
    setComputerDeck(stateComputerDeck);
  }

  function shuffleAndDeal() {
    var cardArray = data;
    cardArray.sort(() => Math.random() - 0.5);

    const pd = Object.entries(cardArray).slice(0,16).map(entry => entry[1]);
    const cd = Object.entries(cardArray).slice(16,32).map(entry => entry[1]);

    setPlayerDeck(pd);
    setComputerDeck(cd);
  }

  function newRound() {
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
    setModalVisible(true);
  }

  function random() {
    return Math.floor(Math.random() * (2 - 1 +1) + 1) -1;
  }

  function newGame(){
    setPlayerDeck({});
    setComputerDeck({});
    setPlayerTurn(true);
    setPlayerActiveCard({});
    setComputerActiveCard({});
    setModalVisible(false);
    shuffleAndDeal();
  }

  function handleSaveAndHome() {
    const onGoingGame =  {
      gameMode: gameMode,
      playerDeck: playerDeck,
      computerDeck: computerDeck,
      playerTurn: playerTurn
    }
    dispatch(saveAndHome(onGoingGame));
  }

  function handleSurrender() {
    dispatch(endGame());
  }

  function handleCardZoom() {
    setCardZoom(true);
  }

  return (
    <Background>
      <Container>
        <CompCardContainer zoom={cardZoom}>
          <Card data={computerActiveCard}
            handleOptionSelect={handleOptionSelect}
            player={false}
            zoom={cardZoom}>
          </Card>
        </CompCardContainer>
        <OptionsContainer zoom={cardZoom}>
          <Score>
            <ComputerScore>
              <Image source={require('../../assets/playing-cards.png')} style={{width: 24, height: 24}} />
              <ScoreText>{computerDeck.length}</ScoreText>
            </ComputerScore>
            <ScoreSeparator />
            <PlayerScore>
              <Image source={require('../../assets/playing-cards.png')} style={{width: 24, height: 24}} />
              <ScoreText>{playerDeck.length}</ScoreText>
            </PlayerScore>
          </Score>
          <Options>
            <HomeButton
              press={false}
              onPress={handleSaveAndHome}
              prettier={{h:'40px',w:'100px',c:'#ffb300', ts:'12px'}}
            >Home</HomeButton>
            <PassButton
              press={false}
              onPress={handleCardZoom}
              prettier={{h:'40px',w:'100px',c:'#09a0f9', ts:'12px'}}
            >Pass</PassButton>
            <SurrenderButton
              press={false}
              onPress={handleSurrender}
              prettier={{h:'40px',w:'100px',c:'#ff3437', ts:'12px'}}
            >Surrender</SurrenderButton>
          </Options>
        </OptionsContainer>
        <PlayerCardContainer zoom={cardZoom}>
          <Card data={playerActiveCard}
            handleOptionSelect={handleOptionSelect}
            player={playerTurn}
            zoom={cardZoom}>
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
