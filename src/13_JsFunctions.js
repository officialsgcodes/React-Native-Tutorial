import {View, Text} from 'react-native';
import React from 'react';

export default function JsFunctions() {
  const data = [
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth',
    'Sixth',
    'Seventh',
    'Eighth',
    'Ninth',
    'Tenth',
  ];

  const showMap = () => {
    return data.map((item, index) => (
      <Text key={index} style={{fontSize: 31, margin: 10, color: 'black'}}>{item}</Text>
    ));
  };

  const showFilter = () => data.filter((item, index) => item == 'Tenth');

  return (
    <View>
      {showMap()}
      <Text style={{color: 'red', fontSize: 40}}>{showFilter()}</Text>
    </View>
  );
}

// map
// filter
