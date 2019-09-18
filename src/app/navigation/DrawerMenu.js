import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View,StyleSheet,Image,TouchableOpacity,SafeAreaView,Dimensions,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import renderIf from 'render-if';
import Collapsible from 'react-native-collapsible';

const {height,width} = Dimensions.get('window');
class DrawerMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction); 
  }

  constructor(props) {
    super(props);   

    this.state = { isCollapsed:true}
}

    state = {
      collapsed: true,
    };

    toggleExpanded = () => {
      this.setState({ collapsed: !this.state.collapsed });
    };

  

  render () {
    const userData = this.props.auth.userData;    
    const isLoggedIn = this.props.auth.sign_in;
    return (
      <SafeAreaView style={styles.container}>
               <ScrollView showsVerticalScrollIndicator={false}>
   
          <View style={styles.topView}>
            <View style={{paddingHorizontal:15,paddingVertical:7 ,}}>
              <TouchableOpacity onPress={this.navigateToScreen('Home')} style={styles.homeTxtBtn}> 
                <Icon name="home" size={23} color='#fff'/><Text style={styles.homeTxt}>Home</Text>
              </TouchableOpacity>
            </View>            
            <View style={{padding:15}}>
              <Image source={require('../lib/assets/img/logo.png')} style={styles.logo}/>
            </View>
          </View>


          <View style={{paddingHorizontal:17}}>            
          <TouchableOpacity onPress={this.navigateToScreen('Home')} style={styles.menuTxtBtn}> 
                <Icon name="search" size={17} color='#333' style={styles.icon}/><Text style={styles.menuTxt}>Search</Text>
                {/* <TextInput
      style={{ height: 36,flex: 1, borderColor: 'gray', borderWidth: 1 }}          
    /> */}
               
              </TouchableOpacity>
              <TouchableOpacity onPress={this.navigateToScreen('EventList')} style={styles.menuTxtBtn}> 
                <Icon name="calendar" size={17} color='#333' style={styles.icon}/><Text style={styles.menuTxt}>Upcoming Events</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={this.navigateToScreen('Home')} style={styles.menuTxtBtn}> 
                <Icon name="users" size={17} color='#333' style={styles.icon}/><Text style={styles.menuTxt}>Community</Text>
              </TouchableOpacity> */}             
              <TouchableOpacity onPress={this.navigateToScreen('Home')} style={styles.menuTxtBtn}> 
                <Icon name="star" size={17} color='#333' style={styles.icon}/><Text style={styles.menuTxt}>Notification</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.navigateToScreen('LockeRooms')} style={styles.menuTxtBtn}> 
                <Icon name="comment" size={20} color='#333' style={{width:25}}/><Text style={styles.menuTxt}>LockerRoom</Text>
              </TouchableOpacity>
              </View>
              {renderIf(isLoggedIn)(
            <View onPress={this.toggleExpanded} style={{paddingHorizontal:17}}> 
            <TouchableOpacity  style={styles.menuTxtBtn} onPress={this.toggleExpanded}>           
            <Icon name="plus" size={17} color='#333' style={styles.icon}/><Text style={styles.menuTxt}>Bizz Manager </Text>
            </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed} align="center">
          <View style={{paddingBottom:10,paddingTop:10,paddingHorizontal:17,borderBottomColor:'grey',borderBottomWidth:0.5}}>            
              <TouchableOpacity onPress={this.navigateToScreen('Dashboard')} style={styles.menuTxtBtn}> 
                <Icon name="dashboard" size={17} color='#333' style={styles.icon}/><Text style={styles.menuTxt}>Dashboard</Text>
              </TouchableOpacity>
              {renderIf(userData.user_type=='user')(
              <TouchableOpacity onPress={this.navigateToScreen('Manage_Profile')} style={styles.menuTxtBtn}> 
                <Icon name="user-circle" size={17} color='#333' style={styles.icon}/><Text style={styles.menuTxt}>Manage Profile</Text>
              </TouchableOpacity>
              )}
              {renderIf(userData.user_type=='professional')(
              <TouchableOpacity onPress={this.navigateToScreen('Manage_Profile')} style={styles.menuTxtBtn}> 
                <Icon name="user-circle" size={17} color='#333' style={styles.icon}/><Text style={styles.menuTxt}>Manage Profile</Text>
              </TouchableOpacity>
              )}
              {renderIf(userData.user_type=='vender')(
              <TouchableOpacity onPress={this.navigateToScreen('Manage_VA')} style={styles.menuTxtBtn}> 
                <Icon name="user-circle" size={17} color='#333' style={styles.icon}/><Text style={styles.menuTxt}>Manage Profile</Text>
              </TouchableOpacity>
              )}
              <TouchableOpacity onPress={this.navigateToScreen('manageEventUser')} style={styles.menuTxtBtn}> 
                <Icon name="star" size={17} color='#333' style={styles.icon}/><Text style={styles.menuTxt}>Manage Events</Text>
              </TouchableOpacity>
              {renderIf(userData.user_type=='vender')(
              <TouchableOpacity onPress={this.navigateToScreen('ManageVenue')} style={styles.menuTxtBtn}> 
                <Icon name="building" size={17} color='#333' style={styles.icon}/><Text style={styles.menuTxt}>Manage Venue</Text>
              </TouchableOpacity>
             )}

              <TouchableOpacity onPress={this.navigateToScreen('Home')} style={styles.menuTxtBtn}> 
                <Icon name="diamond" size={17} color='#333' style={styles.icon}/><Text style={styles.menuTxt}>Manage Bookings</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.navigateToScreen('Home')} style={styles.menuTxtBtn}> 
                <Icon name="cogs" size={17} color='#333' style={styles.icon}/><Text style={styles.menuTxt}>Previous Bookings</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.navigateToScreen('Home')} style={styles.menuTxtBtn}> 
                <Icon name="building" size={17} color='#333' style={styles.icon}/><Text style={styles.menuTxt}>Upcoming Bookings</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.navigateToScreen('Home')} style={styles.menuTxtBtn}> 
                <Icon name="user-circle" size={17} color='#333' style={styles.icon}/><Text style={styles.menuTxt}>Payment History</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.navigateToScreen('Home')} style={styles.menuTxtBtn}> 
                <Icon name="star" size={17} color='#333' style={styles.icon}/><Text style={styles.menuTxt}>PA Booking and Payment</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.navigateToScreen('Home')} style={styles.menuTxtBtn}> 
                <Icon name="diamond" size={17} color='#333' style={styles.icon}/><Text style={styles.menuTxt}>Notifications</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.navigateToScreen('Home')} style={styles.menuTxtBtn}> 
                <Icon name="cogs" size={17} color='#333' style={styles.icon}/><Text style={styles.menuTxt}>Change Password</Text>
              </TouchableOpacity> 
                    
          </View>
          </Collapsible>
            </View>          
          )} 
          <View style={{paddingBottom:10,paddingHorizontal:17,borderBottomColor:'grey',borderBottomWidth:0.5,}}>  
              <TouchableOpacity onPress={this.navigateToScreen('Home')} style={styles.menuTxtBtn}> 
                <Icon name="question-circle" size={17} color='#333' style={styles.icon}/><Text style={styles.menuTxt}>Help</Text>
              </TouchableOpacity>    
              <TouchableOpacity onPress={this.navigateToScreen('Home')} style={styles.menuTxtBtn}> 
                <Icon name="cog" size={17} color='#333' style={styles.icon}/><Text style={styles.menuTxt}>Setting</Text>
              </TouchableOpacity>      
          </View>
          <View style={{backgroundColor:'#fff',borderBottomColor:'grey',borderTopColor:'grey',borderTopWidth:0.5,borderBottomWidth:0.7}}>
            {isLoggedIn ? (
              <TouchableOpacity onPress={this.navigateToScreen('Logout')} style={styles.bottomTxtBtn}>
                <Icon name="sign-out" size={23} color='#333' style={{marginTop:2}} /><Text style={styles.bottomTxt}>Logout</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={this.navigateToScreen('Auth')} style={styles.bottomTxtBtn}>
                <Icon name="sign-in" size={23} color='#333' style={{marginTop:2}} /><Text style={styles.bottomTxt}>Login</Text>
              </TouchableOpacity>
            )}
              
            </View> 
                  
           
            </ScrollView>
      </SafeAreaView>
    );
  }
}

