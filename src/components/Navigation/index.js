import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './drawer';


function RootNavigation() {
  return (
    <NavigationContainer>
        <DrawerNavigation/>
    </NavigationContainer>
  );
}

export default RootNavigation;