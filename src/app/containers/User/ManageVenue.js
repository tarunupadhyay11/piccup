import React, { Component } from "react";
import { SafeAreaView, ScrollView, Dimensions, View, Text, Image, TouchableOpacity, StyleSheet,TextInput,Picker } from "react-native";
import {Form,Item,Icon,Input,Container,Content,Button, Footer, FooterTab} from 'native-base';

const { height, width } = Dimensions.get('window');

const Heading = (props) => (
    <View style={{ flexDirection: 'row', marginBottom: 15, marginTop: 10 }}>
        <View>
            <Image source={props.imgSrc} style={styles.hdngIconz} />
        </View>
        <View>
            <Text numberOfLines={1} style={styles.hdng}>{props.headingTitle}</Text>
        </View>        
    </View>
)
 

class VA extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
          headerLeft: (
            <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
                <View style={{paddingHorizontal:10}}>
                    <Icon name="md-menu" style={{fontSize:35}} size={35}/>
                </View>
            </TouchableOpacity>
          ),
          headerTitle:(
            <View style={{ justifyContent: 'center',
            alignItems:'center', flex:1}}>
              <Image style={{height:45,resizeMode:'contain',}} source={require('../../lib/assets/img/logo.png')}/>
            </View>
          ),
          headerTitleStyle:{
         alignSelf: 'center',
        justifyContent: 'center',
        alignItems:'center', 
        
        marginLeft:-50
          },
          headerRight: (
            <TouchableOpacity>
                <View style={{paddingHorizontal:10}}>
                    <Image source={require('../../lib/assets/img/Top-Locker-Icon.png')}/>
                </View>
            </TouchableOpacity>
          ),
        }
      
    }

    state = { ScrollView: false,  selectedVenue: 1 , modalVisible: false,}
 
     toggleModal(visible) {
        this.setState({ modalVisible: visible });
     }

    render() {
        const { coverBg, dpContainer, dpCont, dp, dpName, inputzzz, mainContainer,input,inputzz, btn1,btn2, achiveImg,uploader,upload, inputz, uploadBtn, btn, achiveCont, slider, slider2, hdngIconz } = styles;
        const { selectedVenue } = this.state

        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={{ flex: 1, }} >
 
                        <View style={mainContainer}>

                        <Heading headingTitle={'Select Category:'} imgSrc={require('../../lib/assets/img/cat.png')}/>
                        <View style={{borderColor:'grey',borderWidth:0.5,borderRadius:20}}>
                            <Picker
                                selectedValue={this.state.language}
                                style={{height: 38, width: width-30,marginLeft:5}}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({language: itemValue})
                                }>
                                <Picker.Item label="Java" value="java" />
                                <Picker.Item label="JavaScript" value="js" />
                                <Picker.Item label="HTML" value="HTML" />
                                <Picker.Item label="CSS" value="CSS" />
                                <Picker.Item label="Bootstrap" value="BS" />
                            </Picker>
                        </View>

                        <View>
                            <Heading headingTitle={'Venue Name:'} imgSrc={require('../../lib/assets/img/venue.png')}/>                           
                            <TextInput placeholder='Write Venue Name'  style={inputz} />
                        </View>
 
                            <View>
                                <Heading headingTitle={'Image Slider:'} imgSrc={require('../../lib/assets/img/picture.png')}/>                           
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View>
                                        <TouchableOpacity>
                                            <Text style={upload}>Browse..</Text>
                                        </TouchableOpacity>
                                    </View>                              
                                    <View>
                                        <TouchableOpacity><Text style={uploadBtn}>ADD</Text></TouchableOpacity>
                                    </View>                              
                                </View>

                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop:20}}>
                                    <View style={slider}>
                                        <View style={{ width: width / 2-15, height: width / 4  }}>
                                            <Image source={require('../../lib/assets/img/celebration.jpeg')} style={achiveImg} />
                                        </View> 
                                        <View style={{ marginTop:5}}>                                             
                                            <TouchableOpacity style={{flex:1}} ><Text style={btn2}>Delete</Text></TouchableOpacity>
                                        </View>
                                    </View>

                                    <View style={slider}>
                                        <View style={{ width: width / 2-15, height: width / 4  }}>
                                            <Image source={require('../../lib/assets/img/celebration.jpeg')} style={achiveImg} />
                                        </View> 
                                        <View style={{ marginTop:5}}>                                             
                                            <TouchableOpacity style={{flex:1}} ><Text style={btn2}>Delete</Text></TouchableOpacity>
                                        </View>
                                    </View>   
                                </ScrollView>
                            </View>


                            <View>
                                <Heading headingTitle={'Date of establishment:'} imgSrc={require('../../lib/assets/img/calendar1.png')}/>                           
                                <TextInput placeholder='15/12/1994'  style={inputz} />
                            </View>


                            <View > 
                                <Heading headingTitle={'Supported Events:'} imgSrc={require('../../lib/assets/img/events.png')}/>                           
                                <TextInput placeholder='Image Caption / Title'  style={inputz} />
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View>
                                        <TouchableOpacity style={{ marginTop: 10, marginBottom: 10 }}>
                                            <Text style={upload}>Browse..</Text>
                                        </TouchableOpacity>
                                    </View>                              
                                    <View>
                                        <View style={{ marginTop: 10, marginBottom: 10 }}>
                                            <TouchableOpacity><Text style={uploadBtn}>ADD</Text></TouchableOpacity>
                                        </View> 
                                    </View>                              
                                </View>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop:20}}>
                                    <View style={slider}>
                                        <View style={{ width: width / 3+5, height: width / 3  }}>
                                            <Image source={require('../../lib/assets/img/celebration.jpeg')} style={achiveImg} />
                                        </View>
                                        <View style={{ borderTopWidth: 0.5, borderColor: '#bbb', paddingHorizontal: 7, }}>
                                            <Text style={{ paddingVertical: 5 }} numberOfLines={1}>Lorem Ipsum Dolor</Text>
                                        </View>
                                        <View style={{flexDirection:'row',justifyContent:'space-between',}}>                                             
                                            <TouchableOpacity style={{flex:1,borderRightColor:'#fff',borderRightWidth:2}}><Text style={btn1}>EDIT</Text></TouchableOpacity>
                                            <TouchableOpacity style={{flex:1}} ><Text style={btn2}>Delete</Text></TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={slider}>
                                        <View style={{ width: width / 3+5, height: width / 3  }}>
                                            <Image source={require('../../lib/assets/img/celebration.jpeg')} style={achiveImg} />
                                        </View>
                                        <View style={{ borderTopWidth: 0.5, borderColor: '#bbb', paddingHorizontal: 7, }}>
                                            <Text style={{ paddingVertical: 5 }} numberOfLines={1}>Lorem Ipsum Dolor</Text>
                                        </View>
                                        <View style={{flexDirection:'row',justifyContent:'space-between',}}>                                             
                                            <TouchableOpacity style={{flex:1,borderRightColor:'#fff',borderRightWidth:2}}><Text style={btn1}>EDIT</Text></TouchableOpacity>
                                            <TouchableOpacity style={{flex:1}} ><Text style={btn2}>Delete</Text></TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={slider}>
                                        <View style={{ width: width / 3+5, height: width / 3  }}>
                                            <Image source={require('../../lib/assets/img/celebration.jpeg')} style={achiveImg} />
                                        </View>
                                        <View style={{ borderTopWidth: 0.5, borderColor: '#bbb', paddingHorizontal: 7, }}>
                                            <Text style={{ paddingVertical: 5 }} numberOfLines={1}>Lorem Ipsum Dolor</Text>
                                        </View>
                                        <View style={{flexDirection:'row',justifyContent:'space-between',}}>                                             
                                            <TouchableOpacity style={{flex:1,borderRightColor:'#fff',borderRightWidth:2}}><Text style={btn1}>EDIT</Text></TouchableOpacity>
                                            <TouchableOpacity style={{flex:1}} ><Text style={btn2}>Delete</Text></TouchableOpacity>
                                        </View>
                                    </View>
                            
                                </ScrollView>
                            </View> 


                            <View>
                                <Heading headingTitle={'Locations:'} imgSrc={require('../../lib/assets/img/map.png')}/>                           
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View>
                                        <TextInput placeholder='Enter Location'  style={inputzzz} />
                                    </View>
                                    <View>
                                        <TouchableOpacity><Text style={uploadBtn}>ADD</Text></TouchableOpacity>
                                    </View>
                                </View>

                                
                                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}> 
                                    <View style={{width:width/2+10}}>                                    
                                        <Text numberOfLines={1} style={{fontSize:15,fontWeight:'600',color:'#333'}}>Location Address</Text>
                                    </View>
                                    <View style={{width:width/5-5}}>                                    
                                        <TouchableOpacity><Text style={btn1}>Edit</Text></TouchableOpacity>
                                    </View>
                                    <View style={{width:width/5-5}}>                                    
                                        <TouchableOpacity><Text style={btn2}>Delete</Text></TouchableOpacity>
                                    </View>                                
                                </View>

                            </View>
                           
                            
                            

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View style={{ marginTop: 15, marginBottom: 10 }}>
                                    <TouchableOpacity><Text style={btn}>Save / Update</Text></TouchableOpacity>
                                </View> 
                            </View>

                        </View>


                    </View>

                    
                    
                </ScrollView>
            </SafeAreaView>
        );
    }
}
export default VA;

