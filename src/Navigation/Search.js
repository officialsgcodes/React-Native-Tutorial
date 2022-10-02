import {View, Text} from 'react-native';
import React from 'react';
import Btn from '../Components/Btn';

export default function Search(props) {
  return (
    <View>
      <Btn
        title="Go To Settings Page"
        Press={() => props.navigation.navigate('Settings')}
      />

<Btn
        title="Go To ShowSearch"
        Press={() => props.navigation.navigate('ShowSearch')}
      />
    </View>
  );
}
