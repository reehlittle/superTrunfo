import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

import { Container, CardContainer } from './styles';
import Background from '../../components/Background';
import Card from '../../components/Card';

export default function BoardGame() {
  const [deck, setDeck] = useState([]);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [computerTurn, setComputerTurn] = useState(false);
  const [openComputerCard, setOpenComputerCard] = useState(false);
  const [playerDeck, setPlayerDeck] = useState([]);
  const [computerDeck, setComputerDeck] = useState([]);
  const [playerCard, setPlayerCard] = useState([]);
  const [computerCard, setComputerCard] = useState([]);

  useEffect(() => {
    shuffleAndDeal();
  }, []);

  useEffect(() => {
    if( playerDeck.length != 0 && computerDeck.length != 0) {
      newTurn();
    }
  }, [playerDeck, computerDeck]);

  useEffect(() => {
    if( computerTurn == true) {
      console.tron.log('Jogue Computador, Jogue !');
      computerMove();
    }
  }, [computerTurn])

  function shuffleAndDeal() {
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
    if(playerDeck.length && computerDeck.length){
      setPlayerCard({ ...playerDeck[0]});
      setComputerCard({ ...computerDeck[0]});
    }
    else {
      endGame();
    }
  }

  function handleOptionSelect(option) {
    console.tron.log(option);
    //does not let the player select another option
    setPlayerTurn(false);

    //faz uma copia da carta ativa, para effect perceber mudança
    var SelectedPlayerCard = { ...playerCard } ;
    var SelectedComputerCard = { ...computerCard };

    //verifica qual carta ativa é maior
    if(playerCard.cardOptions[option].value >= computerCard.cardOptions[option].value) {
      //coloca cores na carta ativa
      SelectedPlayerCard.cardOptions[option].selected = 'winner';
      SelectedComputerCard.cardOptions[option].selected = 'loser';
    }
    else {
      //coloca cores na carta ativa
      SelectedPlayerCard.cardOptions[option].selected = 'loser';
      SelectedComputerCard.cardOptions[option].selected = 'winner';
    }

    //seta carta ativa para o componente carta poder fazer alterações
    setPlayerCard(SelectedPlayerCard);
    setComputerCard(SelectedComputerCard);
    setOpenComputerCard(true);

    //agora faça a animação
    //tira os valores dos selects
    //coloqe as cartas no deck vencedor
    //chame uma nova rodada
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

    if(playerCard.cardOptions[option].value >= computerCard.cardOptions[option].value) {
      //Coloca ambas as cartas ativas no deck de quem ganhou
      newPlayerDeck.push(playerCard);
      newPlayerDeck.push(computerCard);
      setPlayerTurn(true);
    }
    else {
      newComputerDeck.push(computerCard);
      newComputerDeck.push(playerCard);
      setComputerTurn(true);
    }
      setPlayerDeck(newPlayerDeck);
      setComputerDeck(newComputerDeck);
      setOpenComputerCard(false);
    }, 2000);


    console.tron.log(playerDeck);
    console.tron.log(computerDeck);
    console.tron.log(deck);
  }

  function computerMove() {
    // const dificulty = 'easy';
    // let option = {};
    // switch(dificulty) {
    //   case 'easy':
    //     option = random();
    //   case 'hard' :
    //     option = random();
    // };
    // handleOptionSelect(option);
  }

  function endGame() {
    console.tron.log("End Game");
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
        <CardContainer>
          <Card
            gamer="player"
            data={playerCard}
            open={true}
            handleOptionSelect={handleOptionSelect}
            playerTurn={playerTurn}
          />
        </CardContainer>
      </Container>
    </Background>
  );
}
