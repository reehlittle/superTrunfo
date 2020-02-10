import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Animated, View } from 'react-native';
import {
  Container,
  ProfileContainer,
  CardImage,
  Name,
  OptionsContainer,
  List,
  OptionView,
  OptionName,
  OptionValue,
  CardBackground
} from './styles';

export default function CardGame({data, handleOptionSelect, open, ...rest}) {

  function handlePress(option) {
    handleOptionSelect(option.index);
  }

  useEffect(() => {
    console.tron.log(`Open: ${open}`);
  }, []);

  useEffect(()=>{

    console.tron.log('useEffect Card');
  },[data]);

  function handleSelected(index) {
    console.tron.log(data);
    data.selected.option === index ? data.selected.result : 'none';
  }

  return (
    <Container >
      {
        open ?
        <View style={ styles.flipCard }>
          <ProfileContainer>
            <CardImage source={{uri: 'https:www.razaoautomovel.com/wp-content/uploads/2018/10/Volvo-XC40-34_925x520_acf_cropped.jpg'}}/>
            <Name>{data.cardName}</Name>
          </ProfileContainer>
          <OptionsContainer>
            <List
              data={data.cardOptions}
              keyExtractor={item => String(item.name)}
              renderItem={({item}) =>
                <OptionView onPress={() => handlePress(item)} selected={() => handleSelected(item.index)}>
                  <OptionName>
                    <Text style={{fontSize:12}}>{item.name.toUpperCase()}</Text>
                  </OptionName>
                  <OptionValue>
                    <Text>{item.value}</Text>
                  </OptionValue>
                </OptionView>
            }/>
          </OptionsContainer>
        </View>
        :
        <View style={styles.flipCardBack}>
          <CardBackground source={require('../../assets/card-background.png')}/>
        </View>
      }
    </Container>
  );
}

const styles = StyleSheet.create({
  flipCard: {
    height: '100%',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    backfaceVisibility: 'hidden',
  },
  flipCardBack: {
    height: '100%',
    width: '100%',
    position: "absolute",
    padding: 10,
    borderRadius: 10,
  },
});