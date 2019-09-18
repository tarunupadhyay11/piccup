import React, {Component} from 'react';
import {StyleSheet,navigation, Text, View,StatusBar,Image,Dimensions,ScrollView,TouchableOpacity,ActivityIndicator } from 'react-native';
import {Form,Item,Icon,Input,Container,Content,Button, Footer, FooterTab} from 'native-base';
import Carousel from 'react-native-carousel-view';
import { copilot, walkthroughable, CopilotStep } from '@okgrow/react-native-copilot';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import { connect } from 'react-redux';
import {homeBanner,categoryList,newsCommunityList} from '../../redux/actions/action-common';
import renderIf from 'render-if';

const { width, height } = Dimensions.get('window');

//const WalkthroughableText = walkthroughable(Text);
//const WalkthroughableImage = walkthroughable(Image);
//const WalkthroughableTouchableOpacity = walkthroughable(TouchableOpacity);

class Home extends Component {
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
  constructor(props){
    super(props)
    this.state={search:''}
  }
  // For Walkthrough App
    // static propTypes = {
    //   start: PropTypes.func.isRequired,
    //   copilotEvents: PropTypes.shape({
    //     on: PropTypes.func.isRequired,
    //   }).isRequired,
    // };

    state = {
      secondStepActive: true,
      bannerList: [],
      loading: true,
    };
    

     componentDidMount() {
     // this.props.copilotEvents.on('stepChange', this.handleStepChange);
      //this.props.start();     
      const cr = {};
       this.props.homeBanner(cr);
       this.props.categoryList(cr);
       this.props.newsCommunityList(cr);
    }

