/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

function noop() {}

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured.'));
}

if (!__DEV__) {
  global.console = {
    info: noop,
    log: noop,
    warn: noop,
    debug: noop,
    error: noop
  }
}

AppRegistry.registerComponent(appName, () => App);
