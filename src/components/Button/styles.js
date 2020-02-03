import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.TouchableWithoutFeedback`
  align-items: center;
  justify-content: center;
`;

export const ShadowView = styled.View`
  height: ${props => (props.height)};
  width: ${props => (props.width)};
  background: ${props => ( darken(0.2, props.color))};
  border-radius: 10px;
`;

export const ButtonView = styled.View`
  height: ${props => (props.press ? '100%' : '95%')};
  width: 100%;
  background: ${props => (props.color)};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  /* @import url('https://fonts.googleapis.com/css?family=Londrina+Shadow&display=swap'); */
  /* font-family: 'Londrina Shadow'; */
  color: #fff;
  font-weight: bold;
  font-size: ${props => (props.textSize ? props.textSize : '24px')};
`;