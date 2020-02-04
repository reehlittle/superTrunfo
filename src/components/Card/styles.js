import styled, { css } from 'styled-components/native';

export const Container = styled.View.attrs(props => ({}))`
  width: 80%;
  height: 200px;
  padding: 10px;
  border-radius: 10px;
  background: #fff;
  align-items: center;
  flex-direction: row;
`;

export const ProfileContainer = styled.View`
  width: 40%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const CardImage = styled.Image`
  width: 100px;
  height: 140px;
  border-radius: 10px;
`;

export const Name = styled.Text`
  color: #ffb300;
  text-align: center;
  line-height: 35px;
`;

export const OptionsContainer = styled.View`
  height: 100%;
`;

export const List= styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: "space-between"
  }
})`
  height: 100%;
`;

export const OptionView = styled.TouchableOpacity`
  width: 180px;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  background: #EAEBED;
  border-radius: 30px;
`;

export const OptionValue = styled.View`
  min-width: 50px;
  align-items: center;
  background: #ffb300;
  color: white;
  padding: 10px 10px;
  border-radius: 20px;
`;

export const OptionName = styled.View`
  padding: 10px 5px;
  margin-left: 10px;
`;
