import React, { Component } from "react";
import { SafeAreaView,ScrollView,Dimensions,View,Text,ImageBackground,Image,TouchableOpacity,StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const {height,width} = Dimensions.get('window');


class RatingReviews extends Component {
    render() {
    return (
        <View style={{width:width-70,height:150,marginRight:20,marginBottom:20,borderWidth:0.5,borderColor:'#ddd',padding:10}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{color:'#274f8d',fontSize:16,fontWeight:'600'}}>{this.props.userName} </Text>
                <View style={{flexDirection:'row',marginTop:5}}>
                    <Icon name="md-star"  size={18} style={{ color: '#FFD715' }}/>
                    <Icon name="md-star"  size={18} style={{ color: '#FFD715' }}/>
                    <Icon name="md-star"  size={18} style={{ color: '#FFD715' }}/>
                    <Icon name="md-star"  size={18} style={{ color: '#FFD715' }}/>
                    <Icon name="md-star"  size={18} style={{ color: '#FFD715' }}/>
                </View>
            </View>
            <View style={{alignItems:'flex-start',justifyContent:'space-evenly'}}>
            <Text style={{fontSize:14,color:'#555',textAlign:'justify',marginTop:10}}>{this.props.rrDesc} </Text>
             </View>
        </View>
    );
}
}

 

class VA extends Component {

   state ={ ScrollView: false, wishHeart:false }

   toggleScrollView(){
       if (this.state.ScrollView){
           this.setState({ScrollView:false})
       }else{
           this.setState({ScrollView:true})
       }
   }

    render() {

        const {coverBg,dpContainer,dpCont,dp,dpName,dpDesc,mainContainer,hdng,descTxt,srvcName,socialIcon,achiveImg,btn,achiveCont,slider,slider2,hdngIconz} = styles;
        const { wishHeart } = this.state

        return (
            <SafeAreaView>
                <ScrollView> 
                    <View style={{flex:1,}} >
                        <ImageBackground style={coverBg} source={require('../../lib/assets/img/pub.jpg')}></ImageBackground>
                        <View style={dpContainer} >
                            <View style={dpCont}>
                                <Image style={dp} source={require('../../lib/assets/img/VA.png')}/>
                            </View>
                            <View>
                                <Text style={dpName}>Jack Villiams</Text>
                                <Text style={dpDesc}>(Director)</Text>
                            </View>
                            <TouchableOpacity onPress={()=>wishHeart ? this.setState({wishHeart : false}) : this.setState({wishHeart : true}) } style={{position:'absolute',top:15,right:15,zIndex:999,backgroundColor:'#fff',borderColor:'#bbb',borderWidth:1,borderRadius:100,paddingHorizontal:8,paddingVertical:5}}>
                                <Icon name="md-heart" size={25} style={ wishHeart? {color:'#dd2245'}:{color:'grey'}}/>
                            </TouchableOpacity>
                        </View>

                         <View style={mainContainer}>
                            <View >
                                <View style={{flexDirection:'row',marginBottom:5}}>
                                    <View>
                                        <Image source={require('../../lib/assets/img/man.png')} style={hdngIconz} />
                                    </View>
                                    <View>
                                        <Text numberOfLines={1} style={hdng}>About me:</Text>
                                    </View>
                                </View>
                                <Text style={descTxt}>Qui sint in est Lorem. Ea eu id velit occaecat enim veniam. Nisi dolore in officia sit. Est Lorem fugiat pariatur sunt commodo pariatur in eiusmod est tempor eu non velit. </Text>
                            </View>

                            <View >
                                <View style={{flexDirection:'row',marginBottom:5}}>
                                    <View>
                                        <Image source={require('../../lib/assets/img/target.png')} style={hdngIconz} />
                                    </View>
                                    <View>
                                        <Text numberOfLines={1} style={hdng}>Our Mission Vision and Value:</Text>
                                    </View>
                                </View>
                                <Text style={descTxt}>Qui sint in est Lorem. Ea eu id velit occaecat enim veniam.</Text>
                            </View> 

                            <View >
                                <View style={{flexDirection:'row',marginBottom:15,marginTop:10}}>
                                    <View>
                                        <Image source={require('../../lib/assets/img/location.png')} style={hdngIconz} />
                                    </View>
                                    <View>
                                        <Text numberOfLines={1} style={hdng}>Venue Details:</Text>
                                    </View>
                                </View>
                             
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginLeft:5}}> 
                        <View style={slider2}>
                            <View style={{flex:1}}>
                                <Image source={require('../../lib/assets/img/chat.png')} style={achiveImg}/>
                            </View> 
                            <View style={{borderTopWidth:0.5,borderColor:'#bbb',paddingHorizontal:7,}}>
                                <Text style={{paddingVertical:5}} numberOfLines = { 1 }>Lorem Ipsum Dolor</Text>
                            </View>
                        </View>
                        <View style={slider2}>
                            <View style={{flex:1}}>
                                <Image source={require('../../lib/assets/img/chat.png')} style={achiveImg}/>
                            </View>
                            <View style={{borderTopWidth:0.5,borderColor:'#bbb',paddingHorizontal:7,}}>
                                <Text style={{paddingVertical:5}} numberOfLines = { 1 }>Lorem Ipsum Dolor</Text>
                            </View> 
                        </View>
                        <View style={slider2}>
                            <View style={{flex:1}}>
                                <Image source={require('../../lib/assets/img/chat.png')} style={achiveImg}/>
                            </View>
                            <View style={{borderTopWidth:0.5,borderColor:'#bbb',paddingHorizontal:7,}}>
                                <Text style={{paddingVertical:5}} numberOfLines = { 1 }>Lorem Ipsum Dolor</Text>
                            </View> 
                        </View>
                        
                    </ScrollView>
                    </View>


                                <View >
                                    <View style={{flexDirection:'row',marginBottom:5,marginTop:10}}>
                                        <View>
                                            <Image source={require('../../lib/assets/img/map.png')} style={hdngIconz} />
                                        </View>
                                        <View>
                                            <Text numberOfLines={1} style={hdng}>Location:</Text>
                                        </View>
                                    </View>
                                    <View style={{marginLeft:20}}>                                    
                                        <Text style={{fontSize:16,fontWeight:'900',color:'#333'}} > <Icon name='md-arrow-forward' size={16} /> * Delhi , Mumbai , Agra</Text>
                                        <Text style={{fontSize:16,fontWeight:'900',color:'#333'}} > <Icon name='md-arrow-forward' size={16} /> * Will Service at Home</Text>
                                    </View>
                                </View> 

                              
                            <View>
                                <View style={{flexDirection:'row',marginBottom:5,marginTop:10}}>
                                    <View>
                                        <Image source={require('../../lib/assets/img/handshake.png')} style={hdngIconz} />
                                    </View>
                                    <View>
                                        <Text numberOfLines={1} style={hdng}>Services:</Text>
                                    </View>
                                </View>


                                <View style={{marginBottom:5}}>
                                    <Text numberOfLines={1} style={srvcName}><Icon name='md-arrow-forward' size={16} />  Services Name 1</Text>
                                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                        <View>
                                            <Text style={{fontSize:15,fontWeight:'900'}}><Icon name='md-calendar' size={16} style={{color:'#02e3cd'}} /> 30 Days</Text>
                                        </View>
                                        <View>
                                            <Text style={{fontSize:15,fontWeight:'900'}}><Icon name='md-pricetag' size={16} style={{color:'#02e3cd'}} /> $30</Text>
                                        </View>
                                    </View>
                                </View> 

                                <View style={{marginBottom:5}} >
                                    <Text numberOfLines={1} style={srvcName}><Icon name='md-arrow-forward' size={16} />  Services Name 1</Text>
                                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                        <View>
                                            <Text style={{fontSize:15,fontWeight:'900'}}><Icon name='md-calendar' size={16} style={{color:'#02e3cd'}} /> 30 Days</Text>
                                        </View>
                                        <View>
                                            <Text style={{fontSize:15,fontWeight:'900'}}><Icon name='md-pricetag' size={16} style={{color:'#02e3cd'}} /> $30</Text>
                                        </View>
                                    </View>
                                </View> 

                            </View>


                        <View >
                                <View style={{flexDirection:'row',marginBottom:15,marginTop:10}}>
                                    <View>
                                        <Image source={require('../../lib/assets/img/picture.png')} style={hdngIconz} />
                                    </View>
                                    <View>
                                        <Text numberOfLines={1} style={hdng}>Media & Portfolio</Text>
                                    </View>
                                </View>
                             
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginLeft:5}}> 
                        <View style={slider}>
                            <View style={{flex:1}}>
                                <Image source={require('../../lib/assets/img/celebration.jpeg')} style={achiveImg}/>
                            </View> 
                            <View style={{borderTopWidth:0.5,borderColor:'#bbb',paddingHorizontal:7,}}>
                                <Text style={{paddingVertical:5}} numberOfLines = { 1 }>Lorem Ipsum Dolor</Text>
                            </View>
                        </View>
                        <View style={slider}>
                            <View style={{flex:1}}>
                                <Image source={require('../../lib/assets/img/cricket.jpeg')} style={achiveImg}/>
                            </View>
                            <View style={{borderTopWidth:0.5,borderColor:'#bbb',paddingHorizontal:7,}}>
                                <Text style={{paddingVertical:5}} numberOfLines = { 1 }>Lorem Ipsum Dolor</Text>
                            </View> 
                        </View>
                        <View style={slider}>
                            <View style={{flex:1}}>
                                <Image source={require('../../lib/assets/img/dance.jpeg')} style={achiveImg}/>
                            </View>
                            <View style={{borderTopWidth:0.5,borderColor:'#bbb',paddingHorizontal:7,}}>
                                <Text style={{paddingVertical:5}} numberOfLines = { 1 }>Lorem Ipsum Dolor</Text>
                            </View> 
                        </View>
                        <View style={slider}>
                            <View style={{flex:1}}>
                                <Image source={require('../../lib/assets/img/fire.jpeg')} style={achiveImg}/>
                            </View>
                            <View style={{borderTopWidth:0.5,borderColor:'#bbb',paddingHorizontal:7,}}>
                                <Text style={{paddingVertical:5}} numberOfLines = { 1 }>Lorem Ipsum Dolor</Text>
                            </View> 
                        </View>
                        <View style={slider}>
                            <View style={{flex:1}}> 
                                <Image source={require('../../lib/assets/img/meeting.jpg')} style={achiveImg}/>
                            </View>
                            <View style={{borderTopWidth:0.5,borderColor:'#bbb',paddingHorizontal:7,}}>
                                <Text style={{paddingVertical:5}} numberOfLines = { 1 }>Lorem Ipsum Dolor</Text>
                            </View> 
                        </View> 
                    </ScrollView>
                    </View>


                            <View style={{marginTop:5}}>
                                
                                <View style={{flexDirection:'row',marginBottom:15}}>
                                    <View>
                                        <Image source={require('../../lib/assets/img/award.png')} style={hdngIconz} />
                                    </View>
                                   
                                    <View >
                                    <TouchableOpacity onPress={()=>this.toggleScrollView()}> 
                                    <Text numberOfLines={1} style={hdng}>Achievements  <Icon name={this.state.ScrollView ? "md-remove-circle" :"md-add-circle"}  size={18} style={{ color: '#FF5B00' }}/></Text>
                                    </TouchableOpacity>
                                    </View>
                                </View> 
                                

                            {this.state.ScrollView && 
                               <View > 
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <View style={achiveCont}>
                                        <View style={{flex:1}}>
                                            <Image source={require('../../lib/assets/img/achievement.jpg')} style={achiveImg}/>
                                        </View> 
                                    </View>
                                    <View style={achiveCont}>
                                        <View style={{flex:1}}>
                                            <Image source={require('../../lib/assets/img/achievement.jpg')} style={achiveImg}/>
                                        </View> 
                                    </View>
                                    <View style={achiveCont}>
                                        <View style={{flex:1}}>
                                            <Image source={require('../../lib/assets/img/achievement.jpg')} style={achiveImg}/>
                                        </View> 
                                    </View>
                                    <View style={achiveCont}>
                                        <View style={{flex:1}}>
                                            <Image source={require('../../lib/assets/img/achievement.jpg')} style={achiveImg}/>
                                        </View> 
                                    </View>
                                    <View style={achiveCont}>
                                        <View style={{flex:1}}>
                                            <Image source={require('../../lib/assets/img/achievement.jpg')} style={achiveImg}/>
                                        </View> 
                                    </View>
                                    <View style={achiveCont}>
                                        <View style={{flex:1}}>
                                            <Image source={require('../../lib/assets/img/achievement.jpg')} style={achiveImg}/>
                                        </View> 
                                    </View>
                                </ScrollView>
                                </View>
                            }
                            </View> 
                            


                            <View >
                                <View style={{flexDirection:'row',marginBottom:15,marginTop:10}}>
                                    <View>
                                        <Image source={require('../../lib/assets/img/rating.png')} style={hdngIconz} />
                                    </View>
                                    <View>
                                        <Text numberOfLines={1} style={hdng}>Reviews & Rating</Text>
                                    </View>
                                </View>
                                
                                <View style={{paddingHorizontal:5}}>
                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
                                        <RatingReviews userName="Ravi Panchal" rrDesc="Nulla dolor ex aliqua amet deserunt non ipsum tempor id.   Irure enim incididunt aute minim tempor ipsum do cupidatat Lorem ullamco ut incididunt.  "/>
                                        <RatingReviews userName="Om Panchal" rrDesc="Nulla dolor ex aliqua amet deserunt non ipsum tempor id.   Irure enim incididunt aute minim tempor ipsum do cupidatat Lorem ullamco ut incididunt.  "/>
                                        <RatingReviews userName="Krishna Panchal" rrDesc="Nulla dolor ex aliqua amet deserunt non ipsum tempor id.   Irure enim incididunt aute minim tempor ipsum do cupidatat Lorem ullamco ut incididunt.  "/>
                                    </ScrollView>
                                </View>
                                 
                            </View>
                            
                            <View style={{marginBottom:10}}>
                                <View style={{flexDirection:'row',marginBottom:15,marginTop:10}}>
                                    <View>
                                        <Image source={require('../../lib/assets/img/accept.png')} style={hdngIconz} />
                                    </View>
                                    <View>
                                        <Text numberOfLines={1} style={hdng}>Terms & Conditions</Text>
                                    </View>
                                </View>
                                <Text numberOfLines={3} style={{textAlign:'justify'}} >
                                    Lorem incididunt qui esse in elit ex voluptate aute non fugiat occaecat aliquip consequat. Sunt culpa esse excepteur anim dolore aliquip. Consequat labore sint proident quis ea ea ea occaecat Lorem culpa pariatur. Aute magna veniam dolor consequat enim dolore dolore magna.
                                </Text>
                            </View>


                            <View style={{flexDirection:'row',marginTop:10,marginBottom:5}}>
                                <View>
                                    <Image source={require('../../lib/assets/img/share.png')} style={{height:20,width:20,marginTop:12, }} />
                                </View>
                                <View>
                                    <Text numberOfLines={1} style={{fontSize:16,fontWeight:'500',marginTop:10,paddingHorizontal:10}}>Share on:</Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <Image source={require('../../lib/assets/img/facebook.png')} style={socialIcon} />                                    
                                    <Image source={require('../../lib/assets/img/twitter.png')} style={socialIcon} />                                    
                                    <Image source={require('../../lib/assets/img/instagram.png')} style={socialIcon} />                                    
                                    <Image source={require('../../lib/assets/img/whatsapp.png')} style={socialIcon} />                                    
                                </View>
                            </View>

                        
                            

                        
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                            <View style={{marginTop:15,marginBottom:10}}>
                                <TouchableOpacity><Text style={btn}>Contact Us</Text></TouchableOpacity>
                            </View>
                            <View style={{marginTop:15,marginBottom:10}}>
                                <TouchableOpacity><Text style={btn}>Book Now</Text></TouchableOpacity>
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
    coverBg: { flex:1,width:width,height:width/2},
    dpContainer:{alignItems:'center'},
    dpCont:{flex:1,width:width/2.5,height:width/2.5,borderWidth:5,borderColor:'grey',marginTop:- width/6},
    dp:{flex:1,height:null,width:null,resizeMode:'stretch',backgroundColor:'#fff',},
    dpName:{color:'#274f8d',fontSize:18,fontWeight:'900',textAlign:'center',marginTop:5},
    dpDesc:{color:'#333',fontSize:15,fontWeight:'300',textAlign:'center',},
    mainContainer:{marginHorizontal:10},
    hdng:{fontSize:17,fontWeight:'500',marginTop:10,color:'#333'},
    descTxt:{fontSize:14,fontWeight:'400',textAlign:'justify',paddingLeft:25},
    srvcName:{fontSize:15,fontWeight:'500',color:'#777',paddingVertical:2,paddingLeft:25},
    socialIcon:{height:40,width:40,marginTop:12,marginHorizontal:5 },
    achiveImg:{flex:1,height:null,width:null,resizeMode:'contain',},
    achiveCont:{width:width / 4 - 13, height:width /4-13,marginRight:10,borderWidth:0.5,borderColor:'#bbb',marginBottom:20,},
    btn: {width:width/2-40,backgroundColor:'#FF5B00',paddingHorizontal:10,paddingVertical:10,fontSize:15,fontWeight:'500',color:'#fff',textAlign:'center',borderRadius:5,},
    slider:{width:width / 3-20, height:width /3+8,marginRight:10,borderWidth:0.5,borderColor:'#bbb',paddingVertical:0},
    slider2:{width:width / 2-20, height:width /2+8,marginRight:10,borderWidth:0.5,borderColor:'#bbb',paddingVertical:0},

    hdngIconz:{height:20,width:20,marginTop:12,marginRight:5 }
});