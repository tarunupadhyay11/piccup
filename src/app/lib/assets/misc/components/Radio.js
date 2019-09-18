import React, {Component} from 'react';
import {Text, View,Image,Dimensions,TouchableOpacity,StyleSheet} from 'react-native';


import RadioForm ,{RadioButton , RadioButtonInput , RadioButtonLabel} from 'react-native-simple-radio-button';

export default componentName = (props) => {

    const {radioArray  , callback , isSelected} = props

return(
    <RadioForm
                        formHorizontal={true}
                        animation={true}
                        >
                          {radioArray.map((obj , i)=>{
                            return(
                              <RadioButton labelHorizontal={true} key={i}>
                                  <RadioButtonInput
                                      obj={obj}
                                      index={i}
                                      isSelected={isSelected === obj.value}
                                      onPress={(e)=>callback(obj.value)}
                                      borderWidth={1}
                                      buttonInnerColor={'#FF5B00'}
                                      buttonOuterColor={'#FF5B00'}
                                      buttonSize={10}
                                      buttonOuterSize={20}
                                      buttonStyle={{}}
                                      buttonWrapStyle={{marginLeft: 10}}
                                  />
                                  <RadioButtonLabel
                                      obj={obj}
                                      index={i}
                                      labelHorizontal={true}
                                      onPress={(e)=>callback(obj.value)}
                                      labelStyle={{fontSize: 20, color: '#000'}}
                                      labelWrapStyle={{marginRight: 20}}
                                  />
                              </RadioButton>)
                          })}
                        </RadioForm>

)}