const styles = StyleSheet.create({
    coverBg: { flex: 1, width: width, height: width / 2 },
    dpContainer: { alignItems: 'center' },
    dpCont: { flex: 1, width: width / 2.5, height: width / 2.5, borderWidth: 5, borderColor: 'grey', marginTop: - width / 6 },
    dp: { flex: 1, height: null, width: null, resizeMode: 'stretch', backgroundColor: '#fff', },
    dpName: { color: '#274f8d', fontSize: 18, fontWeight: '900', textAlign: 'center', marginTop: 5 },
    dpDesc: { color: '#333', fontSize: 15, fontWeight: '300', textAlign: 'center', },
    mainContainer: { marginHorizontal: 10 },
    hdng: { fontSize: 17, fontWeight: '500', marginTop: 10, color: '#333' },
    descTxt: { fontSize: 14, fontWeight: '400', textAlign: 'justify', paddingLeft: 25 },
    srvcName: { fontSize: 15, fontWeight: '500', color: '#777', paddingVertical: 2, paddingLeft: 25 },
    socialIcon: { height: 40, width: 40, marginTop: 12, marginHorizontal: 5 },
    achiveImg: { flex: 1, height: null, width: null, resizeMode: 'stretch', },
    achiveCont: { width: width / 4 - 13, height: width / 4 - 13, marginRight: 10, borderWidth: 0.5, borderColor: '#bbb', marginBottom: 20, },
    btn: { width: width-20, backgroundColor: '#FF5B00', paddingHorizontal: 10, paddingVertical: 10, fontSize: 15, fontWeight: '500', color: '#fff', textAlign: 'center', borderRadius: 20, },
    slider: {  marginRight: 10, borderWidth: 0.5, borderColor: '#bbb', paddingVertical: 0 },
    slider2: { width: width / 2 - 20, height: width / 2 + 8, marginRight: 10, borderWidth: 0.5, borderColor: '#bbb', paddingVertical: 0 },
    hdngIconz: { height: 18, width: 18, marginTop: 13, marginRight: 8 },
    input:{borderColor:'grey',borderWidth:0.5,paddingHorizontal:15,borderRadius:20},
    inputz:{borderColor:'grey',borderWidth:0.5,paddingHorizontal:15,height:38,width:width-20,borderRadius:20},
    inputzz:{borderColor:'grey',borderWidth:0.5,paddingHorizontal:15,height:38,width:width/3-10,borderRadius:20},
    inputzzz:{borderColor:'grey',borderWidth:0.5,paddingHorizontal:15,height:38,width:width/2+30,borderRadius:20},
    uploader:{backgroundColor:'#fff',color:'#777',borderColor:'grey',borderWidth:0.5,paddingHorizontal:5,fontWeight:'600',fontSize:15,height:30,lineHeight:28,textAlign:'center',borderRadius:20,elevation:3},
    btn1:{backgroundColor: '#02e3cd', paddingHorizontal: 10, fontSize: 13, fontWeight: '500', color: '#fff', textAlign: 'center',height:25,lineHeight:25,borderRadius:5},
    btn2:{backgroundColor: '#FF5B00', paddingHorizontal: 10, fontSize: 13, fontWeight: '500', color: '#fff', textAlign: 'center',height:25,lineHeight:25,  },

    container: {
        alignItems: 'center',
        backgroundColor: '#ede3f2',
     },
     modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e7e7e7',
        padding: 10
     },
     text: {
        color: '#3f2949',
        marginTop: 10
     },
    upload:{width: width / 2 - 20,backgroundColor:'#02e3cd',color:'#fff',borderColor:'grey',borderWidth:0.5,paddingHorizontal:5,fontWeight:'600',fontSize:15,height:38,lineHeight:38,textAlign:'center',borderRadius:20},
    uploadBtn:{width: width / 2 - 20,backgroundColor:'#FF5B00',color:'#fff',borderColor:'grey',borderWidth:0.5,paddingHorizontal:5,fontWeight:'600',fontSize:15,height:38,lineHeight:38,textAlign:'center',borderRadius:20},
    uploadBtn:{width: width / 3 - 10,backgroundColor:'#FF5B00',color:'#fff',borderColor:'grey',borderWidth:0.5,paddingHorizontal:5,fontWeight:'600',fontSize:15,height:38,lineHeight:38,textAlign:'center',borderRadius:20},

});
