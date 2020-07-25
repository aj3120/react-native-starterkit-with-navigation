import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import Reactotron from '../config/ReactotronConfig';
import createRootReducer from './CombineReducers';
import { watchAll } from './saga/RootSaga';
 
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'testReducer',
  ],
};

const persistedReducer = persistReducer(persistConfig, createRootReducer());

const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

export default function configureStore(preloadedState) {
    const store = createStore(
        persistedReducer, // root reducer with router state
        preloadedState,
        compose(
            applyMiddleware(
                sagaMiddleware// ... other middlewares ...
            ),
            Reactotron.createEnhancer()
        ),
    )
    
    const persistor = persistStore(store)
    
    sagaMiddleware.run(watchAll);
    
    return {store, persistor};
}