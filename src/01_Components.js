import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const Func1 = () => (
  <Text>Component 1</Text>
)

const Func2 = () => (
  <Text>Component 2</Text>
)

export const Func3 = () => (
  <Text>Component 3</Text>
)

const Components = () => {
  return(
    <SafeAreaView>
      <Func1 />
      <Func2 />
    </SafeAreaView>
  )
}

export default Components;