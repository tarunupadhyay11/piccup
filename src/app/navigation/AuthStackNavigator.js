import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import Login from '../containers/auth/Login';
import Register from '../containers/auth/Register';
import BeforeLogin from '../containers/BeforeLogin';

const AppNavigator = createStackNavigator(
  {
    before_login:BeforeLogin,
    login:Login,
    register:Register,
  },
  
  {
    initialRouteName: "before_login",
  }
);
export default AppNavigator;
// export default AppContainer = createAppContainer(AppNavigator);