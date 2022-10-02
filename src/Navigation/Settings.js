import {View, Text} from 'react-native';
import React from 'react';
import Btn from '../Components/Btn';

export default function Settings(props) {
  return (
    <View>
      <Text>Settings</Text>
      <Btn
        title="Go To Home Page"
        Press={() => props.navigation.navigate('Home')}
      />

      <Btn
        title="Go To ShowSettings"
        Press={() => props.navigation.navigate('ShowSettings')}
      />

<Btn
        title="Go To ShowHome"
        Press={() => props.navigation.navigate('Home', {screen: 'ShowHome'})}
      />
    </View>
  );
}
