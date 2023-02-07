import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Recipies from './components/Recipies';

export default function App() {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Recipies />
    </View>
  );
}
