import React from 'react';

import { Container, Name, List, OptionName, OptionValue } from './styles';

export default function CardGame({data, handleOptionSelect, player, ...rest}) {

  function handlePress(option) {
    player ? handleOptionSelect(option.index): null ;
  }

  return (
    <Container player={player}>
      <Name>{data.cardName}</Name>
      <List 
          data={data.cardOptions}
          keyExtractor={item => String(item.name)}
          renderItem={({item}) => 
        <>
          <OptionName onPress={() => handlePress(item)}>{item.name} {item.value}</OptionName>
        </>
        }/>
    </Container>
  );
}
