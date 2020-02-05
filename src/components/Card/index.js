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

  let animatedValue = new Animated.Value(0);
  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg']
  });
  const frontOpacity = animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [1, 0]
  });
  const backOpacity = animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [0, 1]
  });
  const frontAnimatedStyle = {
    transform: [
      { rotateY: frontInterpolate }
    ]
  };
  const backAnimatedStyle = {
    transform: [
      { rotateY: backInterpolate }
    ]
  };

  function handlePress(option) {
    player ? handleOptionSelect(option.index): null ;
  }

  useEffect(() => {
    console.tron.log(`Open: ${open}`);
  }, []);

  useEffect(( )=> {
    open && flipCard()
  }, [open]);

  function flipCard() {
    // if (angle >= 90) {
      // Animated.spring(animatedValue,{
      //   toValue: 0,
      //   friction: 8,
      //   tension: 10
      // }).start();
    // } else {
      Animated.spring(animatedValue,{
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    // }
  }

  return (
    <Container >
      <View>
        <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle, {opacity: backOpacity}]}>
          <ProfileContainer>
            <CardImage source={{uri: 'https:www.razaoautomovel.com/wp-content/uploads/2018/10/Volvo-XC40-34_925x520_acf_cropped.jpg'}}/>
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
        </Animated.View>
        <Animated.View style={[styles.flipCard, frontAnimatedStyle, {opacity: frontOpacity}]}>
          <CardBackground source={require('../../assets/card-background.png')}/>
        </Animated.View>
      </View>
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
  },
});