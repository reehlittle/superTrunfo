import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Text } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';
import {
  Container,
  NewGameButton,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalBody,
  CloseButton,
  Title,
  EasyButton,
  MediumButton,
  HardButton,
  CancelButton,
  ConfirmButton
} from './styles';
import { newGameRequest, existingGameRequest } from '../../store/modules/game/actions';

export default Dashboard = ({ navigation }) =>{
  const dispatch = useDispatch();
  const gameAuthorization = useSelector(state => state.game.authorization);
  const gameMode = useSelector(state => state.game.onGoing.gameMode);

  const [newGameModal, setNewGameModal] = useState(false);
  const [existingGameModal, setExistingGameModal] = useState(false);

  function openNewGameModal() {
    gameMode ? setExistingGameModal(true) : setNewGameModal(true);
  }

  function handleNewGame(gameMode) {
    dispatch(newGameRequest(gameMode));
  }

  function handleExistingGame() {
    dispatch(existingGameRequest());
  }

  function handleCancelExistingGame() {
    setExistingGameModal(false);
    setNewGameModal(true);
  }

  useEffect(() => {
    if(gameAuthorization) {
      navigation.navigate('BoardGame');
    }
  }, [gameAuthorization]);

  return (
    <Background>
      <Container>
        <NewGameButton
          press={false}
          onPress={openNewGameModal}
          prettier={{h: '80px',w: '180px',c: '#ffb300'}}
        >New Game</NewGameButton>
      </Container>

      <Modal isVisible={newGameModal} animationType={'fade'} transparent={true}>
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

      <Modal isVisible={existingGameModal} animationType={'fade'} transparent={true}>
        <ModalContainer>
          <ModalHeader>
            <CloseButton title='x' onPress={() => {setExistingGameModal(false)}}>
              <Icon name="close" size={12} color="#fff" />
            </CloseButton>
          </ModalHeader>
          <ModalTitle>
            <Title>Resume previous progress?</Title>
          </ModalTitle>
          <ModalBody>
            <CancelButton
              press={false}
              onPress={handleCancelExistingGame}
              prettier={{h: '60px',w: '100px',c: '#ff3437'}}
              >Cancel
            </CancelButton>
            <ConfirmButton
              press={false}
              onPress={handleExistingGame}
              prettier={{h: '60px',w: '100px',c: '#4bbe19'}}
              >Confirm
            </ConfirmButton>
          </ModalBody>
        </ModalContainer>
      </Modal>
    </Background>
  );

}
