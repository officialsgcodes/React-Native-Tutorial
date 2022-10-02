import {View, Text} from 'react-native';
import React from 'react';
import Btn from '../Components/Btn';

export default function Home(props) {
  return (
    <View>
      <Text>Home</Text>
      <Btn
        title="Go To Search Page"
        Press={() => props.navigation.navigate('Search')}
      />

      <Btn
        title="Go To ShowHome"
        Press={() => props.navigation.navigate('ShowHome')}
      />
    </View>
  );
}
