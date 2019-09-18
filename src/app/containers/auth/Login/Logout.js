import React, { Component } from "react";
import {ScrollView, Text, View,StyleSheet,AsyncStorage} from 'react-native';
import {
  signOut,makeErrorFalse
} from '../../../redux/actions/action-creator';
import { connect } from 'react-redux';






class Logout extends Component {

    constructor(props) {
        super(props)     
        
      
      //this.props.navigation.navigate('AuthLoading')   
    }
    componentDidMount(){
      this.props.signOut()
      this.props.navigation.navigate('Auth')
    }
    
    componentWillMount() {
      
      // const data = JSON.stringify({
      //   email: userName,
      //   pass: password,
      //   user_type:type
      // });
      //this.props.signOut(data, type)
      //AsyncStorage.clear();
      //this.props.navigation.navigate('AuthLoading')
   }

   render () {
    return (        
           <View>
          <Text >
            Logout
          </Text>
          </View>
          )}
   
   
}



// const mapDispatchToProps = {
//   signOut,
// }

// export default connect(mapDispatchToProps)(Logout)

const mapStateToProps = (state) => ({
  language: state.auth.lang,
  isLoading: state.auth.isLoading,
  sign_in: state.auth.sign_in,
  error: state.auth.error,
  responseCode: state.auth.responseCode,
  errorMsg: state.auth.errorMsg
});
const mapDispatchToProps = {
  signOut,makeErrorFalse
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)

//export default Logout;