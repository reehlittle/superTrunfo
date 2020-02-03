import React from 'react';
import { Container, ShadowView, ButtonView, Text } from './styles';

export default function Button({ children, press, prettier, ...rest }) {

  return (
    <Container { ...rest }>
      <ShadowView color={prettier.c} height={prettier.h} width={prettier.w}>
        <ButtonView color={prettier.c} press={press}>
          <Text textSize={prettier.ts}>{children}</Text>
        </ButtonView>
      </ShadowView>
    </Container>
  );
}