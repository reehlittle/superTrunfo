import styled from 'styled-components/native';

export const Container = styled.View`
  width: 120px;
  height: 200px;
  margin: 10px;
  border: 2px solid palevioletred;
  border-radius: 4px;
  align-items: center;
`;

export const Name = styled.Text`
  color: palevioletred;
  text-align: center;
  margin: 30px 0 10px 0;
`;

export const List= styled.FlatList.attrs({
  showVerticalScrollIndicator: false
})``;

export const OptionName = styled.Text`
  background: palevioletred;
  color: white;

  margin: 5px;
  padding: 5px 5px;
`;
