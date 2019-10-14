import React from 'react';
import {Image, View, Text} from 'react-native';
import Home from 'pages/Home';
import Profile from 'pages/Profile';
import Message from 'pages/Message';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { tabNavigationConfig } from 'src/TabNavigator/entity';

const TabNavigator = createBottomTabNavigator({
  Home,
  Message,
  Profile,
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      const {routeName} = navigation.state;
      console.log('routename', routeName);
      const co = tabNavigationConfig[routeName];
      let source = focused ? co.active : co.default;
      return <Image source={source} style={{width: 20, height: 20}} />;
    },
    tabBarLabel: ({focused}: any) => {
      const co = tabNavigationConfig[navigation.state.routeName];
      return (
        <View style={{ alignItems: 'center', paddingBottom: 4 }}>
          <Text style={{ color: focused ? '#4F8BFC' : '#7A84A0', fontSize: 12 }}>{co.text}</Text>
        </View>
      );
    }
  }),
  tabBarOptions: {
    style: {
      borderTopWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -10 },
      shadowOpacity: 0.05,
      shadowRadius: 10,
      elevation: 16,
    },
  }
});

TabNavigator.navigationOptions = {
  header: null
};

export default createAppContainer(TabNavigator);
