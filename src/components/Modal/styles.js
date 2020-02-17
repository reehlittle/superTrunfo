import styled from 'styled-components/native';

export const ModalContainer =  styled.View`
  height: 50%;
  background: #fff;
  border-radius: 10px;
  align-items: center;
`;

export const ModalHeader = styled.View`
  width: 100%;
  height: 10%;
  align-items: flex-end;
  justify-content: center;
`;

export const ModalBody = styled.View`
  height: 60%;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background: #081c57;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

export const ModalTitle = styled.View`
  height: 20%;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  color: #081c57;
  font-size: 24px;
  font-weight: bold;
`;
