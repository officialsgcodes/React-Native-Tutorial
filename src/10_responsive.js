import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import Btn from './Components/Btn';

export default function Responsive() {
  const deviceHeight = Dimensions.get('window').height;
  const deviceWidth = Dimensions.get('window').width;

  const showDimensions = () => {
    console.log(deviceHeight + ' ' + deviceWidth);
  };

  const Display = (color) => (
    <View
        style={{
          height: deviceHeight / 3,
          width: (deviceWidth / 2) - 20,
          backgroundColor: color,
          borderRadius: 20,
          padding: 16,
          margin: 10
        }}>
        <Text style={{fontSize: 25, color: 'white'}}>
          This is responsive element.
        </Text>
      </View>
  )

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {Display("red")}
      {Display("green")}
      {Display("blue")}
      {Display("black")}
    </View>
  );
}
