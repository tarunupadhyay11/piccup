import {
    SET_LANGUAGE,MAKE_ERROR_FALSE,
    FETCHING_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE,SET_USER_PROFILE
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

export function setUserProfile(payload) {
    return {
        type: SET_USER_PROFILE,
        payload: payload
    }
}


export function userRequest() {
    return {
        type: FETCHING_USER
    }
}

export function userFailure() {
    return {
        type: FETCH_USER_FAILURE
    }
}

export function userSuccess(payload) {   
    return {
        type: FETCH_USER_SUCCESS,
        payload:payload
    }
}

export function fetchUserprofile(credentials) {        
   
    return  async dispatch => {
    
        dispatch(userRequest())
try{
        let response;  
        let urllink;     
       
        urllink = 'http://piccupkw.com/piccup/api/index.php/GetUserProfile';

        response = await  axios({
            method : 'POST', url :urllink,data:credentials ,
            headers:{
                'content-type':'application/json'
            }
        });
 
        console.log(response , 'response');
        if (response.status == 200 ) { 
            if(response.data.status == 'success'){  
                dispatch(userSuccess(response))
                }
                else{
                    let data = {
                        msg : "id is incorrect"
                    }
                     response = {
                        data : data,
                        status : 404
                    }
                    dispatch(userFailure(response))
                }

           
        } 
        else if (response.status == 200 ) {
            dispatch(userFailure(response))
        }
        else if (response.status == 202) {
            dispatch(userFailure(response))
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
        dispatch(userFailure(response.data))
    }
    }
}

export function updateProfileSuccess(payload) {   
    return {
        type: FETCH_USER_SUCCESS,
        payload:payload
    }
}

export function updateUserprofile(credentials,token) {        
   
    return  async dispatch => {
    
        dispatch(userRequest())
try{
        let response;  
        let urllink;     
       
        urllink = 'http://piccupkw.com/piccup/api/index.php/UpdateUserProfile';

        response = await  axios({
            method : 'POST', url :urllink,data:credentials ,
            headers:{
                'content-type':'application/json',
                'ACCESS-TOKEN':token
            }
        });
 //alert(JSON.stringify(response));
        console.log(response , 'response');
        if (response.status == 200 ) { 
            if(response.data.status == 'success'){  
                dispatch(setUserProfile(response));
                alert(response.data.msg);
                //dispatch(updateProfileSuccess(response));
               // const udata = response.data.userdata;               
                }
                else{
                    let data = {
                        msg : "Authentification fail"
                    }
                     response = {
                        data : data,
                        status : 404
                    }
                    dispatch(userFailure(response))
                }

           
        } 
        else if (response.status == 200 ) {
            dispatch(userFailure(response))
        }
        else if (response.status == 202) {
            dispatch(userFailure(response))
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
        dispatch(userFailure(response.data))
    }
    }
}

// For Error False

export function makeErrorFalse() {
    return {
        type: MAKE_ERROR_FALSE,
        payload:false
    }
}
