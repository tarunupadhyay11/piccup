import React, { Component } from "react";
import {View,Text,StyleSheet,SafeAreaView,ScrollView,Image,TouchableOpacity,Dimensions,TextInput,Picker} from "react-native";
import {Form,Item,Icon,Input,Container,Content,Button, Footer, FooterTab} from 'native-base';

const {height,width} = Dimensions.get('window');

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

class EventList extends Component {
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
    render() {
        return (    
            <SafeAreaView style={styles.container}>

                <ScrollView>

                    <View style={{marginHorizontal:10,marginBottom:5}}>
                    
                        

                        <View>

                            <View>
                                <Heading headingTitle={'Event Name:'} imgSrc={require('../../lib/assets/img/events.png')}/>
                                <TextInput placeholder='Write Event Name'  style={styles.inputz} />
                            </View> 

                            <Heading headingTitle={'Select Category:'} imgSrc={require('../../lib/assets/img/cat.png')}/>
                            <View style={{borderColor:'grey',borderWidth:0.5,borderRadius:20}}>
                                <Picker
                                    // selectedValue={this.state.language}
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
                                <Heading headingTitle={'Time Date Schedule:'} imgSrc={require('../../lib/assets/img/schedule.png')}/>
                                <TextInput placeholder='Time Date Schedule'  style={styles.inputz} />
                            </View>

                            <View>
                                <Heading headingTitle={'Slider Image Gallery:'} imgSrc={require('../../lib/assets/img/picture.png')}/>                           
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View>
                                        <TouchableOpacity>
                                            <Text style={styles.upload}>Browse..</Text>
                                        </TouchableOpacity>
                                    </View>                              
                                    <View>
                                        <TouchableOpacity><Text style={styles.uploadBtn}>ADD</Text></TouchableOpacity>
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
                                </ScrollView>
                            </View>


                            <View>
                                <Heading headingTitle={'Location Address:'} imgSrc={require('../../lib/assets/img/map.png')}/>
                                <TextInput placeholder='Location from Map'  style={styles.inputz} />
                            </View>
                            <View>
                                <Heading headingTitle={'Organizer Name / Group:'} imgSrc={require('../../lib/assets/img/build.png')}/>
                                <TextInput placeholder='Write Organizer Name / Group'  style={styles.inputz} />
                            </View>
                            <View>
                                <Heading headingTitle={'Event Created:'} imgSrc={require('../../lib/assets/img/calendar.png')}/>
                                <TextInput placeholder='Choose Event Created Date'  style={styles.inputz} />
                            </View>
                            <View>
                                <Heading headingTitle={'Services:'} imgSrc={require('../../lib/assets/img/handshake.png')}/>
                                <TextInput placeholder='Enter Service Name'  style={styles.inputz} />
                            </View>
                            <View>
                                <Heading headingTitle={'Price:'} imgSrc={require('../../lib/assets/img/money.png')}/>
                                <TextInput placeholder='Enter Price'  style={styles.inputz} />
                            </View>
                            <View>
                                <Heading headingTitle={'Description:'} imgSrc={require('../../lib/assets/img/article.png')}/>
                                <TextInput multiline = {true} numberOfLines = {3} placeholder='Event Description '  style={styles.input} />
                            </View>               
                            <View style={{ marginTop: 15, marginBottom: 10 }}>
                                <TouchableOpacity><Text style={styles.btn}>Save / Update</Text></TouchableOpacity>
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
    hdng: { fontSize: 17, fontWeight: '500', marginTop: 10, color: '#333' },
    hdngIconz: { height: 18, width: 18, marginTop: 13, marginRight: 8 },
    input:{borderColor:'grey',borderWidth:0.5,paddingHorizontal:15,borderRadius:20},
    inputz:{borderColor:'grey',borderWidth:0.5,paddingHorizontal:15,height:38,width:width-20,borderRadius:20},
    slider: {  marginRight: 10, borderWidth: 0.5, borderColor: '#bbb', paddingVertical: 0 },
    slider2: { width: width / 2 - 20, height: width / 2 + 8, marginRight: 10, borderWidth: 0.5, borderColor: '#bbb', paddingVertical: 0 },
    achiveImg: { flex: 1, height: null, width: null, resizeMode: 'stretch', },
    uploadBtn:{width: width / 2 - 20,backgroundColor:'#FF5B00',color:'#fff',borderColor:'grey',borderWidth:0.5,paddingHorizontal:5,fontWeight:'600',fontSize:15,height:38,lineHeight:38,textAlign:'center',borderRadius:20},
    upload:{width: width / 2 - 20,backgroundColor:'#02e3cd',color:'#fff',borderColor:'grey',borderWidth:0.5,paddingHorizontal:5,fontWeight:'600',fontSize:15,height:38,lineHeight:38,textAlign:'center',borderRadius:20},
    btn: {backgroundColor:'#FF5B00',paddingHorizontal:10,paddingVertical:8,fontSize:15,fontWeight:'500',color:'#fff',width:width-40,textAlign:'center',borderRadius:5},
    btn2:{backgroundColor: '#FF5B00', paddingHorizontal: 10, fontSize: 13, fontWeight: '500', color: '#fff', textAlign: 'center',height:25,lineHeight:25,  },

});