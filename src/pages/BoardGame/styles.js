import styled from 'styled-components/native';

import Button from '../../components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const CompCardContainer = styled.View`
  width: 100%;
  height: 20%;
`;

export const OptionsContainer = styled.View`
  width: 100%;
  height: 50%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PlayerCardContainer = styled.View`
  width: 100%;
  height: 40%;
  align-items: center;
`;

export const Score = styled.View`
  width: 120px;
  height: 200px;
  margin-left: 10px;
  background: #fff;
  border-radius: 10px;

  align-items:center;
  justify-content: space-around;
`;

export const ComputerScore = styled.View`
  align-items:center;
`;

export const PlayerScore  = styled.View`
  align-items:center;
`;

export const ScoreText = styled.Text`
  color: #ffb300;
`;

export const ScoreSeparator = styled.View`
  width: 70%;
  border-bottom-width: 1px;
  border-bottom-color: #ffb300;
`;

export const Options = styled.View`
  width: 120px;
  height: 200px;
  margin-right: 10px;
  background: #fff;
  border-radius: 10px;
  align-items: center;
  justify-content: space-around;
`;

export const HomeButton = styled(Button)``;

export const PassButton = styled(Button)``;

export const SurrenderButton = styled(Button)``;