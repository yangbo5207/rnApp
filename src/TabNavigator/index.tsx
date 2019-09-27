import React from 'react';
import Home from 'pages/Home';
import Profile from 'pages/Profile';
import Message from 'pages/Message';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const TabNavigator = createBottomTabNavigator({
  Home,
  Profile,
  Message
});

export default createAppContainer(TabNavigator);
