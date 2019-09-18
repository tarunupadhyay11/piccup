import React, { Component } from "react";
import {ActivityIndicator,SafeAreaView,StyleSheet,navigation, Text, View,StatusBar,Image,Dimensions,ScrollView,TouchableOpacity,ImageBackground,TextInput,Alert} from 'react-native';
import { bindActionCreators } from 'redux';
import {Form,Item,Icon,Input,Container,Content,Button, Footer, FooterTab} from 'native-base';
import {fetchUserprofile,makeErrorFalse,updateUserprofile} from '../../redux/actions/user-action';
import { connect } from 'react-redux';


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
 

class RA extends Component {

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
    componentDidUpdate(prevProps) {
       // alert(JSON.stringify(prevProps));
      }

     componentDidMount() {
        const  { userData } = this.props.auth;  
    //     const data = JSON.stringify({
    //         id: userData.id,
    //       });
          
    //    this.props.fetchUserprofile(data);
    }

    constructor(props){
        super(props)
        const  { userData } = this.props.auth;  
        this.state={
            search:'', name: userData.name, nick_name: userData.nick_name,
            email: userData.email, phone: userData.phone, about_me: userData.about_me, link1: userData.link1, link2: userData.link2, link3: userData.link3,country: userData.country,user_type: userData.user_type,access_token: userData.access_token
        }       
      }     

      updateProfile(){
            const userName = this.state.name;
            const userNickname = this.state.nick_name;
            const userEmail = this.state.email;
            const userPhone = this.state.phone;
            const userAbout = this.state.about_me;
            const userCountry = this.state.country;
            const userUsertype = this.state.user_type;
            const userAccesstoken = this.state.access_token;
            const data = JSON.stringify({
            name: userName,
            nick_name: userNickname,
            email:userEmail,
            phone:userPhone,
            about_me:userAbout,
            country:userCountry,
            user_type:userUsertype
            });
           this.props.updateUserprofile(data, userAccesstoken)
      }

    state = { ScrollView: false,  selectedVenue: 1 , modalVisible: false,}
 
     toggleModal(visible) {
        this.setState({ modalVisible: visible });
     }


