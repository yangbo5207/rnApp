import Reactotron from 'reactotron-react-native';
import deviceInfo from 'react-native-device-info';
import { Platform } from 'react-native';

const config = require('./config.json');

const option: { [key: string]: any } = {};
if (!deviceInfo.isEmulator()) {
  if (Platform.OS === 'android' && Number(deviceInfo.getSystemVersion()) >= 9) {
    // todo
    // android 9 请使用 adb reverse tcp:9090 tcp:9090 连接
  } else {
    option.host = config.ip;
  }
}

Reactotron
  .configure(option)
  .useReactNative()
  .connect();

console.info = Reactotron.log;
console.log = Reactotron.log;
console.error = Reactotron.error;
console.warn = Reactotron.warn;
console.debug = Reactotron.debug;

console.log('设备信息', deviceInfo.getSystemVersion());
