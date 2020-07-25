
import Notification from '../../Notification';

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

function NotificationStackScreen({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Notification" component={Notification} options={{
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

export default NotificationStackScreen;