import React, { Component } from "react";
import {SafeAreaView,StyleSheet,navigation, Text, View,StatusBar,Image,Dimensions,ScrollView,TouchableOpacity} from 'react-native';
import {Form,Item,Icon,Input,Container,Content,Button, Footer, FooterTab} from 'native-base';
import { connect } from 'react-redux';
import {SIGN_IN_SUCCESS} from '../../redux/actions/action-creator';

const { height, width } = Dimensions.get('window');

class Dashboard extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
          headerLeft: (
            <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
                <View style={{paddingHorizontal:10}}>
                    <Icon name="md-menu" style={{fontSize:35}} size={35}/>
                </View>
            </TouchableOpacity>
          ),
          headerTitle:(
            <View style={{ justifyContent: 'center',
            alignItems:'center', flex:1}}>
              <Image style={{height:45,resizeMode:'contain',}} source={require('../../lib/assets/img/logo.png')}/>
            </View>
          ),
          headerTitleStyle:{
            alignSelf: 'center',
        justifyContent: 'center',
        alignItems:'center', 
        
        marginLeft:-50
          },
          headerRight: (
            <TouchableOpacity>
                <View style={{paddingHorizontal:10}}>
                    <Image source={require('../../lib/assets/img/Top-Locker-Icon.png')}/>
                </View>
            </TouchableOpacity>
          ),
        }
      
    }

    constructor(props){
        super(props);
       // const { token } = this.props.auth;   
       // console.log(token);    
       this.loadApp()          
      }

      loadApp = async() => {       
        if(this.props.sign_in){
         this.props.navigation.navigate('Auth')
       } 
       const userToken = this.props.auth.token;            
       this.props.navigation.navigate(userToken ? 'App' : 'Home'); 

     }

    render() {
        const { userData } = this.props.auth;  
         
        return (
            <SafeAreaView style={styles.container}>

                <ScrollView>
                <Button block light>
                    <Text>Welcome {userData.name} !!</Text>
                </Button>
              
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10,marginTop:50}}>                           
                           
                        <View style={[styles.box,{backgroundColor:'#019FE8'}]}>
                            <TouchableOpacity style={styles.boxInner}>
                                <View>
                                    <Text style={styles.boxText}>Dashboard</Text>
                                </View>
                            </TouchableOpacity>
                        </View>                        
                        <View style={[styles.box,{backgroundColor:'#7BB400'}]}>
                            <TouchableOpacity style={styles.boxInner}>
                                <View>
                                    <Text style={styles.boxText}>Dashboard</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10,marginTop:20}}>
                        <View style={[styles.box,{backgroundColor:'#EA4E21'}]}>
                            <TouchableOpacity style={styles.boxInner}>
                                <View>
                                    <Text style={styles.boxText}>Dashboard</Text>
                                </View>
                            </TouchableOpacity>
                        </View>                        
                        <View style={[styles.box,{backgroundColor:'#F7B301'}]}>
                            <TouchableOpacity style={styles.boxInner}>
                                <View>
                                    <Text style={styles.boxText}>Dashboard</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>

            </SafeAreaView>
        );
    }
}

//const mapStateToProps = ({ auth }) => ({ auth });

//export default connect(mapStateToProps, { SIGN_IN_SUCCESS })(Dashboard);

const mapStateToProps = (state) =>{
    return { ... state};
  };

export default connect(mapStateToProps)(Dashboard);

//export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    box:{borderColor:'grey',borderWidth:0.5},
    boxInner:{width:width/2-20,height:width/3,justifyContent:'center',alignItems:'center',},
    boxText:{fontWeight:'600',fontSize:14,color:'#fff',letterSpacing:0.5,textTransform:'uppercase'}


});