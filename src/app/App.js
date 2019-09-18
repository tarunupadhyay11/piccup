/**
 * Piccup React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {PersistGate} from 'redux-persist/integration/react'
import SplashScreen from './containers/SplashScreen';
// stacknavigator component
import AppNavigator from './navigation';
// store for redux
import {store , persistor} from './redux/store';
// import store from './src/app/redux/store'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        timePassed: false,
    };
  }

  componentDidMount() {
    console.log(store.getState())
      setTimeout( () => {
          this.setTimePassed();
      },2000);
  }

  setTimePassed() {
      this.setState({timePassed: true});
  }
  render() {
    if (!this.state.timePassed) {
        return <SplashScreen/>;
    } else {
        return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppNavigator/>
          </PersistGate>
        </Provider>)
    }
  }
}
