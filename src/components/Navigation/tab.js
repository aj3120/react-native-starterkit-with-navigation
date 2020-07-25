import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ShotStackScreen from './stackscreens/shotstack';
import FilterStackScreen from './stackscreens/filterstak';
import NotificationStackScreen from './stackscreens/notificationstack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName="Shots" tabBarOptions={{
        animationEnabled: true
    }}>
      <Tab.Screen name="Shots" component={ShotStackScreen} options={{
          tabBarLabel: 'Shots',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Filter" component={FilterStackScreen} options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Notification" component={NotificationStackScreen} options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

export default TabNavigation;