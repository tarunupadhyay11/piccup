import React, {Component} from 'react';
import {Text, View,Image,Dimensions,TouchableOpacity,StyleSheet , Platform , PermissionsAndroid , Alert} from 'react-native';
import  {connect} from 'react-redux';
import {Container,Content, Footer, FooterTab} from 'native-base';
import {setLanguage} from '../../redux/actions/action-creator'
import Radio from '../../lib/assets/misc/components/Radio'
import * as Animatable from 'react-native-animatable'; 
import LinearGradient from 'react-native-linear-gradient';


const { width, height } = Dimensions.get('window');

var radio_props = [
  {label: 'English', value: 'en' },
  {label: 'العربية', value: 'ar' }
];




 class BeforeLogin extends Component{
  static navigationOptions = {
    header: null,
  };
  constructor(props){
    super(props)
    this.state={
      language:'en',
    };
    this.setLanguage = this.setLanguage.bind(this);
  }


  goToHome(){
   const { language } = this.state;
   this.props.navigation.navigate('App',{
     language:language
   });
  }
  goToSignIn(){
    const { language } = this.state;
    this.props.setLanguage(language)
    this.props.navigation.navigate('login',{
      // language:language
    });
  }
  goToSignUp(){
   const { language } = this.state;  
   this.props.setLanguage(language)
   this.props.navigation.navigate('register',{
    //  language:language
   });
  }
  setLanguage = (lang)=>{
    this.setState({language : lang});
  }
  render() {
    const { language } = this.state
    console.log(this.state.language)
      return (
  <LinearGradient colors={['#fad9d1', '#ffffff', '#cdfef9']} style={styles.linearGradient}>

 
              <View style={{marginTop:20 ,marginBottom:40,alignItems:'flex-end'}}>
                <TouchableOpacity    onPress={ () => this.goToHome()}>
                <Text style={{fontSize:20,fontWeight:'bold',marginRight:20}}>Skip</Text>
                </TouchableOpacity>
              </View>
 

        <Container style={{backgroundColor:'transparent'}}>
         <Content>
            <View>
              <Animatable.View animation="rotate" style={{marginTop:30,alignItems:'center',}}>
                <Image style={{width:150,height:150,marginBottom:0}} source={require('../../lib/assets/img/logo.png')}/>
              </Animatable.View> 
             
              <Animatable.View animation="fadeInDown"  delay={600}  style={{marginTop:40 ,alignItems:'center'}}>
                <Text style={{fontSize:20,fontWeight:'bold',marginBottom:15}}>FREE SHIPPING</Text>
                <Text style={{textAlign:'center',fontSize:15,paddingTop:2}}>Where everyday shopping is always rewarded.</Text>
                <Text style={{textAlign:'center',fontSize:15,paddingTop:2}}>Get 10% cash back, free shipping, free returns,</Text>
                <Text style={{textAlign:'center',fontSize:15,paddingTop:2}}>and more at 1000+ top retailers!</Text>
              </Animatable.View>

              <Animatable.View animation="fadeInUp"  delay={700}  style={{marginTop:60 ,alignItems:'center'}}>
                  <Text style={{fontSize:18,fontWeight:'bold'}}>Choose App Language :</Text>
                  <View style={{flexDirection:'row',marginTop:20}}>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        
                        <Radio radioArray = {radio_props} 
                        callback = {this.setLanguage} 
                        isSelected={language}/>

                    </View>
                </View>
              </Animatable.View>

              
            </View>
            </Content>
            <Footer style={{backgroundColor:'transparent'}}>
              <FooterTab style={{backgroundColor:'transparent'}}>
              <Animatable.View animation="fadeInUp"  delay={800} style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableOpacity onPress={ () => this.goToSignIn()} style={{borderBottomLeftRadius:20,borderTopLeftRadius:20,backgroundColor:'#02e3cd',flexDirection:'row',alignItems:'center',justifyContent:'center',width:'49.5%',height:45}} >
                      <Text style={{fontSize:16,fontWeight:'bold',color:'white'}}>SIGN IN</Text>
                    </TouchableOpacity>
                 
                
                    <TouchableOpacity onPress={ () => this.goToSignUp()} style={{borderBottomRightRadius:20,borderTopRightRadius:20,backgroundColor:'#02e3cd',flexDirection:'row',alignItems:'center',justifyContent:'center',width:'49.5%',height:45}}>
                      <Text style={{fontSize:16,fontWeight:'bold',color:'white'}}>SIGN UP</Text>
                    </TouchableOpacity>
                </Animatable.View>
              </FooterTab>
            </Footer>
       
      </Container>
  </LinearGradient>

      );
  }
}


const mapStateToProps = (state)=>({

});
const mapDispatchToProps ={
  setLanguage
}


export default connect(mapStateToProps , mapDispatchToProps)(BeforeLogin);


const styles = StyleSheet.create({
 
  linearGradient: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10, 
  },
});

