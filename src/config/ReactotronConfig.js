import Reactotron, { openInEditor } from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron
    .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure() // controls connection & communication settings
    .use(openInEditor())
    .use(reactotronRedux())
    .use(sagaPlugin())
    .useReactNative() // add all built-in react native plugins
    .connect() // let's connect!

export default reactotron