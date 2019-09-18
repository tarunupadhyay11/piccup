import React, { Component } from "react";
import { SafeAreaView, ScrollView, Dimensions, View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet,TextInput, } from "react-native";

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
                        <ImageBackground style={coverBg} source={require('../../lib/assets/img/pub.jpg')}>
                            <View style={{justifyContent:'center',alignItems:'center',marginTop:50}}>
                                <TouchableOpacity onPress={() => {}} style={{width:185}}>
                                    <Text style={uploader}>Change / Upload Image</Text>
                                </TouchableOpacity>
                            </View>
                            </ImageBackground>
                        <View style={dpContainer} >
                            <View style={dpCont}>
                                <Image style={dp} source={require('../../lib/assets/img/VA.png')} />
                               

                            </View>
                            <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
                                <TouchableOpacity onPress={() => {}} style={{width:185}}>
                                    <Text style={uploader}>Change / Upload Image</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{marginTop:10}}>
                                <TextInput placeholder='Full Name'  style={inputz} /> 
                                <TextInput placeholder='Designation'  style={inputz} /> 
                            </View> 
                        </View>

                        <View style={mainContainer}>
                            <View >  
                                <Heading headingTitle={'About me:'} imgSrc={require('../../lib/assets/img/man.png')}/>
                                <TextInput multiline = {true} numberOfLines = {3} placeholder='About '  style={input} />
                            </View>

                            <View > 
                                <Heading headingTitle={'Our Mission Vision and Value:'} imgSrc={require('../../lib/assets/img/target.png')}/>
                                <TextInput multiline = {true} numberOfLines = {3} placeholder='Our Mission Vision and Value'  style={input} />                                 
                            </View>
 
                            <View > 
                                <Heading headingTitle={'Media & Portfolio:'} imgSrc={require('../../lib/assets/img/picture.png')}/>                           
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

                            <View style={{marginTop:10}}>
                                <Heading headingTitle={'Services:'} imgSrc={require('../../lib/assets/img/handshake.png')}/>                           
                                <TextInput placeholder='Add Services'  style={inputz} />
                                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                                    <TextInput placeholder='Duration'  style={inputzz} />
                                    <TextInput placeholder='Charges $'  style={inputzz} />
                                    <TouchableOpacity><Text style={uploadBtn}>ADD</Text></TouchableOpacity>
                                </View>  

                                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
                                    <View style={{width:width/3-5}}>
                                        <Text numberOfLines={1} style={{fontSize:15,fontWeight:'600',color:'#333'}}>Service Name 1</Text>
                                    </View>
                                    <View style={{width:width/5-5,marginLeft:10}}>
                                        <Text numberOfLines={1} style={{fontSize:15,fontWeight:'600',color:'#333'}}>20days</Text>
                                    </View>
                                    <View style={{width:width/8-5}}>
                                        <Text numberOfLines={1} style={{fontSize:15,fontWeight:'600',color:'#333'}}>$50</Text>
                                    </View>
                                    <View style={{width:width/8-5}}>
                                        <TouchableOpacity><Text style={btn1}>Edit</Text></TouchableOpacity>
                                    </View>
                                    <View style={{width:width/6-5}}>
                                        <TouchableOpacity><Text style={btn2}>Delete</Text></TouchableOpacity>
                                    </View>
                                </View>  

                            </View>

                            
                            <View>
                                <Heading headingTitle={'Services Locations:'} imgSrc={require('../../lib/assets/img/map.png')}/>                           
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
                           
                            

                            <View style={{ marginBottom: 10 }}> 
                                <Heading headingTitle={'Terms & Conditions:'} imgSrc={require('../../lib/assets/img/accept.png')}/>
                                <TextInput multiline = {true} numberOfLines = {3} placeholder='Terms & Conditions '  style={input} />
                                
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
    btn: { width: width / 2 - 40, backgroundColor: '#FF5B00', paddingHorizontal: 10, paddingVertical: 10, fontSize: 15, fontWeight: '500', color: '#fff', textAlign: 'center', borderRadius: 5, },
    slider: {  marginRight: 10, borderWidth: 0.5, borderColor: '#bbb', paddingVertical: 0 },
    slider2: { width: width / 2 - 20, height: width / 2 + 8, marginRight: 10, borderWidth: 0.5, borderColor: '#bbb', paddingVertical: 0 },
    hdngIconz: { height: 18, width: 18, marginTop: 13, marginRight: 8 },
    input:{borderColor:'grey',borderWidth:0.5,paddingHorizontal:15,borderRadius:20},
    inputz:{borderColor:'grey',borderWidth:0.5,paddingHorizontal:15,height:38,width:width-20,marginTop:10,borderRadius:20},
    inputzz:{borderColor:'grey',borderWidth:0.5,paddingHorizontal:15,height:38,width:width/3-10,borderRadius:20},
    inputzzz:{borderColor:'grey',borderWidth:0.5,paddingHorizontal:15,height:38,width:width/2+30,borderRadius:20},
    uploader:{backgroundColor:'#fff',color:'#777',borderColor:'grey',borderWidth:0.5,paddingHorizontal:5,fontWeight:'600',fontSize:15,height:30,lineHeight:28,textAlign:'center',borderRadius:20,elevation:3},
    btn1:{backgroundColor: '#02e3cd', paddingHorizontal: 10, fontSize: 13, fontWeight: '500', color: '#fff', textAlign: 'center',height:25,lineHeight:25,borderRadius:5},
    btn2:{backgroundColor: '#FF5B00', paddingHorizontal: 10, fontSize: 13, fontWeight: '500', color: '#fff', textAlign: 'center',height:25,lineHeight:25,borderRadius:5},

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