    handleStepChange = (step) => {
      console.log(`Current step is: ${step.name}`);
    }
  // End Walkthrough App
 
  
  render() {
    const {homeBanner,categoryList,newCommunityList,isLoading} = this.props.common;   
    return (
      <LinearGradient colors={['#cdfef9', '#ffffff', '#fcece8']} style={{flex:1}}>
      <Container style={{backgroundColor:'transparent'}}>
       {/* <Header style={{backgroundColor:'transparent',height:65}}>
         <Left style={{flex:1,marginLeft:5}}>
        <TouchableOpacity  omPress={()=>this.props.navigation.dispatch(DrawerActions.toggleDrawer())}>
             <Icon name="md-menu" style={{fontSize:35}} />
        </TouchableOpacity>
           {/* <Image
            style={{width: 40, height: 50}}
            source={require('../img/menu.png')}
           /> 
         </Left>
         <Body style={{justifyContent:'center',alignItems:'center'}}>
           <Image
            style={{flex:1, width: 50, height:50,resizeMode:'contain'}}
            source={require('../../lib/assets/img/logo.png')}
           />
         </Body>
         <Right style={{flex:1,marginRight:5}}>
           <TouchableOpacity onPress={()=> this.props.navigation.navigate('LockeRooms')}>
           <CopilotStep style={{marginTop:10,paddingVertical:10}} active={this.state.secondStepActive} text="For chatting using App" order={1} name="ChatImage">
             <WalkthroughableImage
               style={{width: 40, height:40}}
               source={require('../../lib/assets/img/Top-Locker-Icon.png')}
              />
           </CopilotStep>
           </TouchableOpacity>

         </Right>
       </Header> */}
       <Content style={styles.container}>
       {isLoading ? (
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size={'large'} /> 
                </View>
        ) : (
       <View style={{marginTop:2}}>

                    <Carousel
                    width={width}
                    height={width/3}
                    delay={3000}
                    indicatorAtBottom={true}
                    indicatorSize={20}
                    indicatorText="✽"
                    indicatorColor="orange"
                    >
                     {homeBanner.map((banner, i)=>(
                    <View style={styles.sliderView} key={i}>
                        <Image style={styles.sliderImg} source={{uri: banner.img}}  />
                    </View>
                    ))}
                    </Carousel>

       </View>
       )}



       {/* <View >


            <Form style={{marginTop:15}}>
               <Item style={{marginLeft: 0, height:50,borderRadius: 0.5,shadowColor: '#ddd', shadowOffset: { width:10, height:0 },shadowOpacity:0.5,elevation:1,zIndex:999}}>
              
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('EventList')}>
               <Icon name="md-search" style={{fontSize:25,paddingHorizontal:15,}} />
               </TouchableOpacity>
                <Input
                  placeholder="Search services..."
                  placeholderTextColor='rgba(0, 0, 0,1)'
                  value={this.state.search}
                  onChangeText={(value) =>{this.setState({'search':value})}}
                />
                <Image
                 style={{width:50,height:50,marginLeft: 0}}
                 source={require('../../lib/assets/img/Filter-Icon.png')}
                />
               </Item>
            </Form>
          </View> */}
          

          
      



        <View >
        {isLoading ? (
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size={'large'} /> 
                </View>
        ) : (
          <View style={{marginTop:10,marginBottom:10,paddingHorizontal:0}}> 
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
                    {categoryList.map((category, i)=>(                    
                       <View style={{width:width / 4-12.5, height:width/3.3,marginRight:10,marginBottom:10,}} key={i}>
                            <View style={{flex:1}}>
                                <Image source={{uri: category.image}} style={{flex:1,height:null,width:null,resizeMode:'contain',borderRadius:50}}/>
                            </View> 
                            <View><Text style={{textAlign:'center',fontWeight:'500',color:'#0A3C3B'}} numberOfLines={1}>{category.name}</Text></View>
                        </View>
                    ))}
                    </ScrollView>
                </View>
        )}

          <View style={{borderWidth:0.5,borderColor:'#e7e7e7'}} />
 
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{marginTop:15}} >
              <Text style={{fontWeight:'bold',fontSize:18,color:'#555'}}>Trending</Text>
            </View>
            <View style={{marginTop:15}} >
            <Button  style ={{backgroundColor:'#FF5B00',height:30,}}>
                 <Text style={{color:'white',textAlign:'center',paddingHorizontal:10,fontSize:14,fontWeight:'700'}}>View More</Text>
              </Button>
            </View>
          </View>
 
          <View style={{marginTop:10,marginBottom:10,paddingHorizontal:0}}> 
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
                        <View style={{width:width / 2-12.5, height:width/2,marginRight:1,marginBottom:10,}}>
                            <View style={{flex:1}}>
                                <Image source={require('../../lib/assets/img/meeting.jpg')} style={{flex:1,height:null,width:null,resizeMode:'contain',}}/>
                            </View> 
                            <View><Text style={{textAlign:'center',fontWeight:'500',color:'#0A3C3B'}} numberOfLines={1}>Lorem Ipsum</Text></View>
                        </View>
                        <View style={{width:width / 2-12.5, height:width/2,marginRight:1,marginBottom:10,}}>
                            <View style={{flex:1}}>
                                <Image source={require('../../lib/assets/img/fire2.jpg')} style={{flex:1,height:null,width:null,resizeMode:'contain',}}/>
                            </View> 
                            <View><Text style={{textAlign:'center',fontWeight:'500',color:'#0A3C3B'}} numberOfLines={1}>Lorem Ipsum</Text></View>
                        </View>
                        <View style={{width:width / 2, height:width/2,marginRight:1,marginBottom:10,}}>
                            <View style={{flex:1}}>
                                <Image source={require('../../lib/assets/img/building.png')} style={{flex:1,height:null,width:null,resizeMode:'contain',}}/>
                            </View> 
                            <View><Text style={{textAlign:'center',fontWeight:'500',color:'#0A3C3B'}} numberOfLines={1}>Lorem Ipsum</Text></View>
                        </View>
                        <View style={{width:width / 2, height:width/2,marginRight:1,marginBottom:10,}}>
                            <View style={{flex:1}}>
                                <Image source={require('../../lib/assets/img/balloon.jpg')} style={{flex:1,height:null,width:null,resizeMode:'contain',}}/>
                            </View> 
                            <View><Text style={{textAlign:'center',fontWeight:'500',color:'#0A3C3B'}} numberOfLines={1}>Lorem Ipsum</Text></View>
                        </View>
                        <View style={{width:width / 2, height:width/2,marginRight:1,marginBottom:10,}}>
                            <View style={{flex:1}}>
                                <Image source={require('../../lib/assets/img/dance.jpeg')} style={{flex:1,height:null,width:null,resizeMode:'contain',}}/>
                            </View> 
                            <View><Text style={{textAlign:'center',fontWeight:'500',color:'#0A3C3B'}} numberOfLines={1}>Lorem Ipsum</Text></View>
                        </View> 
                    </ScrollView>
                </View>


          <View style={{borderWidth:0.5,borderColor:'#e7e7e7',}} />


          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{marginTop:15}} >
              <Text style={{fontWeight:'bold',fontSize:18,color:'#555'}}>News & Community</Text>
            </View>
            <View style={{marginTop:15}} >
              <Button  style ={{backgroundColor:'#FF5B00',height:30,}}>
                 <Text style={{color:'white',textAlign:'center',paddingHorizontal:10,fontSize:14,fontWeight:'700'}}>View More</Text>
              </Button>
            </View>
          </View>
          
