import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
// import DrawerComponent from "./CustomDrawerComponent";
import DrawerMenu from "./DrawerMenu";

// imported stack navigator 
import AppStackNavigator from "./AppStackNavigator";

const AppNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppStackNavigator
    }
  },
  {
    contentComponent: DrawerMenu
  }
//  {   

//   //  Home : AppStackNavigator,
//   //  Dashboard : AppStackNavigator,
//   //  Manage_Profile :
//   //  {
//   //  screen:AppStackNavigator, 
//   //  navigationOptions: {
//   //    drawerLabel: "Manage Profile"
//   //  },
//   // },      
//    //Profile_VA : AppStackNavigator,
//    //Profile_PA : AppStackNavigator,
//  }
);

export default AppNavigator;
// export default AppContainer = createAppContainer(AppNavigator);