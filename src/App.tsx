/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {ActivityIndicator, Text, View, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={st.container}>
      <ActivityIndicator />
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