        </View>
        {isLoading ? (
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size={'large'} /> 
                </View>
        ) : (
        <View style={{marginTop:5 , alignItems:'center',marginTop:15}}>
          <Carousel width={width} height={70} delay={5000} indicatorAtBottom={true}>
          {newCommunityList.map((news, i)=>(                         
              <View style={{ alignItems:'center',padding:10}}  key={i}>
             <Text>{news.title}  </Text>
             {/* <Text> {news.short_description} </Text> */}
            </View>
          ))}

          
{/* 
            <View style={{ alignItems:'center'}} >
             <Text>Malaysian activist under police probe after  </Text>
             <Text> LGBT speech at the United Nations </Text>
            </View>
            <View style={{alignItems:'center'}}>
             <Text>A conversation with the creator of FindyourB,  </Text>
             <Text> a podcast for soul-searching Kazakh millennials</Text>
            </View>
            <View style={{ alignItems:'center'}}>
             <Text> Leica promo video referencing Tiananmen </Text>
             <Text> Square massacre  went viral on Chinese media.  </Text>
            </View> */}
          </Carousel>
        </View>
        )}
        <View style={{marginTop:20}}>
          <Image
           style={{width: width, height:100,marginRight:5}}
           source={require('../../lib/assets/img/kei-b_events-neweventbanner-b6de23e0-d280-6d9f-cafb7e2054ada5d2.png')}
          />
        </View>
       </Content>
       <Footer style={{backgroundColor:'transparent',borderTopWidth:0.5,borderColor:'#888'}}>
          <FooterTab style={{backgroundColor:'transparent',flex:1,alignItems:'center'}}>
            <View style={{flexDirection:'column',alignItems:'center',marginLeft:30}}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('home')}>
                <Image
                  style={{width:40, height:40}}
                  source={require('../../lib/assets/img/Home-Icon.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'column',alignItems:'center'}}>
              <Image
               style={{width:40, height:40}}
               source={require('../../lib/assets/img/Footer-locker-room-Icon.png')}
              />
            </View>            
            <View style={{flexDirection:'column',alignItems:'center'}}>
              <Image
               style={{width:40, height:40}}
               source={require('../../lib/assets/img/Calender-Icon.png')}
              />
            </View>
            {/* <View style={{flexDirection:'column',alignItems:'center'}}>
              {<CopilotStep active={this.state.secondStepActive} text="From here you can find location" order={3} name="LocationImage">
                <WalkthroughableImage
                    style={{width:40, height:40}}
                    source={require('../../lib/assets/img/Location-Icon.png')}
                />
              </CopilotStep> 
              <Image
               style={{width:40, height:40}}
               source={require('../../lib/assets/img/Location-Icon.png')}
              />
            </View>       */}
            <View style={{flexDirection:'column',alignItems:'center'}}>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('LockeRooms')}>
              <Image
               style={{width:40, height:40}}
               source={require('../../lib/assets/img/Locker-Icon.png')}
              />
              </TouchableOpacity>
            </View> 
            <View style={{flexDirection:'column',alignItems:'center',marginRight:25}}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('Organizer')}>
                  <Image
                  style={{width:40, height:40}}
                  source={require('../../lib/assets/img/User-Icon.png')}
                  />
              </TouchableOpacity>
            </View>     
          </FooterTab>
        </Footer>
      </Container>
    </LinearGradient>   
    );
  }
}
// export default copilot({
//   animated: true, // Can be true or false
//   overlay: 'svg', // Can be either view or svg
// })(Home);

const mapStateToProps = (state) =>{
  return { ... state};
};

const mapDispatchToProps ={
  homeBanner,
  categoryList,
  newsCommunityList
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);


const styles = StyleSheet.create({
  container: {
     marginLeft:10,
     marginRight:10,
     marginTop:10
  },
  button: {
    backgroundColor: '#2980b9',
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection:'row',
    justifyContent:'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },

  sliderImg:{resizeMode:'cover',width:width-1,height:width/3,},
    sliderView:{borderWidth:0.5,borderColor:'#ccc' },
});
