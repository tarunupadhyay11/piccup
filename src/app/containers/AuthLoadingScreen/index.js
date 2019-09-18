import React, { Component } from "react";
import {View,	Text,	StyleSheet,	ActivityIndicator, AsyncStorage} from "react-native";
import { connect } from 'react-redux';
import {SIGN_IN_SUCCESS} from '../../redux/actions/action-creator';


class AuthLoadingScreen extends Component {

    constructor(props) {
        super(props)
        this.loadApp()
    }

    loadApp = async() => {       
        //  if(this.props.sign_in){
        //   this.props.navigation.navigate('Auth')
        // }
      
        //const userToken = await AsyncStorage.getItem('userToken');       
        //this.props.navigation.navigate(userToken ? 'App' : 'Auth');
        //const userToken = this.props.auth.token;   
        const userToken = this.props.auth.token;            
        this.props.navigation.navigate(userToken ? 'App' : 'Auth'); 

    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator/>
            </View>
        );
    }
}

//const mapStateToProps = ({ auth }) => ({ auth });

// const mapStateToProps = (state) => ({
//     language: state.auth.lang,
//     isLoading: state.auth.isLoading,
//     sign_in: state.auth.sign_in,
//     error: state.auth.error,
//     responseCode: state.auth.responseCode,
//     errorMsg: state.auth.errorMsg
//   });

const mapStateToProps = (state) =>{
    return { ... state};
  };

export default connect(mapStateToProps)(AuthLoadingScreen);

//export default AuthLoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});