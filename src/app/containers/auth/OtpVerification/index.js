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
    this.state={otp:'',password:'',activeInput:false,spinner:false};
  }
  resetPassword(){
    const { otp,password }=this.state;
    if( otp==''){
      alert('Please enter OTP');
    } 
    else if( password ==''){
        alert('Please enter password');
    }else{
          this.setState({spinner:true});
          const url='http://piccupkw.com/mobileApi/user-reset.php';
          
          data= JSON.stringify({
                                otp:otp,
                                pass:password
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
                    if(responseData.msg=='Password Update Successfull'){
                       this.props.navigation.navigate('login')
                    }else{
                      alert('Try again something went wrong')
                    }
                    
            })
            .catch((error) => {
                console.log("Error");
            });
      }
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
                        <View style={{paddingLeft:40,marginTop:90}}>
                            <Text style={{fontSize:18,color:'#4A6673',fontWeight:'bold'}}>Please Enter the OTP sent to your </Text>
                            <Text style={{fontSize:18,color:'#4A6673',fontWeight:'bold'}}>E-mail to reset your password</Text>
                        </View>
                    </View>
                )}
                {renderIf(language == 'arbic')( 
                    <View>
                        <View style={{paddingRight:40,marginTop:90}}>
                            <Text style={{fontSize:18,color:'#4A6673',fontWeight:'bold',textAlign:'right'}}>Please Enter the Your OTP to reset your password</Text>
                        </View>
                    </View>
                    
                )}
                <View style={{marginLeft:40,marginRight:40}}>
                <Form>
                    {renderIf(language == 'english')(
                        <View>
                            <Item rounded bordered style={{marginLeft: 0,marginTop:30,borderColor:'#4A6673',borderWidth:1,height:45}}>
                                <Text style={{marginLeft:10}}></Text>
                                <Input
                                    placeholder='OTP'
                                    onChangeText={(value) =>{this.setState({'otp':value})}}
                                    value={this.state.otp}
                                    keyboardType='numeric'
                                    />
                            </Item>
                            <Item rounded bordered style={{marginLeft: 0,marginTop:30,borderColor:'#4A6673',borderWidth:1,height:45}}>
                                <Text style={{marginLeft:10}}></Text>
                                <Input
                                    placeholder='password'
                                    onChangeText={(value) =>{this.setState({'password':value})}}
                                    value={this.state.password}
                                    secureTextEntry={true}
                                    />
                            </Item>
                        </View>
                    )}
                    {renderIf(language == 'arbic')( 
                       <View>
                       <Item rounded bordered style={{marginLeft: 0,marginTop:30,borderColor:'#4A6673',borderWidth:1,height:45}}>
                            {renderIf(!this.state.activeInput)(
                            <Input
                                placeholder='OTP'
                                onFocus={() =>{this.setState({activeInput:true})}}
                                style={{textAlign: 'right'}}
                                
                            /> 
                            )}
                            {renderIf(this.state.activeInput)(
                            <Input
                                onChangeText={(value) =>{this.setState({'otp':value})}}
                                value={this.state.otp}
                                style={{textAlign: 'right'}}
                                keyboardType='numeric'
                            />
                            )}
                          <Text style={{marginLeft:10}}></Text>
                        </Item>
                        <Item rounded bordered style={{marginLeft: 0,marginTop:30,borderColor:'#4A6673',borderWidth:1,height:45}}>
                            {renderIf(!this.state.activeInput)(
                            <Input
                                placeholder='password'
                                onFocus={() =>{this.setState({activeInput:true})}}
                                style={{textAlign: 'right'}}
                                
                            /> 
                            )}
                            {renderIf(this.state.activeInput)(
                            <Input
                                onChangeText={(value) =>{this.setState({'password':value})}}
                                value={this.state.password}
                                style={{textAlign: 'right'}}
                                keyboardType="email-address"
                            />
                            )}
                          <Text style={{marginLeft:10}}></Text>
                        </Item>
                       </View> 
                    )}
                </Form>
                </View>
                {renderIf(language == 'english')(
                 <View style={{marginLeft:40,marginRight:40}}> 
                <View style={{marginTop:30}}>
                    <Button   style ={{backgroundColor:'#02e3cd',fontSize:18, width:width-80, height:40,justifyContent:'center',borderRadius:20, borderWidth:2,borderColor:'#02e3cd'}} onPress={() => this.resetPassword()}>
                        <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Reset Password</Text>
                    </Button>
                </View>
                    </View>
                )}

                {renderIf(language == 'arbic')(
                    <View style={{marginLeft:40,marginRight:40}}>
                <View style={{marginTop:30}}>
                    <Button   style ={{backgroundColor:'#02e3cd',fontSize:18, width:width-80, height:40,justifyContent:'center',borderRadius:20, borderWidth:2,borderColor:'#02e3cd'}} onPress={() => this.resetPassword()}>
                        <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Reset Password</Text>
                    </Button>
                </View>
                    </View>
                )}
         </Content>
      </Container>
    );
  }
}

