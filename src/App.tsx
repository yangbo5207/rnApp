/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TabNavigator from './TabNavigator';

export default function App() {
  return (
    <TabNavigator />
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
