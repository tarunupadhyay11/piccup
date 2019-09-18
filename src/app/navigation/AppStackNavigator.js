import React, {Component} from 'react';
import {Platform, StyleSheet,TouchableOpacity, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import Login from '../containers/auth/Login';
import Register from '../containers/auth/Register';
import BeforeLogin from '../containers/BeforeLogin';
import ForgotPassword from '../containers/auth/ForgotPassword';
import OtpVerification from '../containers/auth/OtpVerification';
import VA from '../containers/Profile/VA';
import PA from '../containers/Profile/PA';
import LockeRooms from '../containers/LockeRooms';
import EventList from '../containers/EventList';
import EventDetails from '../containers/EventDetails';
import Organizer from '../containers/Organizer';
import Home from '../containers/Home';
import ManageProfile from '../containers/User/ManageProfile';
import UserDashboard from '../containers/User/Dashboard';
import Logout from '../containers/auth/Login/Logout';
import viewUserProfile from '../containers/User/viewProfile';
import Manage_PA from '../containers/User/Manage_PA';
import Manage_VA from '../containers/User/Manage_VA';
import manageEventUser from '../containers/User/ManageEvent';
import ManageVenue from '../containers/User/ManageVenue';


const AppNavigator = createStackNavigator(
  {
    Home:{
      screen:Home, 
    }, 
    Dashboard:{
      screen:UserDashboard, 
    },
    Manage_Profile:{
      screen:ManageProfile, 
    },  
    Manage_PA:{
      screen:Manage_PA, 
    },  
    Manage_VA:{
      screen:Manage_VA, 
    },
    viewUserProfile:{
      screen:viewUserProfile, 
      navigationOptions:{
        title:'Profile'
      }
    }, 
    manageEventUser:{
      screen:manageEventUser, 
      navigationOptions:{
        title:'Manage Event'
      }
    },
    ManageVenue:{
      screen:ManageVenue, 
      navigationOptions:{
        title:'Manage Venue'
      }
    },
    Logout:{
      screen:Logout, 
    },     
    forgot_password:ForgotPassword,
    otp_verification:OtpVerification,


    LockeRooms:{
      screen : LockeRooms,
      navigationOptions:{
        title:'Locke Rooms'
      }
    },
    EventList:{
      screen: EventList,
      navigationOptions:{
        title:'Event Listing'
      },
    },
    EventDetails:{
      screen : EventDetails,
      navigationOptions:{
        title:'Event Details'
      },
    },
    Profile_VA:{
      screen : VA,
      navigationOptions:{
        title:'Profile'
      },
    },
    Profile_PA:{
      screen : PA,
      navigationOptions:{
        title:'Profile'
      },
    },
    Organizer:{
      screen : Organizer,
      navigationOptions:{
        title:'Event Organizer'
      },
    }
  },
  {
    initialRouteName: "Dashboard",
  }
);
export default AppNavigator;
// export default AppContainer = createAppContainer(AppNavigator);