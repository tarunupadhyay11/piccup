/*
 @Authour Satyanarayan Gotherwal
 @Date  from : 23/05/2019
*/
import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import {Form,Item,Input,Container,Content,Button,Icon,Radio} from 'native-base';
import renderIf from 'render-if';
import BasicUrl from '../../../utils/BasicUrl';
import Spinner from 'react-native-loading-spinner-overlay';

const { width, height } = Dimensions.get('window');

export default class ForgotPassword extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props){
    super(props)
    this.state={email:'',activeInput:false,spinner:false};
  }
  search(){
    const { email }=this.state;
    var re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var status=re.test(email);
    
    if( !status){
      alert('Please enter valid email address');
    }else{
          this.setState({spinner:true});
          const url='http://piccupkw.com/mobileApi/user-forget.php';
          
          data= JSON.stringify({
                                email:email,
                              })
          
          fetch(url, {
              method: 'POST',
              headers: { 'Accept': 'application/json','Content-Type': 'application/json',},
              body:data
          })
            .then((response) => response.json())
            .then((responseData) => { 
                        
                    this.setState({spinner:false})
                    console.warn('response',responseData);
                    if(responseData.msg=='Please check your mail for OTP'){
                       this.props.navigation.navigate('otp_verification');
                    }else{
                      alert('E-mail ID does not exists')
                    }
                    
            })
            .catch((error) => {
                console.log("Error");
            });
      }
  }
  register(language){
    this.props.navigation.navigate('register',{
        language:language
      });
  }
  render(){
    const { spinner } = this.state;
    const { navigation } = this.props;
    const language = navigation.getParam('language', 'english');
    return(
      <Container style={{backgroundColor:'transparent'}}>
         <Content>
              <Spinner
                    visible={spinner}
                    textContent={'Processing...'}
                    textStyle={{color: 'green'}}
                />
                <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
                      <Image style={{width:100,height:100}} source={require('../../../lib/assets/img/logo.png')}/>
                </View>
                {renderIf(language == 'english')(
                    <View>
                    <View style={{paddingLeft:40,marginTop:80}}>
                    <Text style={{fontSize:20,color:'#4A6673',fontWeight:'bold'}}>Forgot Password</Text>
                </View>
                <View style={{paddingLeft:40,marginTop:10}}>
                    <Text style={{fontSize:15,color:'#4A6673',fontWeight:'bold'}}>Please Enter the Your email Id to reset your password</Text>
                </View>
                    </View>
                
                )}
                {renderIf(language == 'arbic')( 
                    <View>
                    <View style={{marginRight:0,marginTop:80 }}>
                    <Text style={{fontSize:20,color:'#4A6673',fontWeight:'bold',paddingRight:40,textAlign:'right'}}>Forgot Password</Text>
                </View>
                <View style={{paddingRight:40,marginTop:10}}>
                    <Text style={{fontSize:15,color:'#4A6673',fontWeight:'bold',textAlign:'right'}}>Please Enter the Your email Id to reset your password</Text>
                </View>
                    </View>
                    
                )}
                <View style={{marginLeft:40,marginRight:40}}>
                <Form>
                    {renderIf(language == 'english')(
                        <Item rounded bordered style={{marginLeft: 0,marginTop:30,borderColor:'#4A6673',borderWidth:1,height:45}}>
                        <Icon style={{marginLeft:10,color:'grey'}} name='ios-mail' />
                        <Input
                            placeholder='E-mail Id'
                            onChangeText={(value) =>{this.setState({'email':value})}}
                            value={this.state.email}
                            keyboardType="email-address"

                            />
                        </Item>
                    )}
                    {renderIf(language == 'arbic')( 
                        <Item rounded bordered style={{marginLeft: 0,marginTop:30,borderColor:'#4A6673',borderWidth:1,height:45}}>
                        {renderIf(!this.state.activeInput)(
                        <Input
                            placeholder='E-mail Id'
                            onFocus={() =>{this.setState({activeInput:true})}}
                            style={{textAlign: 'right'}}
                            
                        /> 
                        )}
                        {renderIf(this.state.activeInput)(
                        <Input
                            onChangeText={(value) =>{this.setState({'email':value})}}
                            value={this.state.email}
                            style={{textAlign: 'right'}}
                            keyboardType="email-address"
                        />
                        )}
                        <Icon style={{marginRight:10,color:'grey'}} name='ios-mail' />
                        </Item>
                    )}
                </Form>
                </View>
                {renderIf(language == 'english')(
                 <View style={{marginLeft:40,marginRight:40}}> 
                <View style={{marginTop:30}}>
                    <Button   style ={{backgroundColor:'#02e3cd',fontSize:18, width:width-80, height:40,justifyContent:'center',borderRadius:20, borderWidth:2,borderColor:'#02e3cd'}} onPress={() => this.search()}>
                        <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Send</Text>
                    </Button>
                </View>
                    </View>
                )}

                {renderIf(language == 'arbic')(
                    <View style={{marginLeft:40,marginRight:40}}>
                <View style={{marginTop:30}}>
                    <Button   style ={{backgroundColor:'#02e3cd',fontSize:18, width:width-80, height:40,justifyContent:'center',borderRadius:20, borderWidth:2,borderColor:'#02e3cd'}} onPress={() => this.search()}>
                        <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Send </Text>
                    </Button>
                </View>
                    </View>
                )}
                {renderIf(language == 'english')(
                <View style={{marginTop:40,flexDirection:'row',justifyContent:'center'}}>
                    <Text style={{fontSize:18,color:'#4A6673',fontWeight:'bold'}}>New User !</Text>
                    <TouchableOpacity onPress={()=> this.register('english')}>
                      <Text style={{fontSize:18,color:'#4A6673',fontWeight:'bold'}}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
                )}
                {renderIf(language == 'arbic')(
                    <View style={{marginTop:40,flexDirection:'row',justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=> this.register('arbic')}>
                      <Text style={{fontSize:18,color:'#4A6673',fontWeight:'bold'}}> Sign Up</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize:18,color:'#4A6673',fontWeight:'bold'}}> ! New User</Text>
                </View>
                )}
         </Content>
      </Container>
    );
  }
}
