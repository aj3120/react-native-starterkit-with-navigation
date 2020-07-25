
import Bookmark from '../../Bookmark';

import * as React from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';


const Stack = createStackNavigator();

function BookmarkStackScreen({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Bookmark" component={Bookmark} options={{
                headerLeft: (props) => (
                    <HeaderBackButton
                        {...props}
                        onPress={() => { navigation.goBack() }}
                    />
                )
            }} />
        </Stack.Navigator>
    );
}

export default BookmarkStackScreen;