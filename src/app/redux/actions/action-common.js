import {
    HOME_BANNER_SUCCESS,SET_LANGUAGE,MAKE_ERROR_FALSE,COMMON_ACTION_FAILURE,
    COMMON_ACTION_REQUEST,CATEGORY_SUCCESS,NEWS_COMMUNITY_SUCCESS
} from './action-types';
// import axiosinstance from '../../utils/api/axiosinstance';
import axios from 'axios';
import qs from 'qs';

// for setting language

export function setLanguage(payload) {
    return {
        type: SET_LANGUAGE,
        payload: payload
    }
}

//  for sign in user

export function commonActionRequest() {
    return {
        type: COMMON_ACTION_REQUEST
    }
}

export function actionCommonFailure(payload) {
    return {
        type: COMMON_ACTION_FAILURE,
        payload: payload
    }
}

export function homeBannerSuccess(payload) { 
     return {
         type: HOME_BANNER_SUCCESS,
         payload: payload
     }
}



export function homeBanner(credentials) {
   // console.log(type) ;
    return async dispatch => {
        dispatch(commonActionRequest())
        try{
            
            let response;
            let urllink = 'http://piccupkw.com/piccup/api/index.php/getMobileSlider';            
     
            response = await  axios({
                method : 'POST', url :urllink,data:credentials ,
                headers:{
                    'content-type':'application/json'
                }
            });

            console.log(response);         
            

            if(response.status == 202){
                dispatch(actionCommonFailure(response))
            }else
             if(response.status == 200){ 
                if(response.data.status == 'success'){ 
                dispatch(homeBannerSuccess(response))
                }
                else{
                    let data = {
                        msg : "Internet error"
                    }
                     response = {
                        data : data,
                        status : 404
                    }
                    dispatch(actionCommonFailure(response))
                }
            }
        }catch(e){
            let data = {
                msg : "There is Something Wrong in your network"
            }
            let response = {
                data : data,
                status : 404
            }
            console.log(e)
            dispatch(actionCommonFailure(response))
        }
    }
}


export function categorySuccess(payload) { 
    return {
        type: CATEGORY_SUCCESS,
        payload: payload
    }
}

export function categoryList(credentials) {
    // console.log(type) ;
     return async dispatch => {
         dispatch(commonActionRequest())
         try{
             
             let response;
             let urllink = 'http://piccupkw.com/piccup/api/index.php/getCategoryList';            
      
             response = await  axios({
                 method : 'POST', url :urllink,data:credentials ,
                 headers:{
                     'content-type':'application/json'
                 }
             });
 
             console.log(response);         
             
 
             if(response.status == 202){
                 dispatch(actionCommonFailure(response))
             }else
              if(response.status == 200){ 
                 if(response.data.status == 'success'){ 
                 dispatch(categorySuccess(response))
                 }
                 else{
                     let data = {
                         msg : "Internet error"
                     }
                      response = {
                         data : data,
                         status : 404
                     }
                     dispatch(actionCommonFailure(response))
                 }
             }
         }catch(e){
             let data = {
                 msg : "There is Something Wrong in your network"
             }
             let response = {
                 data : data,
                 status : 404
             }
             console.log(e)
             dispatch(actionCommonFailure(response))
         }
     }
 }


 export function newsCommunitySuccess(payload) { 
    return {
        type: NEWS_COMMUNITY_SUCCESS,
        payload: payload
    }
}

export function newsCommunityList(credentials) {
    // console.log(type) ;
     return async dispatch => {
         dispatch(commonActionRequest())
         try{
             
             let response;
             let urllink = 'http://piccupkw.com/piccup/api/index.php/getNewsCommunityList';            
      
             response = await  axios({
                 method : 'POST', url :urllink,data:credentials ,
                 headers:{
                     'content-type':'application/json'
                 }
             });
 
             console.log(response);         
             
 
             if(response.status == 202){
                 dispatch(actionCommonFailure(response))
             }else
              if(response.status == 200){ 
                 if(response.data.status == 'success'){ 
                 dispatch(newsCommunitySuccess(response))
                 }
                 else{
                     let data = {
                         msg : "Internet error"
                     }
                      response = {
                         data : data,
                         status : 404
                     }
                     dispatch(actionCommonFailure(response))
                 }
             }
         }catch(e){
             let data = {
                 msg : "There is Something Wrong in your network"
             }
             let response = {
                 data : data,
                 status : 404
             }
             console.log(e)
             dispatch(actionCommonFailure(response))
         }
     }
 }