DrawerMenu.propTypes = {
  navigation: PropTypes.object
};

//export default DrawerMenu;

const mapStateToProps = (state) =>{
  return { ... state};
};

export default connect(mapStateToProps)(DrawerMenu);


const styles = StyleSheet.create({
    container: {flex: 1,borderRightWidth:0.5,borderRightColor:'lightgrey',backgroundColor:'#fff'},
    homeTxtBtn:{width:150,height:25,marginTop:17,flexDirection:'row',justifyContent:'flex-start'},
    homeTxt:{color:'#fff',fontSize:17,fontWeight:'600',marginTop:0,paddingLeft:15},
    topView:{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#FF5B00',marginBottom:10},
    menuTxtBtn:{flexDirection:'row',justifyContent:'flex-start',paddingVertical:7},
    menuTxt:{color:'#333',fontSize:16,fontWeight:'400',marginTop:0,paddingLeft:15},
    icon:{marginTop:3,width:25},
    bottomTxtBtn:{flexDirection:'row',justifyContent:'flex-start',paddingVertical:10,paddingHorizontal:17,},
    bottomTxt:{color:'#333',fontSize:17,fontWeight:'600',marginTop:0,paddingLeft:15},
    logo:{width:45,height:45,borderColor:'#fff',borderWidth:0.5,borderRadius:50},
});