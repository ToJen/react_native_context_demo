import React from 'react';
// import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { AntDesign } from '../constants/IconTypes';

import TabBarIcon from '../components/TabBarIcon';
import ExploreScreen from '../screens/explore/ExploreScreen';
import ChatScreen from '../screens/chat/ChatScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const ExploreStack = createStackNavigator({
  Explore: ExploreScreen,
});

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      type={AntDesign}
      focused={focused}
      name='search1'
    />
  ),
};

const ChatStack = createStackNavigator({
  Chat: ChatScreen,
});

ChatStack.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      type={AntDesign}
      focused={focused}
      name='message1'
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      type={AntDesign}
      focused={focused}
      name='user'
    />
  ),
};

export default createBottomTabNavigator({
  ExploreStack,
  ChatStack,
  ProfileStack,
}, {
  initialRouteName: 'ChatStack'
});