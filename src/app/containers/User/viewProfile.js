import React, { Component } from "react";
import { SafeAreaView, ScrollView, Dimensions, View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import {SIGN_IN_SUCCESS} from '../../redux/actions/action-creator';

const { height, width } = Dimensions.get('window');


const Heading2 = (props) => (
    <View style={{ flexDirection: 'row', marginBottom: 5, marginTop: 10 }}>
        <View>
            <Image source={props.imgSrc} style={styles.hdngIconz} />
        </View>
        <View>
            <Text numberOfLines={1} style={styles.hdng}>{props.headingTitle} <Text style={styles.descTxt}>{props.userDtl}</Text></Text>
        </View>        
    </View>
)

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

class RA extends Component {

    state = { ScrollView: false, wishHeart: false, selectedVenue: 1 }

    toggleScrollView() {
        if (this.state.ScrollView) {
            this.setState({ ScrollView: false })
        } else {
            this.setState({ ScrollView: true })
        }
    }

    render() {
        const { coverBg, dpContainer, dpCont, dp, dpName, mainContainer, descTxt, achiveImg, btn, slider } = styles;
        const { userData } = this.props.auth;  

        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={{ flex: 1, }} >
                        <ImageBackground style={coverBg} source={require('../../lib/assets/img/userCover.jpg')}></ImageBackground>
                        <View style={dpContainer} >
                            <View style={dpCont}>
                                <Image style={dp} source={require('../../lib/assets/img/PA.png')} />
                            </View>
                            <View>
                                <Text style={dpName}><Text>{userData.name}</Text></Text>
                            </View> 
                        </View>

                        <View style={mainContainer}>
                            <View> 
                                 <Heading2 headingTitle={'Nick Name:'} imgSrc={require('../../lib/assets/img/student.png')} userDtl={userData.nick_name} />
                             </View>
                            <View> 
                                 <Heading2 headingTitle={'Email Id:'} imgSrc={require('../../lib/assets/img/email.png')} userDtl={userData.email} />
                             </View>

                             <View> 
                                 <Heading2 headingTitle={'Country:'}  imgSrc={require('../../lib/assets/img/globe.png')} userDtl={userData.country} />
                             </View>  

                             <View> 
                                 <Heading2 headingTitle={'Phone Number:'}  imgSrc={require('../../lib/assets/img/phone.png')} userDtl={userData.phone}/>
                             </View> 
                            <View > 
                                <Heading headingTitle={'About me:'} imgSrc={require('../../lib/assets/img/man.png')}/>
                                <Text style={descTxt}>{userData.about_me} </Text>
                            </View>  

                            <View style={{ marginTop: 5 }}> 


                                <View > 
                                <Heading headingTitle={'Achievements:'} imgSrc={require('../../lib/assets/img/award.png')}/> 

                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginLeft: 5 }}>
                                    <View style={slider}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../lib/assets/img/celebration.jpeg')} style={achiveImg} />
                                        </View>
                                        <View style={{ borderTopWidth: 0.5, borderColor: '#bbb', paddingHorizontal: 7, }}>
                                            <Text style={{ paddingVertical: 5 }} numberOfLines={1}>Lorem Ipsum Dolor</Text>
                                        </View>
                                    </View>
                                    <View style={slider}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../lib/assets/img/cricket.jpeg')} style={achiveImg} />
                                        </View>
                                        <View style={{ borderTopWidth: 0.5, borderColor: '#bbb', paddingHorizontal: 7, }}>
                                            <Text style={{ paddingVertical: 5 }} numberOfLines={1}>Lorem Ipsum Dolor</Text>
                                        </View>
                                    </View>
                                    <View style={slider}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../lib/assets/img/dance.jpeg')} style={achiveImg} />
                                        </View>
                                        <View style={{ borderTopWidth: 0.5, borderColor: '#bbb', paddingHorizontal: 7, }}>
                                            <Text style={{ paddingVertical: 5 }} numberOfLines={1}>Lorem Ipsum Dolor</Text>
                                        </View>
                                    </View>
                                    <View style={slider}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../lib/assets/img/fire.jpeg')} style={achiveImg} />
                                        </View>
                                        <View style={{ borderTopWidth: 0.5, borderColor: '#bbb', paddingHorizontal: 7, }}>
                                            <Text style={{ paddingVertical: 5 }} numberOfLines={1}>Lorem Ipsum Dolor</Text>
                                        </View>
                                    </View>
                                    <View style={slider}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../lib/assets/img/meeting.jpg')} style={achiveImg} />
                                        </View>
                                        <View style={{ borderTopWidth: 0.5, borderColor: '#bbb', paddingHorizontal: 7, }}>
                                            <Text style={{ paddingVertical: 5 }} numberOfLines={1}>Lorem Ipsum Dolor</Text>
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>


                            </View>
 
                            
                            <View style={{ marginTop: 50, marginBottom: 10,alignItems:'center'}}>
                                {/* <TouchableOpacity><Text style={btn}>Edit  Profile</Text></TouchableOpacity> */}
                            </View>
  




                        </View>


                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const mapStateToProps = (state) =>{
    return { ... state};
  };

export default connect(mapStateToProps)(RA);

const styles = StyleSheet.create({
    coverBg: { flex: 1, width: width, height: width / 2 },
    dpContainer: { alignItems: 'center' },
    dpCont: { flex: 1, width: width / 2.5, height: width / 2.5, borderWidth: 5, borderColor: 'grey', marginTop: - width / 6 },
    dp: { flex: 1, height: null, width: null, resizeMode: 'stretch', backgroundColor: '#fff', },
    dpName: { color: '#274f8d', fontSize: 18, fontWeight: '900', textAlign: 'center', marginTop: 5 },
    mainContainer: { marginHorizontal: 10 },
    hdng: { fontSize: 17, fontWeight: '500', marginTop: 10, color: '#333' },
    descTxt: { fontSize: 14, fontWeight: '400', textAlign: 'justify', paddingLeft: 25 },
    srvcName: { fontSize: 15, fontWeight: '500', color: '#777', paddingVertical: 2, paddingLeft: 25 },
    achiveImg: { flex: 1, height: null, width: null, resizeMode: 'contain', },
    achiveCont: { width: width / 4 - 13, height: width / 4 - 13, marginRight: 10, borderWidth: 0.5, borderColor: '#bbb', marginBottom: 20, },
    btn: { width: width / 2 - 40, backgroundColor: '#FF5B00', paddingHorizontal: 10, paddingVertical: 10, fontSize: 15, fontWeight: '500', color: '#fff', textAlign: 'center', borderRadius: 5, },
    slider: { width: width / 3 - 20, height: width / 3 + 8, marginRight: 10, borderWidth: 0.5, borderColor: '#bbb', paddingVertical: 0 },
    hdngIconz: { height: 18, width: 18, marginTop: 13, marginRight: 8 },
});