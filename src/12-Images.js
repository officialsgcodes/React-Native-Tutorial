import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';

export default function Images() {
  return (
    <View>
      {/* <Image source={require('../assets/images/image1.jpg')} style={{ height: '70%', width: '50%', borderRadius: 20, margin: 20 }} /> */}

      <ImageBackground
        source={require('../assets/images/image1.jpg')}
        style={{height: '100%', width: '100%'}}
      />
      <Text
        style={{
          position: 'absolute',
          fontSize: 40,
          color: 'black',
          padding: 20,
        }}>
        This is the text
      </Text>
    </View>
  );
}
