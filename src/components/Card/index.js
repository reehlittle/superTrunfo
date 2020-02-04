import React from 'react';
import { Text } from 'react-native';

import {
  Container,
  ProfileContainer,
  CardImage,
  Name,
  OptionsContainer,
  List,
  OptionView,
  OptionName,
  OptionValue
} from './styles';

export default function CardGame({data, handleOptionSelect, player, ...rest}) {

  function handlePress(option) {
    player ? handleOptionSelect(option.index): null ;
  }

  return (
    <Container player={player}>
      <ProfileContainer>
        <CardImage source={{uri: 'https://www.razaoautomovel.com/wp-content/uploads/2018/10/Volvo-XC40-34_925x520_acf_cropped.jpg'}}/>
        <Name>{data.cardName}</Name>
      </ProfileContainer>
      <OptionsContainer>
        <List
          data={data.cardOptions}
          keyExtractor={item => String(item.name)}
          renderItem={({item}) =>
            <OptionView onPress={() => handlePress(item)}>
              <OptionName>
                <Text style={{fontSize:12}}>{item.name.toUpperCase()}</Text>
              </OptionName>
              <OptionValue>
                <Text>{item.value}</Text>
              </OptionValue>
            </OptionView>
        }/>
      </OptionsContainer>
    </Container>
  );
}
