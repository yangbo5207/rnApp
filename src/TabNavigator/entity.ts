import { IterationOB } from 'typing/global';

export const tabNavigationConfig: IterationOB = {
  Home: {
    default: require('./icons/home_default.png'),
    active: require('./icons/home_active.png'),
    text: '首页'
  },
  Message: {
    default: require('./icons/message_default.png'),
    active: require('./icons/message_active.png'),
    text: '消息'
  },
  Profile: {
    default: require('./icons/profile_default.png'),
    active: require('./icons/profile_active.png'),
    text: '我的'
  }
};