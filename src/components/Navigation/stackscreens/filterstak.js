import Filter from '../../Filter';

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

function FilterStackScreen({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Filter" component={Filter} options={{
                headerLeft: (props) => (
                    <FeatherIcon
                        name='menu'
                        size={30}
                        style={{paddingLeft: 20}}
                        onPress={() => { navigation.openDrawer() }}
                    />
                )
            }} />
        </Stack.Navigator>
    );
}

export default FilterStackScreen;