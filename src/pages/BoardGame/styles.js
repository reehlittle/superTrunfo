import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const CompCardContainer = styled.View`
  width: 100%;
  height: 20%;
  border: 1px solid black;
`;

export const OptionsContainer = styled.View`
  width: 100%;
  height: 50%;
  border: 1px solid grey;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PlayerCardContainer = styled.View`
  width: 100%;
  height: 40%;
  border: 1px solid blue;
  align-items: center;
`;

export const Score = styled.View`
  width: 120px;
  height: 200px;
  border: 2px solid #ffb300;
  background: rgba(255, 179, 0, 0.2);
`;

export const Options = styled.View`
  width: 120px;
  height: 200px;
  border: 2px solid #006775;

`;
