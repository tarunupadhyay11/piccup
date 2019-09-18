// import React,{Component}from 'react';
// import {View,Text,Image} from 'react-native';

// export default class SplashScreen extends  Component {

//   render(){
//     return(
//       <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#ffffff'}}>
//         <Image style={{width:150,height:150}} source={require('../img/logo.png')}/>
//         <Text style={{fontSize:25,color:'#FF5B00',fontWeight:'700',marginTop:20}}>PICK <Text style={{color:'#02e3cd'}}>UP</Text></Text>
//       </View>
//     )
//   }
// }




import React, { Component } from 'react';
import { View, StyleSheet, Animated,Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
   

      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.1, 1],
                })
              },
            ],
          },
          this.props.style,
        ]}
      />




    );
  }
}

const SplashScreen = () => (
  <LinearGradient colors={['#fad9d1', '#ffffff', '#cdfef9']}  style={styles.linearGradient}>

  <View style={styles.container}>
    <ImageLoader
      style={styles.image}
      source={require('../../lib/assets/img/logo.png')}
    />
  <Text style={{fontSize:20,color:'#4A6673',fontWeight:'bold'}}>PICCUP</Text>

  </View>

  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    resizeMode:'contain',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});

export default SplashScreen;