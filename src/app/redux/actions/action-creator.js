import {
    SET_LANGUAGE,MAKE_ERROR_FALSE,
    SIGN_IN_REQUEST, SIGN_IN_FAILURE, SIGN_IN_SUCCESS,
    SIGN_UP_REQUEST, SIGN_UP_FAILURE, SIGN_UP_SUCCESS,
    SIGN_OUT_SUCCESS,SIGN_OUT_REQUEST,SIGN_OUT_FAILURE,
    FETCHING_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE
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

export function signInRequest() {
    return {
        type: SIGN_IN_REQUEST
    }
}

export function signInFailure(payload) {
    return {
        type: SIGN_IN_FAILURE,
        payload: payload
    }
}

export function signInSuccess(payload) { 
     return {
         type: SIGN_IN_SUCCESS,
         payload: payload
     }
}

// signin-thunk 

export function signIn(credentials, type) {
    console.log(type) ;
    return async dispatch => {
        dispatch(signInRequest())
        try{
            
            let response;
            let urllink;     
            if (type == "user") { 
                urllink = 'http://piccupkw.com/piccup/api/index.php/UserLogin';
            } else if (type == "vender") {
                urllink = 'http://piccupkw.com/piccup/api/index.php/UserLogin';
            } else if (type == "professional") {
                urllink = 'http://piccupkw.com/piccup/api/index.php/UserLogin';
            }
     
            response = await  axios({
                method : 'POST', url :urllink,data:credentials ,
                headers:{
                    'content-type':'application/json'
                }
            });

            console.log(response);            

            if(response.status == 202){
                dispatch(signInFailure(response))
            }else
             if(response.status == 200){ 
                if(response.data.status == 'success'){ 
                dispatch(signInSuccess(response))
                }
                else{
                    let data = {
                        msg : "Email or Password is incorrect"
                    }
                     response = {
                        data : data,
                        status : 404
                    }
                    dispatch(signInFailure(response))
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
            dispatch(signInFailure(response))
        }
    }
}
// signin action finish

export function signOutRequest() {
    return {
        type: SIGN_OUT_REQUEST
    }
}

export function signOutSuccess() { 
    return {
        type: SIGN_OUT_SUCCESS
    }
}

export function signOutFailure() {
    return {
        type: SIGN_OUT_FAILURE        
    }
}

export function signOut() {
    return async dispatch => {
       dispatch(signOutRequest())
        try{
            dispatch(signOutSuccess())
        }catch(e){
            let data = {
                msg : "There is Something Wrong in your network"
            }
            let response = {
                data : data,
                status : 404
            }
            console.log(e)
            dispatch(signOutFailure(response))
        }     
    }   
}



// FOR SIGN UP USER
export function signUpRequest() {
    return {
        type: SIGN_UP_REQUEST
    }
}

export function signUpFailure(payload) {
    return {
        type: SIGN_UP_FAILURE,
        payload: payload
    }
}

export function signUpSuccess(payload) {
    console.log('sign up response',payload);
    return {
        type: SIGN_UP_SUCCESS,
        payload: payload
    }
}

// REDUX THUNK



export function signUp(credentials, type) { 
    console.log('in sign up', credentials , type);   
       
    
    return  async dispatch => {
    
        dispatch(signUpRequest())
try{
        let response;  
        let urllink;     
       
        if (type == "user") { 
              urllink = 'http://piccupkw.com/piccup/api/index.php/UserSignup';
        } else if (type == "vender") {
            urllink = 'http://piccupkw.com/piccup/api/index.php/UserSignup';
        } else if (type == "professional") {
            urllink = 'http://piccupkw.com/piccup/api/index.php/UserSignup';
        }

        response = await  axios({
            method : 'POST', url :urllink,data:credentials ,
            headers:{
                'content-type':'multipart/form-data'
            }
        });

        console.log(response , 'signUp response');
        if (response.status == 200 ) { 
            if(response.data.status == 'success'){ 
                dispatch(signUpSuccess(response))
                }
                else{
                    let data = {
                        msg : "Email or Password is incorrect"
                    }
                     response = {
                        data : data,
                        status : 404
                    }
                    dispatch(signUpFailure(response))
                }

           
        } 
        else if (response.status == 200 ) {
            dispatch(signUpFailure(response))
        }
        else if (response.status == 202) {
            dispatch(signUpFailure(response))
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
        dispatch(signUpFailure(response))
    }
    }
}


export function userRequest() {
    return {
        type: FETCHING_USER
    }
}

export function userFailure(payload) {
    return {
        type: FETCH_USER_FAILURE,
        payload: payload
    }
}

export function userSuccess(payload) {   
    return {
        type: FETCH_USER_SUCCESS,
        payload: payload
    }
}

export function fetchUserprofile(credentials) {        
    
    return  async dispatch => {
    
        dispatch(userRequest())
try{
        let response;  
        let urllink;     
       
        if (type == "user") { 
              urllink = 'http://piccupkw.com/piccup/api/index.php/GetUserProfile';
        } else if (type == "vender") {
            urllink = 'http://piccupkw.com/piccup/api/index.php/GetUserProfile';
        } else if (type == "professional") {
            urllink = 'http://piccupkw.com/piccup/api/index.php/GetUserProfile';
        }

        response = await  axios({
            method : 'POST', url :urllink,data:credentials ,
            headers:{
                'content-type':'multipart/form-data'
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
        dispatch(userFailure(response))
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
