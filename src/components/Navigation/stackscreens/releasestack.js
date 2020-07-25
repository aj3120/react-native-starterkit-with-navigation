
import Releases from '../../Releases';

import * as React from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ReleaseStackScreen({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Releases" component={Releases} options={{
                headerLeft: (props) => (
                    <HeaderBackButton
                        {...props}
                        onPress={() => { navigation.goBack() }}
                    />
                ),
            }} />
        </Stack.Navigator>
    );
}

export default ReleaseStackScreen;