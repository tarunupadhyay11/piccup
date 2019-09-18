/**
 * @format
 */
import {AppRegistry} from 'react-native';

import App from './src/app/App/../App'
// import App from './src/app/App/../containers/Profile/';

import {name as appName} from './app.json';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['ViewPagerAndroid']);
AppRegistry.registerComponent(appName, () =>App);
