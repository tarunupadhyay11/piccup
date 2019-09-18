import React, { Component } from "react";
import {View,Text,StyleSheet,SafeAreaView,ScrollView,Image,TouchableOpacity,Dimensions} from "react-native";

const {height,width} = Dimensions.get('window');

class LockeRooms extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}> 

                <ScrollView>            

                    <View style={{marginHorizontal:20,marginBottom:5}}>
                        <View style={{width:width-width/3,marginTop:40,borderWidth:0.5,borderColor:'grey',borderRadius:10,paddingBottom:10,backgroundColor:'#f5f5f5'}}>
                            <View style={{marginHorizontal:10,}}>
                                <Text numberOfLines={1} style={{fontSize:18,paddingVertical:5 ,fontWeight:'500',color:'#02b19f'}}>Ravi Panchal</Text>
                            </View>
                            <View style={{width:width-width/3,height:width-width/2-30,}}>
                                <Image source={require('../../lib/assets/img/balloon.jpg')} style={{flex:1,width:null,height:null,resizeMode:'cover'}} />
                            </View>
                            <View style={{marginHorizontal:10,}}>                              
                                <Text style={{fontSize:16,paddingVertical:5,fontWeight:'400',color:'#333'}}>Id consequat occaecat commodo nostrud velit dolore non.</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{marginHorizontal:20,marginBottom:5,alignItems:'flex-end',}}>
                        <View style={{width:width-width/3,marginTop:10,borderWidth:0.5,borderColor:'grey',borderRadius:10,paddingBottom:10,backgroundColor:'#f5f5f5'}}>
                            <View style={{marginHorizontal:10,}}>
                                <Text numberOfLines={1} style={{fontSize:18,paddingVertical:5 ,fontWeight:'500',color:'#02b19f'}}>Aakash PHP</Text>
                            </View>
                            <View style={{width:width-width/3,height:width-width/2-30,}}>
                                <Image source={require('../../lib/assets/img/chat.png')} style={{flex:1,width:null,height:null,resizeMode:'cover'}} />
                            </View>
                            <View style={{marginHorizontal:10,}}>                              
                                <Text style={{fontSize:16,paddingVertical:5,fontWeight:'400',color:'#333'}}>Id consequat occaecat commodo nostrud velit dolore non.</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{marginHorizontal:20,marginBottom:5}}>
                        <View style={{width:width-width/3,marginTop:10,borderWidth:0.5,borderColor:'grey',borderRadius:10,paddingBottom:10,backgroundColor:'#f5f5f5'}}>
                            <View style={{marginHorizontal:10,}}>
                                <Text numberOfLines={1} style={{fontSize:18,paddingVertical:5 ,fontWeight:'500',color:'#02b19f'}}>Yogesh React-native</Text>
                            </View>
                             
                            <View style={{marginHorizontal:10,}}>
                                <Text style={{fontSize:16,paddingVertical:5,fontWeight:'400',color:'#333'}}>Id consequat occaecat commodo nostrud velit dolore non. lorem ipsum dolor sit.</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{marginHorizontal:20,marginBottom:5,alignItems:'flex-end',}}>
                        <View style={{width:width-width/3,marginTop:10,borderWidth:0.5,borderColor:'grey',borderRadius:10,paddingBottom:10,backgroundColor:'#f5f5f5'}}>
                            <View style={{marginHorizontal:10,}}>
                                <Text numberOfLines={1} style={{fontSize:18,paddingVertical:5 ,fontWeight:'500',color:'#02b19f'}}>Om Prakash</Text>
                            </View>
                            <View style={{width:width-width/3,height:width-width/2-30,}}>
                                <Image source={require('../../lib/assets/img/building.png')} style={{flex:1,width:null,height:null,resizeMode:'cover'}} />
                            </View>
                            <View style={{marginHorizontal:10,}}>                              
                                <Text style={{fontSize:16,paddingVertical:5,fontWeight:'400',color:'#333'}}>Id consequat occaecat commodo nostrud velit dolore non.</Text>
                            </View>
                        </View>
                    </View>

                     
                </ScrollView>
            </SafeAreaView>
        );
    }
}
export default LockeRooms;

const styles = StyleSheet.create({
    container: {flex: 1,paddingBottom:10},
    btn: {backgroundColor:'#FF5B00',paddingHorizontal:10,paddingVertical:7,fontSize:14,color:'#fff',width:100,textAlign:'center',borderRadius:5},

});