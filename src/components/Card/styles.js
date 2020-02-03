import styled, { css } from 'styled-components/native';

export const Container = styled.View.attrs(props => ({}))`
  width: 80%;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  align-items: center;
  background: #fff;
  flex-direction: row;
`;

export const ProfileContainer = styled.View`
  width: 40%;
  align-items: center;
`;

export const CardImage = styled.Image`
  width: 80px;
  height: 90px;
`;

export const Name = styled.Text`
  color: #ffb300;
  text-align: center;
  margin: 30px 0 10px 0;
`;

export const OptionsContainer = styled.View`
  margin: 5px;
`;

export const List= styled.FlatList.attrs({
  showVerticalScrollIndicator: false
})``;

export const OptionView = styled.View`
  width: 180px;
  margin: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  background: #EAEBED;
  border-radius: 30px;
`;

export const OptionValue = styled.View`
  background: #ffb300;
  color: white;
  padding: 10px 10px;
  border-radius: 20px;
`;

export const OptionName = styled.View`
  margin-left: 5px;
  padding: 10px 5px;
`;
