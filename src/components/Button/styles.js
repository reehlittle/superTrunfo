import styled from 'styled-components';
import dar from 'polished';

export const Container = styled.TouchableWithoutFeedback`
  flex: 1;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 24px;
`;

export const ShadowView = styled.View`
  height: 80px;
  width: 180px;
  background:  ${props => (props.color)};
  border-radius: 10px;
`;

export const ButtonView = styled.View`
  height: 95%;
  background: red;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;