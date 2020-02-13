import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Animated, View } from 'react-native';
import {
  Container,
  CardFront,
  CardBack,
  CardDescription,
  CardImage,
  CardName,
  List,
  OptionView,
  OptionName,
  OptionValue,
  CardBackground
} from './styles';

export default function CardGame({gamer, data, open, handleOptionSelect, playerTurn, ...rest}) {

  function handlePress(option) {
    playerTurn && handleOptionSelect(option.index);
  }

  return (
    <Container >
      {
        open ?
        <CardFront>
          <CardDescription>
            <CardImage source={{uri: 'https:www.razaoautomovel.com/wp-content/uploads/2018/10/Volvo-XC40-34_925x520_acf_cropped.jpg'}}/>
            <CardName>{data.cardName}</CardName>
          </CardDescription>
          <List
            data={data.cardOptions}
            keyExtractor={item => String(item.name)}
            renderItem={({item}) =>
              <OptionView onPress={() => handlePress(item)} selected={item.selected}>
                <OptionName>
                  <Text style={{fontSize:12}}>{item.name.toUpperCase()}</Text>
                </OptionName>
                <OptionValue>
                  <Text>{item.value}</Text>
                </OptionValue>
              </OptionView>
          }/>
        </CardFront>
        :
        <CardBack>
          <CardBackground source={require('../../assets/card-background.png')}/>
        </CardBack>
      }
    </Container>
  );
}