    render() {
        const { coverBg, dpContainer, dpCont, dp, dpName, inputzzz, mainContainer,input,inputzz, btn1,btn2, achiveImg,uploader,upload, inputz, uploadBtn, btn, achiveCont, slider, slider2, hdngIconz } = styles;
        //const  {userData}  = this.props.auth;  
        const { userProfile, isFetching } = this.props.user;
      

        // if (isFetching) {
        //     return(
        //         <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        //             <ActivityIndicator size={'large'} /> 
        //         </View>
        //     )
        // } else {     
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={{ flex: 1, }} >
                        <ImageBackground style={coverBg} source={require('../../lib/assets/img/userCover.jpg')}/>
                        <View style={dpContainer} >
                            <View style={dpCont}>
                                <Image style={dp} source={require('../../lib/assets/img/PA.png')} />                          
                            </View>
                            <View style = {{flexDirection: 'row'}}>
                            <View style={{justifyContent:'center',alignItems:'center',marginTop:15}}>
                                <TouchableOpacity onPress={() => {}} style={{width:185}}>
                                    <Text style={uploader}>Change / Upload Image</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center',marginTop:15}}>
                                <TouchableOpacity onPress={() => {this.props.navigation.navigate('viewUserProfile')}} style={{width:185}}>
                                    <Text style={uploader}>View Profile  </Text>
                                </TouchableOpacity>
                            </View>
                            </View>
                            <View style={{marginTop:30}}>
                                <TextInput placeholder='Full Name'  style={inputz} value={this.state.name}  onChangeText={(value) => { this.setState({ 'name': value }) }} />                                  
                                <View style={{marginTop:10}}>
                                    <TextInput placeholder='Nick Name'  style={inputz} value={this.state.nick_name} onChangeText={(value) => { this.setState({ 'nick_name': value }) }}/>
                                </View> 
                            </View> 
                        </View>

                        <View style={mainContainer}>
                            <View >  
                                <Heading headingTitle={'Email Address:'} imgSrc={require('../../lib/assets/img/email.png')}/>
                                <TextInput  placeholder='Email Address '  style={inputz} value={this.state.email} onChangeText={(value) => { this.setState({ 'email': value }) }}/>
                            </View>
                            <View >  
                                <Heading headingTitle={'Phone Number:'} imgSrc={require('../../lib/assets/img/phone.png')}/>
                                <TextInput  placeholder='Contact Number '  style={inputz} value={this.state.phone} onChangeText={(value) => { this.setState({ 'phone': value }) }}/>
                            </View>
                            <View >  
                                <Heading headingTitle={'About me:'} imgSrc={require('../../lib/assets/img/student.png')}/>
                                <TextInput multiline = {true} numberOfLines = {3} placeholder='About '  style={input} value={this.state.about_me} onChangeText={(value) => { this.setState({ 'about_me': value }) }} />
                            </View> 
 
                            <View > 
                                <Heading headingTitle={'Achievements:'} imgSrc={require('../../lib/assets/img/award.png')}/>                           
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
                                    <View style={styles.slider}>
                                        <View style={{ width: width / 2-15, height: width / 4  }}>
                                            <Image source={require('../../lib/assets/img/celebration.jpeg')} style={styles.achiveImg} />
                                        </View> 
                                        <View style={{ marginTop:5}}>                                             
                                            <TouchableOpacity style={{flex:1}} ><Text style={styles.btn2}>Delete</Text></TouchableOpacity>
                                        </View>
                                    </View>

                                    <View style={styles.slider}>
                                        <View style={{ width: width / 2-15, height: width / 4  }}>
                                            <Image source={require('../../lib/assets/img/celebration.jpeg')} style={styles.achiveImg} />
                                        </View> 
                                        <View style={{ marginTop:5}}>                                             
                                            <TouchableOpacity style={{flex:1}} ><Text style={styles.btn2}>Delete</Text></TouchableOpacity>
                                        </View>
                                    </View>

                                     <View style={styles.slider}>
                                        <View style={{ width: width / 2-15, height: width / 4  }}>
                                            <Image source={require('../../lib/assets/img/celebration.jpeg')} style={styles.achiveImg} />
                                        </View> 
                                        <View style={{ marginTop:5}}>                                             
                                            <TouchableOpacity style={{flex:1}} ><Text style={styles.btn2}>Delete</Text></TouchableOpacity>
                                        </View>
                                    </View>   
                                </ScrollView>
                            </View>                            

                            <View style={{alignItems:'center',marginTop:30 }}>
                                <View style={{ marginTop: 15, marginBottom: 20 }}>
                                    <TouchableOpacity onPress={() => this.updateProfile()}><Text style={btn}>Save / Update</Text></TouchableOpacity>
                                </View> 
                            </View>

                        </View>


                    </View>

                    
                    
                </ScrollView>
            </SafeAreaView>
        );
    // }
    }
}
// const mapStateToProps = (state) =>{
//     return { ... state};
//   };

//export default connect(mapStateToProps)(RA);

function mapStateToProps(state) {
    return {
        user: state.user,
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({ fetchUserprofile,updateUserprofile }, dispatch)
    }
}

// const mapDispatchToProps = {
//     fetchUserprofile,makeErrorFalse
//   }

export default connect(mapStateToProps, mapDispatchToProps)(RA)

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
    inputz:{borderColor:'grey',borderWidth:0.5,paddingHorizontal:15,height:38,width:width-20,marginTop:0,borderRadius:20},
    inputzz:{borderColor:'grey',borderWidth:0.5,paddingHorizontal:15,height:38,width:width/3-10,borderRadius:20},
    inputzzz:{borderColor:'grey',borderWidth:0.5,paddingHorizontal:15,height:38,width:width/2+30,borderRadius:20},
    uploader:{backgroundColor:'#fff',color:'#777',borderColor:'grey',borderWidth:0.5,paddingHorizontal:5,fontWeight:'600',fontSize:15,height:30,lineHeight:28,textAlign:'center',borderRadius:20,elevation:3},
    btn1:{backgroundColor: '#02e3cd', paddingHorizontal: 10, fontSize: 13, fontWeight: '500', color: '#fff', textAlign: 'center',height:25,lineHeight:25,borderRadius:5},
    btn2:{backgroundColor: '#FF5B00', paddingHorizontal: 10, fontSize: 13, fontWeight: '500', color: '#fff', textAlign: 'center',height:25,lineHeight:25,},

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
