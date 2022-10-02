import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Icons() {
  return (
    <View>
      <Text>Icons</Text>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="menu" size={70} color="black" />
      </TouchableOpacity>

      <Icon.Button
        name="logo-facebook"
        backgroundColor="#3b5998"
        size={28}
        onPress={() => {}}>
        <Text style={{fontFamily: 'Arial', fontSize: 25, color: 'white'}}>
          Login with Facebook
        </Text>
      </Icon.Button>
    </View>
  );
}
