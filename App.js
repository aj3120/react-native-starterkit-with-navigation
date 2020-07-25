if(__DEV__) {
  import('./src/config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import configureStore from './src/redux/ConfigureStore';
import RootNavigation from './src/components/Navigation';

const { store, persistor } = configureStore(/* provide initial state if any */);


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
}
