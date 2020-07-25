import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigation from './tab';
import ReleaseStackScreen from './stackscreens/releasestack';
import BookmarkStackScreen from './stackscreens/bookmarkstack';
import { View, Text } from 'react-native';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
      <Drawer.Navigator initialRouteName="Shots" drawerContentOptions={{
            
      }}>
        <Drawer.Screen name="Shots" component={TabNavigation}/>
        <Drawer.Screen name="Releases" component={ReleaseStackScreen} />
        <Drawer.Screen name="Bookmark" component={BookmarkStackScreen} />
      </Drawer.Navigator>
  );
}

export default DrawerNavigation;