import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

export default function View_Text_Styles_Button() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.subContainer}>This is a Text component</Text>
        <Text style={styles.subContainer}>This is another Text component</Text>
      </View>
      <Button title="Click Me" color="red" onPress={() => {alert("Button Clicked")}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 16,
    margin: 10,
  },
  subContainer: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
  },
});
