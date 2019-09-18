import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { Form, Item, Input, Container, Content, Button, Icon, Radio } from 'native-base';
// redux import 

import {
  signIn,makeErrorFalse
} from '../../../redux/actions/action-creator';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from '../../../lib/assets/misc/components/Loader'
// redux impot finish

import renderIf from 'render-if';
import BasicUrl from '../../../utils/BasicUrl';
import LinearGradient from 'react-native-linear-gradient';
import { StackActions, NavigationActions } from 'react-navigation';


const { width, height } = Dimensions.get('window');

const resetAction = StackActions.reset({
  index: 1,
  actions: [
    NavigationActions.navigate({ routeName: 'before_login' }),
    NavigationActions.navigate({ routeName: 'register' }),
  ],
});

class Login extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    user: true, professional: false,
    vender: false, userName: '',
    password: '', activeInput: false,
    language: null, sign_in: false,
    isLoading: false, prevError: false,errorMsg : null

  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.language !== prevState.language) {
      
      return {
        language: nextProps.language,
        isLoading: nextProps.isLoading,
        sign_in: nextProps.sign_in,
        errorMsg : nextProps.errorMsg
      }
    }
    if (nextProps.sign_in !== prevState.sign_in && !nextProps.error) {
      
      nextProps.navigation.navigate('App');
      return {
        sign_in: nextProps.sign_in,
        prevError:nextProps.error
      }
    }
   

    if(nextProps.error !== prevState.prevError){
      alert(nextProps.errorMsg)
      nextProps.makeErrorFalse()
      return{
        prevError:nextProps.error
      }
    }

    return null;
  }

  constructor(props) {
    super(props)
  }

  // dataNotFound = () => {
  //   const { error, responseCode, errorMsg } = this.props

  //   Alert.alert('Message', this.state.errorMsg, [
  //     { text: 'OK', onPress: () => this.setState({ prevError: true }) },
  //   ], { cancelable: false },
  //   )
  //   // }else if(responseCode == 500){

  //   //     Alert.alert('Invalid' , "Something Went wrong on your Network" ,[
  //   //       {text: 'OK', onPress: () => this.setState({prevError:false})},
  //   //     ],{cancelable: false},
  //   //     )
  //   // }
  // }

  user() {
    this.setState({
      user: true,
      professional: false,
      vender: false
    });
  }
  professional() {
    this.setState({
      professional: true,
      user: false,
      vender: false
    });
  }
  vendor() {
    this.setState({
      vender: true,
      professional: false,
      user: false,
    });
  }
  logIn() {

    const { userName, password } = this.state;
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    // var pass_re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    // var pass_re_status = pass_re.test(password)

    //console.log(data)
    if (userName && password) {
      if (!emailRegex.test(userName)) {
        alert('Enter Valid Email Address');
      }
      // else if(!pass_re_status){
      //   alert('Pls enter a strong  password of 6 to 16 chars include at least one char and one number');
      // }
       else {
        let type;
        if (this.state.user) {
          type = "user"
        } else if (this.state.professional) {
          type = "professional"
        } else if (this.state.vender) {
          type = "vender"
        }

        const data = JSON.stringify({
          email: userName,
          pass: password,
          user_type:type
        });

        this.props.signIn(data, type)
      }
    } else {
      alert('Fill All Details')
    }

  }
  facebook() {

  }
  google() {

  }
  register() {
    this.props.navigation.dispatch(resetAction);
  }
  arabicInput() {
    this.setState({ activeInput: true });
  }
  forgotPassword(language) {
    this.props.navigation.navigate('forgot_password', {
      language: language
    });
  }
  render() {
    const { navigation, language, isLoading, error } = this.props;
    const { prevError } = this.state
    console.log(prevError, error)
    // const language = navigation.getParam('language', 'english');
    // if(this.props.sign_in){
    //   this.props.navigation.navigate('Home')
    // }

    var msg = navigation.getParam('msg', '');
    // placeholder='الاسم'
    return (
      <LinearGradient colors={['#cdfef9', '#ffffff', '#fad9d1']} style={{ flex: 1 }}>
        <Container style={{ backgroundColor: 'transparent' }}>
          <Content>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
              <Image style={{ width: 100, height: 100 }} source={require('../../../lib/assets/img/logo.png')} />
            </View>
            {renderIf(language == 'en')(
              <View style={{ marginTop: 30, marginLeft: 10, marginRight: 10, flexDirection: 'row', justifyContent: 'center' }}>
                {renderIf(this.state.user)(
                  <Button style={styles.button} onPress={() => this.user()}>
                    <Text style={styles.buttonText}>User</Text>
                  </Button>
                )}
                {renderIf(!this.state.user)(
                  <Button style={styles.button2} onPress={() => this.user()}>
                    <Text style={styles.buttonText2}>User</Text>
                  </Button>
                )}
                {renderIf(this.state.professional)(
                  <Button style={styles.button} onPress={() => this.professional()}>
                    <Text style={styles.buttonText}>Professional</Text>
                  </Button>
                )}
                {renderIf(!this.state.professional)(
                  <Button style={styles.button2} onPress={() => this.professional()}>
                    <Text style={styles.buttonText2}>Professional</Text>
                  </Button>
                )}
                {renderIf(this.state.vender)(
                  <Button style={styles.button} onPress={() => this.vendor()}>
                    <Text style={styles.buttonText}>Vender</Text>
                  </Button>
                )}
                {renderIf(!this.state.vender)(
                  <Button style={styles.button2} onPress={() => this.vendor()}>
                    <Text style={styles.buttonText2}>Vender</Text>
                  </Button>
                )}
              </View>
            )}
            {renderIf(language == 'ar')(
              <View style={{ marginTop: 30, marginLeft: 30, marginRight: 30, flexDirection: 'row', justifyContent: 'center' }}>
                {renderIf(this.state.vender)(
                  <Button style={styles.button} onPress={() => this.vendor()}>
                    <Text style={styles.buttonText}>حساب الشركة</Text>
                  </Button>
                )}
                {renderIf(!this.state.vender)(
                  <Button style={styles.button2} onPress={() => this.vendor()}>
                    <Text style={styles.buttonText2}>حساب الشركة</Text>
                  </Button>
                )}
                {renderIf(this.state.professional)(
                  <Button style={styles.button} onPress={() => this.professional()}>
                    <Text style={styles.buttonText}>حساب شخصي</Text>
                  </Button>
                )}
                {renderIf(!this.state.professional)(
                  <Button style={styles.button2} onPress={() => this.professional()}>
                    <Text style={styles.buttonText2}>حساب شخصي</Text>
                  </Button>
                )}
                {renderIf(this.state.user)(
                  <Button style={styles.button} onPress={() => this.user()}>
                    <Text style={styles.buttonText}>User</Text>
                  </Button>
                )}
                {renderIf(!this.state.user)(
                  <Button style={styles.button2} onPress={() => this.user()}>
                    <Text style={styles.buttonText2}>User</Text>
                  </Button>
                )}
              </View>
            )}
            <View style={{ alignItems: 'center', marginTop: 10 }}>
              {/* <Text style={{fontSize:20,color:'#4A6673',fontWeight:'bold'}}>Welcome to PICCUP</Text> */}
            </View>
            <View style={{ marginLeft: 40, marginRight: 40 }}>
              <Form>
                {renderIf(language == 'en')(
                  <Item rounded bordered style={{ marginLeft: 0, marginTop: 30, borderColor: '#4A6673', borderWidth: 1, height: 45 }}>
                    <Icon style={{ marginLeft: 10, color: 'grey' }} name='ios-contact' />
                    <Input
                      placeholder='Username'
                      onChangeText={(value) => { this.setState({ 'userName': value }) }}
                      value={this.state.userName}
                      style={{}} />
                  </Item>
                )}
                {renderIf(language == 'ar')(
                  <Item rounded bordered style={{ marginLeft: 0, marginTop: 30, borderColor: '#4A6673', borderWidth: 1, height: 45 }}>

                    {renderIf(!this.state.activeInput)(
                      <Input
                        placeholder='الاسم'
                        onFocus={() => { this.arabicInput() }}
                      />
                    )}
                    {/*{renderIf(this.state.activeInput)(
                  <Input
                  onChangeText={(value) =>{this.setState({'userName':value})}}
                  value={this.state.userName}
                  style={{textAlign: 'right'}}
                  />
                )*/}

                    {renderIf(this.state.activeInput)(
                      <Input

                        onChangeText={(value) => { this.setState({ 'userName': value }) }}
                        value={this.state.userName}
                        style={{ textAlign: 'right' }}
                      />
                    )}
                    <Icon style={{ marginRight: 10, color: 'grey' }} name='ios-contact' />
                  </Item>
                )}
                {renderIf(language == 'en')(
                  <Item rounded bordered style={{ marginLeft: 0, marginTop: 30, borderColor: '#4A6673', borderWidth: 1, height: 45 }}>
                    <Icon style={{ marginLeft: 10, color: 'grey' }} name='md-unlock' />
                    <Input
                      placeholder='Password'
                      secureTextEntry={true}
                      onChangeText={(value) => { this.setState({ 'password': value }) }}
                      value={this.state.password}
                      style={{}}
                    />
                  </Item>
                )}
                {renderIf(language == 'ar')(
                  <Item rounded bordered style={{ marginLeft: 0, marginTop: 30, borderColor: '#4A6673', borderWidth: 1, height: 45 }}>
                    <Input
                      placeholder='كلمة السر'
                      secureTextEntry={true}
                      onChangeText={(value) => { this.setState({ 'password': value }) }}
                      value={this.state.password}
                      style={{ textAlign: 'right' }}
                    />
                    <Icon style={{ marginRight: 10, color: 'grey' }} name='md-unlock' />
                  </Item>
                )}
              </Form>

              {renderIf(language == 'en')(
                <View>
                  <View style={{ marginTop: 30 }}>
                    <Button style={{
                      backgroundColor: '#FF5B00', fontSize: 18, width: width - 80,
                      height: 45, justifyContent: 'center', borderRadius: 20, borderWidth: 2,
                      borderColor: '#FF5B00'
                    }} onPress={() => this.logIn()}>
                      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>LOGIN</Text>
                    </Button>
                  </View>
                  <View style={{ flexDirection: 'row', marginHorizontal: 12, marginTop: 30 }}>
                    <View style={{ borderBottomWidth: 1.1, borderColor: '#4A6673', marginBottom: 10, width: width / 2 - 70 }} />
                    <View>
                      <Text style={{ color: '#4A6673', fontWeight: '100', fontSize: 18, marginLeft: 5, marginRight: 5 }}>OR</Text>
                    </View>
                    <View style={{ borderBottomWidth: 1.1, borderColor: '#4A6673', marginBottom: 10, width: width / 2 - 70 }} />
                  </View>
                </View>
              )}

              {renderIf(language == 'ar')(
                <View>
                  <View style={{ marginTop: 30 }}>
                    <Button style={{ backgroundColor: '#FF5B00', fontSize: 18, width: width - 80, height: 45, justifyContent: 'center', borderRadius: 20, borderWidth: 2, borderColor: '#FF5B00' }} onPress={() => this.logIn()}>
                      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>تسجيل الدخول </Text>
                    </Button>
                  </View>
                  <View style={{ flexDirection: 'row', marginLeft: 12, marginTop: 30 }}>
                    <View style={{ borderBottomWidth: 1.1, borderColor: '#4A6673', marginBottom: 10, width: width / 2 - 70 }} />
                    <View>
                      <Text style={{ color: '#4A6673', fontWeight: '100', fontSize: 18, marginLeft: 5, marginRight: 5 }}>أو </Text>
                    </View>
                    <View style={{ borderBottomWidth: 1.1, borderColor: '#4A6673', marginBottom: 10, width: width / 2 - 70 }} />
                  </View>
                </View>
              )}


              {renderIf(language == 'en')(
                <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'center' }}>
                  <Button style={{ width: width / 2 - 50, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#274f8d', backgroundColor: '#FFFFFF', marginRight: 10, marginLeft: 0 }} onPress={() => this.facebook()}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                      <Icon style={{ color: '#274f8d' }} name='logo-facebook' />
                      <Text style={{ paddingLeft: 0, paddingTop: 2, color: '#274f8d' }}>FACEBOOK</Text>
                    </View>
                  </Button>
                  <Button style={{ width: width / 2 - 50, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#FF5B00', backgroundColor: '#FFFFFF', marginRight: 10, marginLeft: 0 }} onPress={() => this.google()}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                      <Icon style={{ color: '#FF5B00' }} name='logo-googleplus' />
                      <Text style={{ paddingLeft: 0, paddingTop: 2, color: '#FF5B00' }}>GOOGLE</Text>
                    </View>
                  </Button>
                </View>
              )}
              {renderIf(language == 'ar')(
                <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'center' }}>
                  <Button style={{ width: width / 2 - 50, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#FF5B00', backgroundColor: '#FFFFFF', marginRight: 10, marginLeft: 0 }} onPress={() => this.google()}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                      <Icon style={{ color: '#FF5B00' }} name='logo-googleplus' />
                      <Text style={{ paddingLeft: 0, paddingTop: 2, color: '#FF5B00' }}>GOOGLE</Text>
                    </View>
                  </Button>
                  <Button style={{ width: width / 2 - 50, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#274f8d', backgroundColor: '#FFFFFF', marginRight: 10, marginLeft: 0 }} onPress={() => this.facebook()}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                      <Icon style={{ color: '#274f8d' }} name='logo-facebook' />
                      <Text style={{ paddingLeft: 0, paddingTop: 2, color: '#274f8d' }}>FACEBOOK</Text>
                    </View>
                  </Button>
                </View>
              )}


              {renderIf(language == 'en')(
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30, marginBottom: 30 }}>
                  <TouchableOpacity onPress={() => this.register()}>
                    <Text style={{ fontSize: 18, color: '#FF5B00', fontWeight: 'bold' }}>  SignUp</Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, color: '#4A6673', fontWeight: '100' }}>  Or  </Text>
                  <TouchableOpacity onPress={() => this.forgotPassword('english')}>
                    <Text style={{ fontSize: 18, color: '#555', fontWeight: 'bold' }}>Forgot Password ?  </Text>
                  </TouchableOpacity>
                </View>
              )}

              {renderIf(language == 'ar')(
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30, marginBottom: 30 }}>
                  <TouchableOpacity onPress={() => this.register()}>
                    <Text style={{ fontSize: 18, color: '#FF5B00', fontWeight: 'bold' }}>  تسجيل  </Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, color: '#4A6673', fontWeight: 'bold' }}> أو </Text>
                  <TouchableOpacity onPress={() => this.forgotPassword('arbic')}>
                    <Text style={{ fontSize: 18, color: '#555', fontWeight: 'bold' }}>   فقدان كلمة السر       </Text>
                  </TouchableOpacity>

                </View>
              )}

            </View>
            <Loader visible={isLoading} />
            {/* {(prevError !== error) ? this.dataNotFound() : console.log('previous error')} */}
          </Content>
        </Container>
      </LinearGradient>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  sign_in: PropTypes.bool,
  error: PropTypes.bool,
  responseCode: PropTypes.number
}

const mapStateToProps = (state) => ({
  language: state.auth.lang,
  isLoading: state.auth.isLoading,
  sign_in: state.auth.sign_in,
  error: state.auth.error,
  responseCode: state.auth.responseCode,
  errorMsg: state.auth.errorMsg
});
const mapDispatchToProps = {
  signIn,makeErrorFalse
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  buttonText2: {
    color: '#02e3cd',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#FF5B00',
    width: width / 3 - 5,
    height: 40,
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FF5B00'
  },
  button2: {
    backgroundColor: '#ffffff',
    width: width / 3 - 5,
    height: 40,
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#02e3cd'
  },
  loginButton: {

  },
});
