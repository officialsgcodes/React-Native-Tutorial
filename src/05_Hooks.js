import { View, Text, Button } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function Hooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("useEffect Hook.")
  }, [count]);

  return (
    <View>
      <Text>Hooks</Text>
      <Text style={{ fontSize: 40, color: "black" }}>Count: {count}</Text>

      <Button title='Update Count' onPress={() => setCount(count + 1)} />
    </View>
  )
}

// useState
// useEffect
// useMemo
// useCallback
// useReducer