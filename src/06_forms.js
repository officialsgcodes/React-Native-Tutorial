import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';

export default function Forms() {
  return (
    <View style={{alignItems: 'center', paddingVertical: 20}}>
      <TextInput
        placeholder="First Name"
        placeholderTextColor="black"
        style={{
          backgroundColor: 'rgb(200, 200, 200)',
          paddingHorizontal: 10,
          borderRadius: 10,
          width: 400,
          fontSize: 25,
          marginVertical: 10,
        }}
        //secureTextEntry
        onChangeText={value => alert(value)}
      />

      <TextInput
        placeholder="Last Name"
        placeholderTextColor="black"
        style={{
          backgroundColor: 'rgb(200, 200, 200)',
          paddingHorizontal: 10,
          borderRadius: 10,
          width: 400,
          fontSize: 25,
          marginVertical: 10,
        }}
        onChangeText={value => alert(value)}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="black"
        style={{
          backgroundColor: 'rgb(200, 200, 200)',
          paddingHorizontal: 10,
          borderRadius: 10,
          width: 400,
          fontSize: 25,
          marginVertical: 10,
        }}
        keyboardType={'email-address'}
        onChangeText={value => alert(value)}
      />

      <TextInput
        placeholder="Contact Number"
        placeholderTextColor="black"
        style={{
          backgroundColor: 'rgb(200, 200, 200)',
          paddingHorizontal: 10,
          borderRadius: 10,
          width: 400,
          fontSize: 25,
          marginVertical: 10,
        }}
        keyboardType={'number-pad'}
        onChangeText={value => alert(value)}
      />

      <TextInput
        placeholder="Bio"
        placeholderTextColor="black"
        style={{
          backgroundColor: 'rgb(200, 200, 200)',
          paddingHorizontal: 10,
          borderRadius: 10,
          width: 400,
          fontSize: 25,
          marginVertical: 10,
        }}
        multiline={true}
        numberOfLines={4}
        onChangeText={value => alert(value)}
      />

      <Button title='Submit' onPress={() => {}} color="black" />
    </View>
  );
}
