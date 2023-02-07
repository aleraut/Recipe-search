import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Recipes from './components/Recipes';

export default function App() {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Recipes />
    </View>
  );
}
