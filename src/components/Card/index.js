import React from 'react';

import { Container, Name, List, OptionName, OptionValue } from './styles';

export default function CardGame({data, handleOptionSelect, ...rest}) {

  function handlePress(option) {
    handleOptionSelect(option);
  }

  return (
    <Container>
      <Name>{data.cardName}</Name>
      <List 
          data={data.options}
          keyExtractor={item => String(item.name)}
          renderItem={({item}) => 
        <>
          <OptionName onPress={() => handlePress(item)}>{item.name} {item.value}</OptionName>
        </>
        }/>
    </Container>
  );
}
