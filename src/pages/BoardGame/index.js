import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image, View, Text, Button } from 'react-native';
import Modal from 'react-native-modal';

import {
  Container,
  CardContainer,
  OptionsContainer,
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
import Background from '../../components/Background';
import Card from '../../components/Card';

import { endGame, saveAndHome } from '../../store/modules/game/actions';

export default function BoardGame({ navigation }) {
  const [deck, setDeck] = useState([]);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [computerTurn, setComputerTurn] = useState(false);
  const [openComputerCard, setOpenComputerCard] = useState(false);
  const [playerDeck, setPlayerDeck] = useState([]);
  const [computerDeck, setComputerDeck] = useState([]);
  const [playerCard, setPlayerCard] = useState([]);
  const [computerCard, setComputerCard] = useState([]);
  const [computerPlay, setComputerPlay] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const gameMode = useSelector(state => state.game.onGoing.gameMode);
  const gameAuthorization = useSelector(state => state.game.authorization);
  const statePlayerDeck = useSelector(state => state.game.onGoing.playerDeck);
  const stateComputerDeck = useSelector(state => state.game.onGoing.computerDeck);

  useEffect(() => {
    statePlayerDeck.length > 0 ? existingGame() : shuffleAndDeal();
  }, []);

  useEffect(() => {
    if(!gameAuthorization) {
      navigation.navigate('Dashboard');
    }
  }, [gameAuthorization]);

  useEffect(() => {
    if( playerDeck.length != 0 && computerDeck.length != 0 ) {
      newTurn();
    }
    if( (playerDeck.length == 0 && computerDeck.length > 0) ||
      (playerDeck.length > 0 && computerDeck.length == 0)) {
      finishGame();
    }
  }, [computerDeck]);

  useEffect(() => {
    if(computerPlay == true) {
      computerMove();
    }
  }, [computerPlay])

  function existingGame() {
    console.tron.log(statePlayerDeck);
    console.tron.log(stateComputerDeck);
    setPlayerDeck(statePlayerDeck);
    setComputerDeck(stateComputerDeck);
  }

  function shuffleAndDeal() {
    console.tron.log('ShuffleAndDeal');
    var data = require('../../data/cars');
    data = data.default;
    data.sort(() => Math.random() - 0.5);

    const pd = Object.entries(data).slice(0,16).map(entry => entry[1]);
    const cd = Object.entries(data).slice(16,32).map(entry => entry[1]);

    setDeck(data);
    setPlayerDeck(pd);
    setComputerDeck(cd);
  }

  function newTurn() {
    console.tron.log('newTurn');
    setPlayerCard({ ...playerDeck[0]});
    setComputerCard({ ...computerDeck[0]});

    computerTurn === true ? setComputerPlay(true) : setComputerPlay(false);
  }

  function handleOptionSelect(option) {
    console.tron.log(`handleOptionSelect: ${option}`);
    console.tron.log(`playerDeck.length ${playerDeck.length}`);
    console.tron.log(`computerDeck.length ${computerDeck.length}`);

    // console.tron.log(playerDeck);
    // console.tron.log(computerDeck);
    //does not let the player select another option
    setPlayerTurn(false);
    setComputerPlay(false);

    //faz uma copia da carta ativa, para effect perceber mudança
    var SelectedPlayerCard = { ...playerCard } ;
    var SelectedComputerCard = { ...computerCard };

    //verifica qual carta ativa é maior
    if(playerCard.cardOptions[option].value >= computerCard.cardOptions[option].value) {
      SelectedPlayerCard.cardOptions[option].selected = 'winner';
      SelectedComputerCard.cardOptions[option].selected = 'loser';
    }
    else {
      SelectedPlayerCard.cardOptions[option].selected = 'loser';
      SelectedComputerCard.cardOptions[option].selected = 'winner';
    }

    //seta carta ativa para o componente carta poder fazer alterações
    setPlayerCard(SelectedPlayerCard);
    setComputerCard(SelectedComputerCard);
    setOpenComputerCard(true);
    setComputerTurn(false);

    var timeoutHandle = setTimeout(()=>{
      SelectedPlayerCard.cardOptions[option].selected = 'none';
      SelectedComputerCard.cardOptions[option].selected = 'none';
      setPlayerCard(SelectedPlayerCard);
      setComputerCard(SelectedComputerCard);

      //retira a carta ativa de ambos os decks
      var newPlayerDeck = playerDeck.filter((card) => {
        return playerCard.cardId != card.cardId;
      });
      var newComputerDeck = computerDeck.filter((card) => {
        return computerCard.cardId != card.cardId;
      });

      console.tron.log('Com cartas ativas retiradas');
      console.tron.log(newPlayerDeck);
      console.tron.log(newComputerDeck);
    if(playerCard.cardOptions[option].value >= computerCard.cardOptions[option].value) {
      //Coloca ambas as cartas ativas no deck de quem ganhou
      newPlayerDeck.push(playerCard);
      newPlayerDeck.push(computerCard);

      console.tron.log('Depois do push');
      console.tron.log(newPlayerDeck);
      console.tron.log(newComputerDeck);
      setPlayerTurn(true);
      setComputerTurn(false);
    }
    else {
      newComputerDeck.push(computerCard);
      newComputerDeck.push(playerCard);
      console.tron.log('Depois do push');
      console.tron.log(newPlayerDeck);
      console.tron.log(newComputerDeck);
      setComputerTurn(true);
    }
      setPlayerDeck(newPlayerDeck);
      setComputerDeck(newComputerDeck);
      setOpenComputerCard(false);
    }, 2000);
  }

  function computerMove() {
    console.tron.log('computerMove');

    var timeoutHandle = setTimeout(()=>{
      let option = {};
      switch(gameMode) {
        case 'easy':
          option = random();
        case 'medium' :
            option = random();
        case 'hard' :
          option = random();
      };
      console.tron.log(`Jogue Computador: ${option}`);
      handleOptionSelect(option);
    }, 2000);
  }

  function handleSaveAndHome() {
    console.tron.log("SaveAndHome");
    const onGoingGame =  {
      gameMode: gameMode,
      playerDeck: playerDeck,
      computerDeck: computerDeck,
      playerTurn: playerTurn
    }
    dispatch(saveAndHome(onGoingGame));
  }

  function handleSurrender() {
    console.tron.log("Surrender");
    dispatch(endGame());
  }

  function newGame(){
    setPlayerDeck({});
    setComputerDeck({});
    setPlayerTurn(true);
    setPlayerCard({});
    setComputerCard({});
    setModalVisible(false);
    shuffleAndDeal();
  }

  function finishGame() {
    console.tron.log("End Game");
    setModalVisible(true);
  }

  function random() {
    return Math.floor(Math.random() * (2 - 1 +1) + 1) -1;
  }

  return (
    <Background>
      <Container>
        <CardContainer>
          <Card
            gamer="computer"
            data={computerCard}
            open={openComputerCard}
            handleOptionSelect={handleOptionSelect}
            playerTurn={false}
          />
        </CardContainer>
        <OptionsContainer>
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
              onPress={() => {}}
              prettier={{h:'40px',w:'100px',c:'#09a0f9', ts:'12px'}}
            >Pass</PassButton>
            <SurrenderButton
              press={false}
              onPress={handleSurrender}
              prettier={{h:'40px',w:'100px',c:'#ff3437', ts:'12px'}}
            >Surrender</SurrenderButton>
          </Options>
        </OptionsContainer>
        <CardContainer>
          <Card
            gamer="player"
            data={playerCard}
            open={true}
            handleOptionSelect={handleOptionSelect}
            playerTurn={playerTurn}
          />
        </CardContainer>

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
