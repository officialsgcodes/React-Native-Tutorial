import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import Btn from './Components/Btn';

export default function Touchable_Activity() {
  const [loading, setLoading] = useState(true);

  return (
    <View style={{alignItems: 'center', paddingTop: 20}}>
      <Btn title="Toggle Indicator" Press={() => setLoading(!loading)} />

      <ActivityIndicator
        animating={loading}
        size={70}
        color="black"
        style={{marginVertical: 40}}
      />
    </View>
  );
}
