import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Text, View, TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';
import {
  Container,
  NewGameButton,
  ConfigButton,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalBody,
  CloseButton,
  Title,
  EasyButton,
  MediumButton,
  HardButton
} from './styles';
import { newGameRequest } from '../../store/modules/game/actions';

export default function Dashboard() {
  const dispatch = useDispatch();
  const [newGameModal, setNewGameModal] = useState(false);

  function openNewGameModal() {
    setNewGameModal(true);
  }

  function handleNewGame(gameMode) {
    dispatch(newGameRequest(gameMode));
  }

  function handleConfiguration(){
    console.tron.log('handleConfiguration');
  }

  return (
    <Background>
      <Container>
        <Text>Dashboard</Text>
        <ConfigButton
          press={false}
          onPress={handleConfiguration}
          prettier={{h: '40px',w: '40px',c: 'blue'}}
        >C</ConfigButton>
        <NewGameButton
          press={false}
          onPress={openNewGameModal}
          prettier={{h: '80px',w: '180px',c: '#ffb300'}}
        >New Game</NewGameButton>
      </Container>

      <Modal
        isVisible={newGameModal}
        animationType={'fade'}
        transparent={true}
      >
        <ModalContainer>
          <ModalHeader>
            <CloseButton title='x' onPress={() => {setNewGameModal(false)}}>
              <Icon name="close" size={12} color="#fff" />
            </CloseButton>
          </ModalHeader>
          <ModalTitle>
            <Title>Choose Game Mode</Title>
          </ModalTitle>
          <ModalBody>
            <EasyButton
              press={false}
              onPress={() => handleNewGame('easy')}
              prettier={{h: '60px',w: '100px',c: '#09a0f9'}}
              >Easy
            </EasyButton>
            <MediumButton
              press={false}
              onPress={() => handleNewGame('medium')}
              prettier={{h: '60px',w: '100px',c: '#ffb300'}}
              >Medium
            </MediumButton>
            <HardButton
              press={false}
              onPress={() => handleNewGame('hard')}
              prettier={{h: '60px',w: '100px',c: '#ff3437'}}
              >Hard
            </HardButton>
          </ModalBody>
        </ModalContainer>
      </Modal>
    </Background>
  );

}
