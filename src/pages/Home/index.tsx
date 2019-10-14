import React from 'react';
import {Text, View, StatusBar} from "react-native";

export default function Home() {
  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Text>hello home page.</Text>
    </View>
  );
}
