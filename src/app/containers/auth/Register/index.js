import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Alert, PermissionsAndroid, Modal } from 'react-native';
import {
  Form, Item, Input, Container, Content, Button, Icon, Card, CardItem, CheckBox, Radio, Toast
} from 'native-base';
import Loader from '../../../lib/assets/misc/components/Loader'
import { StackActions, NavigationActions } from 'react-navigation';

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import renderIf from 'render-if';

// redux import 

import {
  signIn, signUp, makeErrorFalse
} from '../../../redux/actions/action-creator';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// redux impot finish


import BasicUrl from '../../../utils/BasicUrl';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import LinearGradient from 'react-native-linear-gradient';


const { width, height } = Dimensions.get('window');


const resetAction = StackActions.reset({
  index: 1,
  actions: [
    NavigationActions.navigate({ routeName: 'before_login' }),
    NavigationActions.navigate({ routeName: 'login' }),
  ],
});


class Register extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    user: true, professional: false, vender: false, robot: false, termsAndCondition: false, rememberMe: false,
    radioButtonSelected: '', randomString: '', EnterCAPTCHA: '', name: '', nickName: '', emailID: '', country: '',
    mobileNumber: '', password: '', confirmPassword: '', submitCollectionData: {},
    doc_freelance_uri: '', doc_freelance_type: '', doc_freelance_fileName: '', doc_data: '', freelance_exp: '', freelance_pickFile: false, companyDocuments_pickFile: false,
    companyCertifications_pickFile: false, companyBusinessCertificate_pickFile: false, companyDocuments_uri: '', companyDocuments_type: '', companyDocuments_fileName: '', companyCertifications_uri: '', companyCertifications_type: '', companyCertifications_fileName: '', companyBusinessCertificate_uri: '', companyBusinessCertificate_type: '', companyBusinessCertificate_fileName: '',
    uri: '', type: '', fileName: '', experienceeOfCompany: '', nameOfCompany: '', activeInput: false, activeInput2: false
    , activeInput3: false, activeInput4: false, activeInput5: false, error: '', sign_up: false, prevError: false, errorMsg: null,
    locationGranted: false, modalVisible: false, latitude: 0,
    longitude: 0,
    loc_error: null
  };


  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('prev state ', prevState, 'nextProps ', nextProps)
    if (nextProps.language !== prevState.language) {

      return {
        language: nextProps.language,
        sign_up: nextProps.sign_up,
        errorMsg: nextProps.errorMsg
      }
    }
    if (nextProps.sign_up !== prevState.sign_up && !nextProps.error) {
      nextProps.navigation.dispatch(resetAction);
      return {
        sign_up: nextProps.sign_up,
        // prevError:nextProps.error
      }
    }
    if (nextProps.error !== prevState.prevError) {
      alert(nextProps.errorMsg)
      nextProps.makeErrorFalse()
      return {
        prevError: nextProps.error
      }
    }

    return null;
  }

  constructor(props) {
    super(props);
    // this.dataNotFound.bind(this)
  }

  // dataNotFound = () => {
  //   const { error, responseCode, errorMsg } = this.props
  //   console.log(errorMsg)
  //   alert('Message', this.state.errorMsg, [
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


  async request_location_runtime_permission() {

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'ReactNativeCode Location Permission',
          'message': 'ReactNativeCode App needs access to your location '
        }
      )
      
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({ locationGranted: true, modalVisible: true })
        // Alert.alert("Location Permission Granted.");
        console.log(granted)
        this.getLongLat = navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log(position)
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              loc_error: null,
            });
          },
          (error) => this.setState({ loc_error: error.message }),
          { enableHighAccuracy: true, timeout: 2000, maximumAge: 100, distanceFilter: 10 },
        );


      }
      else {
        this.setState({ locationGranted: false, modalVisible: false })
        // Alert.alert("Location Permission Not Granted");

      }
    } catch (err) {
      console.warn(err)
    }
  }


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
  register = () => {

    var name = this.state.name
    var nickName = this.state.nickName
    var emailID = this.state.emailID
    var country = this.state.country
    var mobileNumber = this.state.mobileNumber
    var password = this.state.password
    var confirmPassword = this.state.confirmPassword
    var freelance_exp = this.state.freelance_exp
    var experienceeOfCompany = this.state.experienceeOfCompany
    var nameOfCompany = this.state.nameOfCompany
    var termsAndCondition = this.state.termsAndCondition
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var status = re.test(emailID);

    var pass_re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var pass_re_status = pass_re.test(password)

    var name_re = /^[a-z][a-z\s]*$/
    var name_re_status = name_re.test(name.toLowerCase())

    var co_re_status = name_re.test(country.toLowerCase())

    var nick_name_re = /^[a-z][a-z\s]*$/
    var nick_name_re_status = nick_name_re.test(nickName.toLowerCase())

    var phone_re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    var phone_re_status = phone_re.test(mobileNumber)

    if (!name_re_status) {
      alert('Pls Enter your Name only with alphabets');
    } else if (!nick_name_re_status) {
      alert('Pls Enter your Nick Name only with alphabets');
    } else if (!status) {
      alert('Please enter valid email address');
    } else if (!co_re_status) {
      alert('Pls Enter your Country');
    } else if (!phone_re_status) {
      alert('Pls Enter your Mobile Number only in 10 numeric');
    } else if (!pass_re_status) {
      alert('Pls enter a strong  password of 6 to 16 chars include at least one char and one number');
    } else if (password != confirmPassword) {
      alert('Password and Confirm Password should be same');
    } else if (this.state.randomString != this.state.EnterCAPTCHA) {
      alert('Enter the text as shown in CAPTCHA image');
      this.componentDidMount();
    } else if (!termsAndCondition) {
      alert('Pls accept Terms and Conditions');
    } else {
      // var url;

      // if(this.state.user){
      //         url=BasicUrl.bsaeUrl()+"user_register";
      // }else if(this.state.professional){
      //         url=BasicUrl.bsaeUrl()+"professional-add.php";
      // }else if(this.state.vender){
      //         url=BasicUrl.bsaeUrl()+"vender-add.php";
      // }

      const data = new FormData();

      data.append('name', name)
      data.append('nick_name', nickName)
      data.append('email', emailID)
      data.append('pass', password)
      data.append('phone', mobileNumber)
      data.append('country', country)

      if (this.state.radioButtonSelected == 'freelance') {
        data.append('type', 0)
        data.append('f_exp', freelance_exp)
        data.append('file', {
          uri: this.state.doc_freelance_uri,
          type: this.state.doc_freelance_type,
          name: this.state.doc_freelance_fileName,
        });
      }
      if (this.state.radioButtonSelected == 'company') {
        data.append('type', 1)
        data.append('company_name', nameOfCompany)
        data.append('company_experience', experienceeOfCompany)
        data.append('file1', {
          uri: this.state.companyDocuments_uri,
          type: this.state.companyDocuments_type,
          name: this.state.companyDocuments_fileName,
        });
        data.append('file2', {
          uri: this.state.companyCertifications_uri,
          type: this.state.companyCertifications_type,
          name: this.state.companyCertifications_fileName,
        });
        data.append('file3', {
          uri: this.state.companyBusinessCertificate_uri,
          type: this.state.companyBusinessCertificate_type,
          name: this.state.companyBusinessCertificate_fileName,
        });
      }
      let type;
      if (this.state.user) {
        type = "user"
      } else if (this.state.professional) {
        type = "professional"
      } else if (this.state.vender) {
        type = "vender"
      }
      data.append('user_type', type)
      console.log('in signup index', type);       

      this.props.signUp(data, type)
      // fetch(url, {
      //     method: 'POST',
      //     //headers: {'Content-Type': 'multipart/form-data',},
      //     body:data
      // })
      //   .then((response) => response.json())
      //   .then((responseData) => { alert(responseData);
      //           console.warn('responseeeeeeeeee',responseData);
      //           if(responseData.msg=='Registration Successfull'){
      //             this.componentDidMount()
      //             this.props.navigation.navigate('login',{
      //             msg:'Registration Successfull'
      //           });
      //          }
      //   })
      //   .catch((error) => {
      //       console.log("Error");
      //           console.warn('Errorrrrrrrrrrrrrrr',error);

      //   });
    }//else end
  }

  facebook() {

  }
  google() {

  }

  pickFile = (file) => {
    if (file == 'freelanceDocuments') {
      var v = DocumentPicker.show({
        filetype: [DocumentPickerUtil.allFiles()],
      }, (error, res) => {
        if (res) {
          this.setState({
            doc_freelance_uri: res.uri,
            doc_freelance_type: res.type,
            doc_freelance_fileName: res.fileName,
            // doc_data:res.data
          }, () => {
            if (this.state.doc_freelance_uri) {
              this.setState({
                freelance_pickFile: true,
              });
            }
          });
        } else {
          alert('Select the file');
        }
      }
      );

    }
    if (file == 'companyDocuments') {
      DocumentPicker.show({
        filetype: [DocumentPickerUtil.allFiles()],
      }, (error, res) => {
        if (res) {
          this.setState({
            companyDocuments_uri: res.uri,
            companyDocuments_type: res.type,
            companyDocuments_fileName: res.fileName,
          }, () => {
            if (this.state.companyDocuments_fileName) {
              this.setState({ companyDocuments_pickFile: true });
            }
          });
        } else {
          alert('Select the file');
        }
      }
      );

    }
    if (file == 'companyCertifications') {
      DocumentPicker.show({
        filetype: [DocumentPickerUtil.allFiles()],
      }, (error, res) => {
        if (res) {
          this.setState({
            companyCertifications_uri: res.uri,
            companyCertifications_type: res.type,
            companyCertifications_fileName: res.fileName,
            // doc_data:res.data
          }, () => {
            if (this.state.companyCertifications_fileName) {
              this.setState({ companyCertifications_pickFile: true });
            }
          });
        } else {
          alert('Select the file');
        }
      }
      );
    }
    if (file == 'companyBusinessCertificate') {
      DocumentPicker.show({
        filetype: [DocumentPickerUtil.allFiles()],
      }, (error, res) => {
        if (res) {
          this.setState({
            companyBusinessCertificate_uri: res.uri,
            companyBusinessCertificate_type: res.type,
            companyBusinessCertificate_fileName: res.fileName,
            // doc_data:res.data
          }, () => {
            if (this.state.companyBusinessCertificate_uri) {
              this.setState({ companyBusinessCertificate_pickFile: true });
            }
          });
        } else {
          alert('Select the file');
        }
      }
      );
    }
  }
  randomString() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = 4;
    var randomstring = '';

    for (var i = 0; i < string_length; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    this.setState({ randomString: randomstring });
  }
  componentDidMount() {
    this.randomString();
    this.setState({ EnterCAPTCHA: '' });
    this.setState({
      name: '',
      nickName: '',
      emailID: '',
      country: '',
      mobileNumber: '',
      password: '',
      confirmPassword: '',
      freelance_exp: '',
      experienceeOfCompany: '',
      nameOfCompany: '',
      termsAndCondition: false
    })
  }
  onChangedCAPTCHA(entered_captcha) {
    this.setState({ EnterCAPTCHA: entered_captcha });
  }
  homePage() {
    this.props.navigation.navigate('home');
  }
  arabicInput() {
    this.setState({ activeInput: true });
  }
  arabicInput2() {
    this.setState({ activeInput2: true });
  }
  render() {
    const { navigation, language, isLoading, error } = this.props;
    const { prevError } = this.state
    // const language = navigation.getParam('language', 'english');
    return (
      <LinearGradient colors={['#cdfef9', '#ffffff', '#fad9d1']} style={{ flex: 1 }}>
        <Container style={{ backgroundColor: 'transparent' }}>
          <Content>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
              <Image style={{ width: 100, height: 100 }}
                source={require('../../../lib/assets/img/logo.png')} />
            </View>
            {renderIf(language == 'en')(
              <View style={{ marginTop: 30, marginLeft: 30, marginRight: 30, flexDirection: 'row', justifyContent: 'center' }}>
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
                    <Text style={styles.buttonText}>Vendor</Text>
                  </Button>
                )}
                {renderIf(!this.state.vender)(
                  <Button style={styles.button2} onPress={() => this.vendor()}>
                    <Text style={styles.buttonText2}>Vendor</Text>
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
            <View style={{ marginLeft: 40, marginRight: 40, marginTop: 10 }}>
              <Form onSubmit={this.onSubmit}>
                {renderIf(language == 'en')(
                  <Item rounded bordered style={styles.itemOfForm}>
                    <Icon style={{ marginLeft: 10, color: 'grey' }} name='ios-contact' />
                    <Input
                      placeholder='Full Name'
                      onChangeText={(value) => { this.setState({ 'name': value }) }}
                      value={this.state.name}
                    />
                  </Item>
                )}
                {renderIf(language == 'ar')(
                  <Item rounded bordered style={styles.itemOfForm}>
                    {renderIf(!this.state.activeInput)(
                      <Input
                        placeholder='الإسم الكامل'
                        onFocus={() => { this.setState({ activeInput: true }) }}
                      />
                    )}
                    {renderIf(this.state.activeInput)(
                      <Input
                        onChangeText={(value) => { this.setState({ 'name': value }) }}
                        value={this.state.name}
                        style={{ textAlign: 'right' }}
                      />
                    )}
                    <Icon style={{ marginRight: 10, color: 'grey' }} name='ios-contact' />
                  </Item>
                )}
                {renderIf(language == 'en')(
                  <Item rounded bordered style={styles.itemOfForm}>
                    <Icon style={{ marginLeft: 10, color: 'grey' }} name='ios-contact' />
                    <Input
                      placeholder='Nick Name'
                      onChangeText={(value) => { this.setState({ 'nickName': value }) }}
                      value={this.state.nickName}
                    />
                  </Item>
                )}
                {renderIf(language == 'ar')(
                  <Item rounded bordered style={styles.itemOfForm}>
                    {renderIf(!this.state.activeInput2)(
                      <Input
                        placeholder='الاسم المستعار'
                        onFocus={() => { this.setState({ activeInput2: true }) }}
                      />
                    )}
                    {renderIf(this.state.activeInput2)(
                      <Input
                        onChangeText={(value) => { this.setState({ 'nickName': value }) }}
                        value={this.state.nickName}
                        style={{ textAlign: 'right' }}
                      />
                    )}

                    <Icon style={{ marginRight: 10, color: 'grey' }} name='ios-contact' />
                  </Item>
                )}

                {renderIf(language == 'en')(
                  <Item rounded bordered style={styles.itemOfForm}>
                    <Icon style={{ marginLeft: 10, color: 'grey' }} name='ios-mail' />
                    <Input
                      placeholder='Email ID'
                      onChangeText={(value) => { this.setState({ 'emailID': value }) }}
                      value={this.state.emailID}
                      keyboardType="email-address"
                    />
                  </Item>
                )}
                {renderIf(language == 'ar')(
                  <Item rounded bordered style={styles.itemOfForm}>
                    {renderIf(!this.state.activeInput3)(
                      <Input
                        placeholder='البريد الالكتروني'
                        onFocus={() => { this.setState({ activeInput3: true }) }}
                      />
                    )}
                    {renderIf(this.state.activeInput3)(
                      <Input
                        onChangeText={(value) => { this.setState({ 'emailID': value }) }}
                        value={this.state.emailID}
                        style={{ textAlign: 'right' }}
                        keyboardType="email-address"
                      />
                    )}
                    <Icon style={{ marginRight: 10, color: 'grey' }} name='ios-mail' />
                  </Item>
                )}

                {renderIf(language == 'en')(
                  <Item rounded bordered style={styles.itemOfForm}>
                    <Image style={{ marginLeft: 10, width: 25, height: 25 }}
                      source={require('../../../lib/assets/img/country.png')} />
                    <Input
                      placeholder='Country'
                      onChangeText={(value) => { this.setState({ 'country': value }) }}
                      value={this.state.country}
                      onFocus={async () => { await this.request_location_runtime_permission() }}
                    />
                  </Item>
                )}
                {renderIf(language == 'ar')(
                  <Item rounded bordered style={styles.itemOfForm}>
                    {renderIf(!this.state.activeInput4)(
                      <Input
                        placeholder='البلد'
                        onFocus={() => { this.setState({ activeInput4: true }) }}
                      />
                    )}
                    {renderIf(this.state.activeInput4)(
                      <Input
                        onChangeText={(value) => { this.setState({ 'country': value }) }}
                        value={this.state.country}
                        style={{ textAlign: 'right' }}
                      />
                    )}
                    <Image style={{ marginRight: 10, width: 25, height: 25 }}
                      source={require('../../../lib/assets/img/country.png')} />
                  </Item>
                )}

                {renderIf(language == 'en')(
                  <Item rounded bordered style={styles.itemOfForm}>
                    <Icon style={{ marginLeft: 10, color: 'grey' }} name='ios-phone-portrait' />
                    <Input
                      placeholder='Phone Number'
                      keyboardType='numeric'
                      onChangeText={(value) => { this.setState({ 'mobileNumber': value }) }}
                      value={this.state.mobileNumber}
                    />
                  </Item>
                )}
                {renderIf(language == 'ar')(
                  <Item rounded bordered style={styles.itemOfForm}>
                    {renderIf(!this.state.activeInput5)(
                      <Input
                        placeholder='رقم الهاتف'
                        onFocus={() => { this.setState({ activeInput5: true }) }}
                      />
                    )}
                    {renderIf(this.state.activeInput5)(
                      <Input
                        keyboardType='numeric'
                        onChangeText={(value) => { this.setState({ 'mobileNumber': value }) }}
                        value={this.state.mobileNumber}
                        style={{ textAlign: 'right' }}
                      />
                    )}
                    <Icon style={{ marginRight: 10, color: 'grey' }} name='ios-phone-portrait' />
                  </Item>
                )}

                {renderIf(this.state.professional && language == 'en')(
                  <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Working Details :</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                      <Radio onPress={() => this.setState({ radioButtonSelected: 'freelance' })}
                        selected={this.state.radioButtonSelected == 'freelance'}
                      />
                      <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>Person</Text>
                    </View>
                    {renderIf(this.state.radioButtonSelected == 'freelance')(
                      <View>
                        <Item rounded bordered style={styles.itemOfForm}>
                          <Image style={{ marginLeft: 10, width: 25, height: 25 }}
                            source={require('../../../lib/assets/img/experience.png')} />
                          <Input
                            placeholder='Experience in Years'
                            keyboardType='numeric'
                            onChangeText={(value) => { this.setState({ 'freelance_exp': value }) }}
                            value={this.state.freelance_exp}
                          />
                        </Item>
                        <Item rounded bordered style={styles.itemOfForm}>
                          <Image style={{ marginLeft: 10, width: 20, height: 20 }}
                            source={require('../../../lib/assets/img/Upload.jpeg')} />
                          {renderIf(!this.state.freelance_pickFile)(
                            <View style={{ height: 31, width: width - 130, marginRight: 5, justifyContent: 'center' }} >
                              <TouchableOpacity onPress={() => this.pickFile('freelanceDocuments')}>
                                <Text style={{ marginLeft: 20 }}>Upload Documents</Text>
                              </TouchableOpacity>
                            </View>
                          )}
                          {renderIf(this.state.freelance_pickFile)(
                            <Input
                              value={this.state.doc_freelance_fileName}
                              editable={false}
                            />
                          )}
                        </Item>
                      </View>
                    )}
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                      <Radio onPress={() => this.setState({ radioButtonSelected: 'company' })}
                        selected={this.state.radioButtonSelected == 'company'}
                      />
                      <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>Company :</Text>
                    </View>

                    {renderIf(this.state.radioButtonSelected == 'company')(
                      <View>
                        <Item rounded bordered style={styles.itemOfForm}>
                          <Image style={{ marginLeft: 10, width: 25, height: 25 }}
                            source={require('../../../lib/assets/img/CompanyName.png')} />
                          <Input
                            placeholder='Company name'
                            onChangeText={(value) => { this.setState({ 'nameOfCompany': value }) }}
                            value={this.state.nameOfCompany}
                          />
                        </Item>
                        <Item rounded bordered style={styles.itemOfForm}>
                          <Image style={{ marginLeft: 10, width: 25, height: 25 }}
                            source={require('../../../lib/assets/img/experience.png')} />
                          <Input
                            placeholder='Experience in Years'
                            keyboardType='numeric'
                            onChangeText={(value) => { this.setState({ 'experienceeOfCompany': value }) }}
                            value={this.state.experienceeOfCompany}
                          />
                        </Item>
                        <Item rounded bordered style={styles.itemOfForm}>
                          <Image style={{ marginLeft: 10, width: 20, height: 20 }}
                            source={require('../../../lib/assets/img/Upload.jpeg')} />
                          {renderIf(!this.state.companyDocuments_pickFile)(
                            <View style={{ height: 31, width: width - 130, marginRight: 5, justifyContent: 'center' }} >
                              <TouchableOpacity onPress={() => this.pickFile('companyDocuments')}>
                                <Text style={{ marginLeft: 20 }}>Upload Documents</Text>
                              </TouchableOpacity>
                            </View>
                          )}
                          {renderIf(this.state.companyDocuments_pickFile)(
                            <Input value={this.state.companyDocuments_fileName} editable={false} />
                          )}
                        </Item>
                        <Item rounded bordered style={styles.itemOfForm}>
                          <Image style={{ marginLeft: 10, width: 20, height: 20 }}
                            source={require('../../../lib/assets/img/Upload.jpeg')} />
                          {renderIf(!this.state.companyCertifications_pickFile)(
                            <View style={{ height: 31, width: width - 130, marginLeft: 5, justifyContent: 'center' }} >
                              <TouchableOpacity onPress={() => this.pickFile('companyCertifications')}>
                                <Text style={{ marginLeft: 20 }}>Certificates</Text>
                              </TouchableOpacity>
                            </View>
                          )}
                          {renderIf(this.state.companyCertifications_pickFile)(
                            <Input value={this.state.companyCertifications_fileName} editable={false} />
                          )}
                        </Item>
                        <Item rounded bordered style={styles.itemOfForm}>
                          <Image style={{ marginLeft: 10, width: 20, height: 20 }}
                            source={require('../../../lib/assets/img/Upload.jpeg')} />
                          {renderIf(!this.state.companyBusinessCertificate_pickFile)(
                            <View style={{ height: 31, width: width - 130, marginLeft: 5, justifyContent: 'center' }} >
                              <TouchableOpacity onPress={() => this.pickFile('companyBusinessCertificate')}>
                                <Text style={{ marginLeft: 10 }}>Proof of Business Certificate</Text>
                              </TouchableOpacity>
                            </View>
                          )}
                          {renderIf(this.state.companyBusinessCertificate_pickFile)(
                            <Input value={this.state.companyBusinessCertificate_fileName} editable={false} />
                          )}
                        </Item>
                      </View>
                    )}
                  </View>
                )}
                {renderIf(this.state.professional && language == 'ar')(
                  <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 'auto' }}>: تفاصيل العمل </Text>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 'auto' }}>
                      <Text style={{ marginLeft: 10, fontWeight: 'bold', marginRight: 10 }}>اعمال حرة</Text>
                      <Radio onPress={() => this.setState({ radioButtonSelected: 'freelance' })}
                        selected={this.state.radioButtonSelected == 'freelance'}
                      />
                    </View>
                    {renderIf(this.state.radioButtonSelected == 'freelance')(
                      <View>
                        <Item rounded bordered style={styles.itemOfForm}>
                          <Input
                            placeholder='سنوات الخبرة'
                            keyboardType='numeric'
                            onChangeText={(value) => { this.setState({ 'freelance_exp': value }) }}
                            value={this.state.freelance_exp}
                            style={{ textAlign: 'right' }}
                          />
                          <Image style={{ marginRight: 10, width: 25, height: 25 }}
                            source={require('../../../lib/assets/img/experience.png')} />
                        </Item>
                        <Item rounded bordered style={styles.itemOfForm}>
                          {renderIf(!this.state.freelance_pickFile)(
                            <View style={{ height: 31, width: width - 130, marginLeft: 5, justifyContent: 'center' }} >
                              <TouchableOpacity onPress={() => this.pickFile('freelanceDocuments')}>
                                <Text style={{ marginLeft: 'auto' }}>رفع المستندات</Text>
                              </TouchableOpacity>
                            </View>
                          )}
                          {renderIf(this.state.freelance_pickFile)(
                            <Input
                              value={this.state.doc_freelance_fileName}
                              editable={false}
                              style={{ textAlign: 'right' }}
                            />
                          )}
                          <View style={{ marginLeft: 'auto', marginRight: 10 }}>
                            <Image style={{ width: 20, height: 20 }}
                              source={require('../../../lib/assets/img/Upload.jpeg')} />
                          </View>
                        </Item>
                      </View>
                    )}
                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 'auto' }}>
                      <Text style={{ marginLeft: 10, fontWeight: 'bold', marginRight: 10 }}>موظف في</Text>
                      <Radio onPress={() => this.setState({ radioButtonSelected: 'company' })}
                        selected={this.state.radioButtonSelected == 'company'}
                      />
                    </View>
                    {renderIf(this.state.radioButtonSelected == 'company')(
                      <View>
                        <Item rounded bordered style={styles.itemOfForm}>
                          <Input
                            placeholder='اسم الشركة'
                            onChangeText={(value) => { this.setState({ 'nameOfCompany': value }) }}
                            value={this.state.nameOfCompany}
                            style={{ textAlign: 'right' }}
                          />
                          <Image style={{ marginRight: 10, width: 25, height: 25 }}
                            source={require('../../../lib/assets/img/CompanyName.png')} />
                        </Item>
                        <Item rounded bordered style={styles.itemOfForm}>
                          <Input
                            placeholder='سنوات الخبرة'
                            keyboardType='numeric'
                            onChangeText={(value) => { this.setState({ 'experienceeOfCompany': value }) }}
                            value={this.state.experienceeOfCompany}
                            style={{ textAlign: 'right' }}
                          />
                          <Image style={{ marginRight: 10, width: 25, height: 25 }}
                            source={require('../../../lib/assets/img/experience.png')} />
                        </Item>
                        <Item rounded bordered style={styles.itemOfForm}>
                          {renderIf(!this.state.companyDocuments_pickFile)(
                            <View style={{ height: 31, width: width - 130, marginLeft: 5, justifyContent: 'center' }} >
                              <TouchableOpacity onPress={() => this.pickFile('companyDocuments')}>
                                <Text style={{ marginLeft: 'auto' }}>رفع المستندات</Text>
                              </TouchableOpacity>
                            </View>
                          )}
                          {renderIf(this.state.companyDocuments_pickFile)(
                            <Input value={this.state.companyDocuments_fileName} editable={false} style={{ textAlign: 'right' }} />
                          )}
                          <View style={{ marginLeft: 'auto', marginRight: 10 }}>
                            <Image style={{ width: 20, height: 20 }}
                              source={require('../../../lib/assets/img/Upload.jpeg')} />
                          </View>
                        </Item>
                        <Item rounded bordered style={styles.itemOfForm}>
                          {renderIf(!this.state.companyCertifications_pickFile)(
                            <View style={{ height: 31, width: width - 130, marginLeft: 5, justifyContent: 'center' }} >
                              <TouchableOpacity onPress={() => this.pickFile('companyCertifications')}>
                                <Text style={{ marginLeft: 'auto' }}>شهادات</Text>
                              </TouchableOpacity>
                            </View>
                          )}
                          {renderIf(this.state.companyCertifications_pickFile)(
                            <Input value={this.state.companyCertifications_fileName} editable={false} style={{ textAlign: 'right' }} />
                          )}
                          <View style={{ marginLeft: 'auto', marginRight: 10 }}>
                            <Image style={{ width: 20, height: 20 }}
                              source={require('../../../lib/assets/img/Upload.jpeg')} />
                          </View>
                        </Item>
                        <Item rounded bordered style={styles.itemOfForm}>
                          {renderIf(!this.state.companyBusinessCertificate_pickFile)(
                            <View style={{ height: 31, width: width - 130, marginLeft: 5, justifyContent: 'center' }} >
                              <TouchableOpacity onPress={() => this.pickFile('companyBusinessCertificate')}>
                                <Text style={{ marginLeft: 'auto' }}>Proof of Business Certificate</Text>
                              </TouchableOpacity>
                            </View>
                          )}
                          {renderIf(this.state.companyBusinessCertificate_pickFile)(
                            <Input value={this.state.companyBusinessCertificate_fileName} editable={false} style={{ textAlign: 'right' }} />
                          )}
                          <View style={{ marginLeft: 'auto', marginRight: 10 }}>
                            <Image style={{ width: 20, height: 20 }}
                              source={require('../../../lib/assets/img/Upload.jpeg')} />
                          </View>
                        </Item>
                      </View>
                    )}

                  </View>
                )}
                {renderIf(language == 'en')(
                  <Item rounded bordered style={styles.itemOfForm}>
                    <Icon style={{ marginLeft: 10, color: 'grey' }} name='md-lock' />
                    <Input
                      placeholder='Password'
                      secureTextEntry={true}
                      onChangeText={(value) => { this.setState({ 'password': value }) }}
                      value={this.state.password}
                    />
                  </Item>
                )}
                {renderIf(language == 'ar')(
                  <Item rounded bordered style={styles.itemOfForm}>
                    <Input
                      placeholder='كلمة السر'
                      secureTextEntry={true}
                      label=' كلمة المرور'
                      direction='rtl'
                      onChangeText={(value) => { this.setState({ 'password': value }) }}
                      value={this.state.password}
                      style={{ textAlign: 'right' }} />
                    <Icon style={{ marginRight: 10, color: 'grey' }} name='md-lock' />
                  </Item>
                )}
                {renderIf(language == 'en')(
                  <Item rounded bordered style={styles.itemOfForm}>
                    <Icon style={{ marginLeft: 10, color: 'grey' }} name='md-unlock' />
                    <Input
                      placeholder='Confirm Password'
                      secureTextEntry={true}
                      onChangeText={(value) => { this.setState({ 'confirmPassword': value }) }}
                      value={this.state.confirmPassword}
                      style={{}}
                    />
                  </Item>
                )}
                {renderIf(language == 'ar')(
                  <Item rounded bordered style={styles.itemOfForm}>
                    <Input
                      placeholder='تأكيد كلمة السر'
                      secureTextEntry={true}
                      onChangeText={(value) => { this.setState({ 'confirmPassword': value }) }}
                      value={this.state.confirmPassword}
                      style={{ textAlign: 'right' }}
                    />
                    <Icon style={{ marginRight: 10, color: 'grey' }} name='md-unlock' />
                  </Item>
                )}
              </Form>
              {renderIf(language == 'en')(
                <View style={{ marginTop: 30, borderWidth: 1, borderColor: 'grey', flexDirection: 'row', height: 45, borderRadius: 20 }}>
                  <View style={{ backgroundColor: 'grey', width: width / 2 - 60, justifyContent: 'center', height: 43, borderBottomLeftRadius: 20, borderTopLeftRadius: 20, }}>
                    <Text style={{ marginLeft: 45, fontWeight: 'bold', fontSize: 16, color: '#ffffff' }}>{this.state.randomString}</Text>
                  </View>
                  <View style={{ width: width / 2 - 40, height: 45, borderBottomRightRadius: 20, borderTopRightRadius: 20, }}>
                    <Input
                      placeholder='Enter CAPTCHA'
                      onChangeText={(text) => this.onChangedCAPTCHA(text)}
                      value={this.state.EnterCAPTCHA}
                      maxLength={4}
                      style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}
                      textAlign={'center'}
                    />
                  </View>
                </View>
              )}
              {renderIf(language == 'ar')(
                <View style={{ marginTop: 30, borderWidth: 1, borderColor: 'grey', flexDirection: 'row', height: 45, borderRadius: 20 }}>
                  <View style={{ width: width / 2 - 40, height: 43, borderBottomLeftRadius: 20, borderTopLeftRadius: 20 }}>
                    <Input
                      placeholder='Enter CAPTCHA'
                      onChangeText={(text) => this.onChangedCAPTCHA(text)}
                      value={this.state.EnterCAPTCHA}
                      maxLength={4}
                      style={{ color: 'red', fontWeight: 'bold', fontSize: 16, textAlign: 'right' }}
                      textAlign={'center'}
                    />
                  </View>
                  <View style={{ backgroundColor: 'grey', width: width / 2 - 42, justifyContent: 'center', height: 43, borderBottomRightRadius: 20, borderTopRightRadius: 20, }}>
                    <Text style={{ marginLeft: 45, fontWeight: 'bold', fontSize: 18, color: '#ffffff' }}>{this.state.randomString}</Text>
                  </View>
                </View>
              )}
              {renderIf(language == 'en')(
                <View style={{ marginTop: 30, marginLeft: 0 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <CheckBox color="#4A6673" checked={this.state.termsAndCondition} onPress={() => this.setState({ termsAndCondition: !this.state.termsAndCondition })} />
                    <Text style={{ marginLeft: 20, fontWeight: 'bold', fontSize: 16 }}>Agree with terms and conditions</Text>
                  </View>
                </View>
              )}
              {renderIf(language == 'ar')(
                <View style={{ marginTop: 30 }}>
                  <View style={{ flexDirection: 'row', marginRight: 0, marginLeft: 'auto' }}>
                    <Text style={{ marginRight: 10, fontWeight: 'bold', fontSize: 16 }}>موافقة الأحكام و الشروط</Text>
                    <CheckBox color="#4A6673" checked={this.state.termsAndCondition} onPress={() => this.setState({ termsAndCondition: !this.state.termsAndCondition })} />
                  </View>
                </View>
              )}

              {renderIf(language == 'en')(
                <View style={{ marginTop: 30, marginBottom: 0 }}>
                  <Button style={{
                    backgroundColor: '#FF5B00', fontSize: 18, width: width - 80,
                    height: 45, justifyContent: 'center', borderRadius: 20,
                    borderWidth: 2, borderColor: '#FF5B00'
                  }} onPress={() => this.register()}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>REGISTER</Text>
                  </Button>
                </View>
              )}
              {renderIf(language == 'ar')(
                <View style={{ marginTop: 30, marginBottom: 0 }}>
                  <Button style={{
                    backgroundColor: '#FF5B00', fontSize: 18, width: width - 80,
                    height: 45, justifyContent: 'center', borderRadius: 20, borderWidth: 2,
                    borderColor: '#FF5B00'
                  }} onPress={() => this.register()}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>تسجيل</Text>
                  </Button>
                </View>
              )}


            </View>

            {renderIf(language == 'en')(
              <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30, marginBottom: 30 }}>
                <TouchableOpacity onPress={() => this.homePage()}>
                  <Text style={{ fontSize: 18, color: '#4A6673', fontWeight: 'bold' }}>Skip </Text>
                </TouchableOpacity>
              </View>
            )}
            {renderIf(language == 'ar')(
              <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30, marginBottom: 30 }}>
                <TouchableOpacity onPress={() => this.homePage()}>
                  <Text style={{ fontSize: 18, color: '#4A6673', fontWeight: 'bold' }}>تخطى </Text>
                </TouchableOpacity>
              </View>
            )}

            <Loader visible={isLoading} />
            {/* {(prevError !== error) ? this.dataNotFound.bind(this) : console.log('previous error')} */}

            {/* Modal Start */}
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                this.setState({ modalVisible: false })
              }}>
              <View style={{ flex: 1, }}>
                <View style={{ flex: 1 }}>


                  <MapView
                    style={styles.mapStyle}
                    showsUserLocation={false}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                    initialRegion={{
                      latitude: this.state.latitude,
                      longitude:this.state.longitude,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                    }}>
                    <Marker
                      coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }}
                      title={"Marker Title"}
                      description={"Marker Description Text"}
                    />
                  </MapView>
                  {/* <View style={styles.searchSection}>
                    <Icon style={styles.searchIcon} name='md-pin' size={24} />
                    <TextInput
                      style={styles.input}
                      placeholder='Enter your city'
                      placeholderTextColor='#1c2f52'
                      underlineColorAndroid='transparent'
                      autoFocus={true}
                      onChangeText={(text) => this.getCityList(text)}
                    />
                  </View> */}


                </View>
              </View>
            </Modal>
            {/* Modal finish */}

          </Content>
        </Container>
      </LinearGradient>
    );
  }
}

Register.propTypes = {
  navigation: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
  language: state.auth.lang,
  isLoading: state.auth.isLoading,
  error: state.auth.error,
  errorMsg: state.auth.errorMsg,
  responseCode: state.auth.responseCode,
  sign_up: state.auth.sign_up
});
const mapDispatchToProps = {
  signUp, makeErrorFalse
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)

const styles = StyleSheet.create({
  mapStyle: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    flex: 1, alignItems: 'stretch',
  },
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
  itemOfForm: {
    marginLeft: 0,
    marginTop: 30,
    borderColor: '#4A6673',
    borderWidth: 1,
    height: 45
  },
});
