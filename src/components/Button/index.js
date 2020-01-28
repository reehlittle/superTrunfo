import React from 'react';
import { Container, Text, ShadowView, ButtonView } from './styles';

export default function Button({ children, loading, style, ...rest }) {

  console.tron.log(style);

  return (
    <Container { ...rest }>
      <ShadowView color={'#ffb300'}>
        <ButtonView color={'#ffb300'}>
          <Text>{children}</Text>
        </ButtonView>
      </ShadowView>
    </Container>
  );
}


