import React from 'react';
import {createAppContainer , createSwitchNavigator} from 'react-navigation';
import {connect} from 'react-redux';
import AppStackNavigator  from './AppStackNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import DrawerNavigator from './DrawerNavigator';
import AuthLoadingScreen from '../containers/AuthLoadingScreen';

const SwicthNavigator = createSwitchNavigator({

  AuthLoading : AuthLoadingScreen,
  Auth:AuthStackNavigator,
  App:DrawerNavigator,

},{
  initialRouteName:'AuthLoading'
});

//const mapStateToProps = ({ auth }) => ({ auth });


//const AppContainer = createAppContainer(SwicthNavigator);
//const AppRoutes = () =>  <AppContainer />
//export default connect(mapStateToProps) (AppRoutes);

export default AppContainer = createAppContainer(SwicthNavigator);
