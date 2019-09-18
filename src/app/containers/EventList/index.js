import React, { Component } from "react";
import {View,Text,StyleSheet,SafeAreaView,ScrollView,Image,TouchableOpacity,Dimensions} from "react-native";

const {height,width} = Dimensions.get('window');

class EventList extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>

                <View style={{flexDirection:'row',justifyContent:'space-around',borderBottomColor:'#ccc',borderBottomWidth:1,marginBottom:5}}>
                    <TouchableOpacity style={{justifyContent:'center',height:45,borderRightColor:'#ccc',borderRightWidth:0.5,width:'49.93%',alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <Image source={require('../../lib/assets/img/sort.png')} style={{height:13,width:15,marginTop:3,marginRight:10,resizeMode:'stretch'}} />
                            </View>
                            <View><Text style={{color:'#333',fontWeight:'500'}}>SORT BY</Text></View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent:'center',height:45,borderLeftColor:'#ccc',borderLeftWidth:0.5,width:'49.93%',alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <Image source={require('../../lib/assets/img/filter.png')} style={{height:15,width:15,marginTop:3,marginRight:10}} />
                            </View>
                            <View><Text style={{color:'#333',fontWeight:'500'}}>FILTER BY</Text></View>
                        </View>
                    </TouchableOpacity>
                </View>

                <ScrollView>            

                    <View style={{marginHorizontal:10,marginBottom:5}}>
                        <View style={{elevation:1,marginTop:10,borderTopWidth:5,borderColor:'#02b19f',borderBottomLeftRadius:5,borderBottomRightRadius:5,paddingBottom:10}}>
                            <View style={{height:width/3,width:width-20,}}>
                                <Image source={require('../../lib/assets/img/house.jpg')} style={{flex:1,width:null,height:null,resizeMode:'cover'}} />
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10,}}>
                                <View style={{width:'55%'}}>
                                    <View><Text numberOfLines={1} style={{fontSize:18,marginTop:10,fontWeight:'500',color:'#02b19f'}}>Lorem ipsum dolor sit</Text></View>
                                    <View style={{flexDirection:'row',paddingRight:10}}>
                                        <View>
                                            <Image source={require('../../lib/assets/img/build.png')} style={{height:20,width:20,marginTop:10, }} />
                                        </View>
                                        <View>
                                            <Text numberOfLines={1} style={{fontSize:14,marginTop:10,paddingHorizontal:10}}>Lorem ipsum dolor sit</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <View>
                                            <Image source={require('../../lib/assets/img/map.png')} style={{height:20,width:20,marginTop:10, }} />
                                        </View>
                                        <View>
                                            <Text numberOfLines={2} style={{fontSize:14,marginTop:10,paddingHorizontal:10,}}>3A-35, NIT Faridabad, 121001, Near DAV College</Text>
                                        </View>
                                    </View>
                                </View>
                                <View >
                                    <View><Text style={{fontSize:16,marginTop:10,fontWeight:'500',color:'#333'}}>$50 <Text style={{fontSize:14,fontWeight:'400'}}> Onwords</Text></Text></View>
                                    <View><Text style={{fontSize:14,marginTop:10,fontWeight:'500',color:'#333'}}>19 Apr, 10PM</Text></View>
                                    <View style={{marginTop:15}}><TouchableOpacity onPress={()=> this.props.navigation.navigate('EventDetails')}><Text style={styles.btn}>View Details</Text></TouchableOpacity></View>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={{marginHorizontal:10,marginBottom:5}}>
                        <View style={{elevation:1,marginTop:10,borderTopWidth:5,borderColor:'#02b19f',borderBottomLeftRadius:5,borderBottomRightRadius:5,paddingBottom:10}}>
                            <View style={{height:width/3,width:width-20,}}>
                                <Image source={require('../../lib/assets/img/bannerz.png')} style={{flex:1,width:null,height:null,resizeMode:'cover'}} />
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10,}}>
                                <View style={{width:'55%'}}>
                                    <View><Text numberOfLines={1} style={{fontSize:18,marginTop:10,fontWeight:'500',color:'#02b19f'}}>Lorem ipsum dolor sit</Text></View>
                                    <View style={{flexDirection:'row',paddingRight:10}}>
                                        <View>
                                            <Image source={require('../../lib/assets/img/build.png')} style={{height:20,width:20,marginTop:10, }} />
                                        </View>
                                        <View>
                                            <Text numberOfLines={1} style={{fontSize:14,marginTop:10,paddingHorizontal:10}}>Lorem ipsum dolor sit</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <View>
                                            <Image source={require('../../lib/assets/img/map.png')} style={{height:20,width:20,marginTop:10, }} />
                                        </View>
                                        <View>
                                            <Text numberOfLines={2} style={{fontSize:14,marginTop:10,paddingHorizontal:10,}}>3A-35, NIT Faridabad, 121001, Near DAV College</Text>
                                        </View>
                                    </View>
                                </View>
                                <View >
                                    <View><Text style={{fontSize:16,marginTop:10,fontWeight:'500',color:'#333'}}>$50 <Text style={{fontSize:14,fontWeight:'400'}}> Onwords</Text></Text></View>
                                    <View><Text style={{fontSize:14,marginTop:10,fontWeight:'500',color:'#333'}}>19 Apr, 10PM</Text></View>
                                    <View style={{marginTop:15}}><TouchableOpacity onPress={()=> this.props.navigation.navigate('EventDetails')}><Text style={styles.btn}>View Details</Text></TouchableOpacity></View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{marginHorizontal:10,marginBottom:5}}>
                        <View style={{elevation:1,marginTop:10,borderTopWidth:5,borderColor:'#02b19f',borderBottomLeftRadius:5,borderBottomRightRadius:5,paddingBottom:10}}>
                            <View style={{height:width/3,width:width-20,}}>
                                <Image source={require('../../lib/assets/img/party.jpg')} style={{flex:1,width:null,height:null,resizeMode:'cover'}} />
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10,}}>
                                <View style={{width:'55%'}}>
                                    <View><Text numberOfLines={1} style={{fontSize:18,marginTop:10,fontWeight:'500',color:'#02b19f'}}>Lorem ipsum dolor sit</Text></View>
                                    <View style={{flexDirection:'row',paddingRight:10}}>
                                        <View>
                                            <Image source={require('../../lib/assets/img/build.png')} style={{height:20,width:20,marginTop:10, }} />
                                        </View>
                                        <View>
                                            <Text numberOfLines={1} style={{fontSize:14,marginTop:10,paddingHorizontal:10}}>Lorem ipsum dolor sit</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <View>
                                            <Image source={require('../../lib/assets/img/map.png')} style={{height:20,width:20,marginTop:10, }} />
                                        </View>
                                        <View>
                                            <Text numberOfLines={2} style={{fontSize:14,marginTop:10,paddingHorizontal:10,}}>3A-35, NIT Faridabad, 121001, Near DAV College</Text>
                                        </View>
                                    </View>
                                </View>
                                <View >
                                    <View><Text style={{fontSize:16,marginTop:10,fontWeight:'500',color:'#333'}}>$50 <Text style={{fontSize:14,fontWeight:'400'}}> Onwords</Text></Text></View>
                                    <View><Text style={{fontSize:14,marginTop:10,fontWeight:'500',color:'#333'}}>19 Apr, 10PM</Text></View>
                                    <View style={{marginTop:15}}><TouchableOpacity onPress={()=> this.props.navigation.navigate('EventDetails')}><Text style={styles.btn}>View Details</Text></TouchableOpacity></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
export default EventList;

const styles = StyleSheet.create({
    container: {flex: 1,paddingBottom:10},
    btn: {backgroundColor:'#FF5B00',paddingHorizontal:10,paddingVertical:7,fontSize:14,color:'#fff',width:100,textAlign:'center',borderRadius:5},

});