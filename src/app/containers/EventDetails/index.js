import React, { Component } from "react";
import {View,Text,StyleSheet,SafeAreaView,ScrollView,Image,TouchableOpacity,Dimensions} from "react-native";

const {height,width} = Dimensions.get('window');

class EventList extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>

                <ScrollView>

                    <View style={{marginHorizontal:10,marginBottom:5}}>
                        <View style={{marginTop:10,borderTopWidth:0.5,borderTopColor:'#ccc',paddingBottom:10}}>
                            <View style={{height:width/3,width:width-20,}}>
                                <Image source={require('../../lib/assets/img/house.jpg')} style={{flex:1,width:null,height:null,resizeMode:'cover'}} />
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10,}}>
                                <View style={{width:'65%'}}>
                                    <View><Text numberOfLines={2} style={{fontSize:18,marginTop:10,fontWeight:'500',color:'#02b19f'}}>Lorem ipsum dolor sit amit</Text></View>
                                    <View><Text style={{fontSize:15,marginTop:10,fontWeight:'500',color:'#333'}}>Comedy |<Text style={{fontSize:15,fontWeight:'500'}}> English</Text></Text></View>
                                </View>
                                <View>
                                    <View><Text style={{fontSize:16,marginTop:10,fontWeight:'500',color:'#333'}}>$50 <Text style={{fontSize:16,fontWeight:'400'}}> Onwords</Text></Text></View>
                                </View>
                            </View>
                        </View>

                        <View style={{marginHorizontal:10}}>
                            <View style={{flexDirection:'row',marginVertical:5}}>
                                <View>
                                    <Image source={require('../../lib/assets/img/schedule.png')} style={{height:20,width:20,marginTop:10, }} />
                                </View>
                                <View>
                                    <Text numberOfLines={1} style={{fontSize:16,fontWeight:'500',marginTop:10,paddingHorizontal:10}}>Saturday 13th April 2019 | 10:00</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'row',marginVertical:5}}>
                                <View>
                                    <Image source={require('../../lib/assets/img/map.png')} style={{height:20,width:20,marginTop:10, }} />
                                </View>
                                <View>
                                    <Text numberOfLines={2} style={{fontSize:16,fontWeight:'500',marginTop:10,paddingHorizontal:10,}}>3A-35, NIT Faridabad, 121001, Near DAV College</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'row',marginVertical:5}}>
                                <View>
                                    <Image source={require('../../lib/assets/img/build.png')} style={{height:20,width:20,marginTop:10, }} />
                                </View>
                                <View>
                                    <Text numberOfLines={1} style={{fontSize:16,fontWeight:'500',marginTop:10,paddingHorizontal:10}}>Organizer Name / Group</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'row',marginVertical:5}}>
                                <View>
                                    <Image source={require('../../lib/assets/img/calendar.png')} style={{height:20,width:20,marginTop:10, }} />
                                </View>
                                <View>
                                    <Text numberOfLines={1} style={{fontSize:16,fontWeight:'500',marginTop:10,paddingHorizontal:10}}>Event Created :: 10th April 2019</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'row',marginVertical:5}}>
                                <View>
                                    <Image source={require('../../lib/assets/img/handshake.png')} style={{height:20,width:20,marginTop:10, }} />
                                </View>
                                <View>
                                    <Text numberOfLines={1} style={{fontSize:16,fontWeight:'500',marginTop:10,paddingHorizontal:10}}>Services: Lorem Ipsum dolor Sit</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'row',marginVertical:5}}>
                                <View>
                                    <Image source={require('../../lib/assets/img/money.png')} style={{height:20,width:20,marginTop:12, }} />
                                </View>
                                <View>
                                    <Text numberOfLines={1} style={{fontSize:16,fontWeight:'500',marginTop:10,paddingHorizontal:10}}>Price: $299</Text>
                                </View>
                            </View>

                            <View style={{flexDirection:'row',marginVertical:5,marginRight:10}}>
                                <View>
                                    <Image source={require('../../lib/assets/img/article.png')} style={{height:20,width:20,marginTop:12, }} />
                                </View>
                                <View>
                                    <Text numberOfLines={1} style={{fontSize:16,fontWeight:'500',marginTop:10,paddingHorizontal:10}}>Description:</Text>
                                    <Text style={{fontSize:15,fontWeight:'400',paddingHorizontal:10,textAlign:'justify'}}>Qui sint in est Lorem. Ea eu id velit occaecat enim veniam. Nisi dolore in officia sit. Est Lorem fugiat pariatur sunt commodo pariatur in eiusmod est tempor eu non velit. </Text>
                                </View>
                            </View>

                            <View style={{flexDirection:'row',marginVertical:5}}>
                                <View>
                                    <Image source={require('../../lib/assets/img/share.png')} style={{height:20,width:20,marginTop:12, }} />
                                </View>
                                <View>
                                    <Text numberOfLines={1} style={{fontSize:16,fontWeight:'500',marginTop:10,paddingHorizontal:10}}>Share on:</Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <Image source={require('../../lib/assets/img/facebook.png')} style={{height:40,width:40,marginTop:12,marginHorizontal:5 }} />                                    
                                    <Image source={require('../../lib/assets/img/twitter.png')} style={{height:40,width:40,marginTop:12,marginHorizontal:5 }} />                                    
                                    <Image source={require('../../lib/assets/img/instagram.png')} style={{height:40,width:40,marginTop:12,marginHorizontal:5 }} />                                    
                                    <Image source={require('../../lib/assets/img/whatsapp.png')} style={{height:40,width:40,marginTop:12,marginHorizontal:5 }} />                                    
                                </View>
                            </View>

                            
                            


                        <View style={{marginTop:15}}><TouchableOpacity><Text style={styles.btn}>BOOK NOW</Text></TouchableOpacity></View>

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
    btn: {backgroundColor:'#FF5B00',paddingHorizontal:10,paddingVertical:8,fontSize:15,fontWeight:'500',color:'#fff',width:width-40,textAlign:'center',borderRadius:5},
});