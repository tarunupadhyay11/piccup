import {
    SET_LANGUAGE,MAKE_ERROR_FALSE,
    SIGN_IN_REQUEST, SIGN_IN_FAILURE, SIGN_IN_SUCCESS,
    SIGN_UP_REQUEST, SIGN_UP_FAILURE, SIGN_UP_SUCCESS,
    SIGN_OUT_SUCCESS,SIGN_OUT_REQUEST,SIGN_OUT_FAILURE,
    SET_USER_PROFILE
} from '../../actions/action-types.js';

const initialState = {
    sign_in: false,sign_up:false,
    isLoading: false,
    userData: {},
    error: false, errorMsg: null,
    responseCode: null,
    token: null,
    lang: 'en'
}

export const authReducer = (state = initialState, { type, payload }) => {
    // console.log(payload)
    switch (type) {
        case SIGN_IN_REQUEST:
            return { ...state, isLoading: true, error: false, errorMsg: null }
        case SIGN_IN_FAILURE:
            return { ...state, isLoading: false, error: true, sign_in: false, responseCode: payload.status, errorMsg: payload.data.msg }
        case SIGN_IN_SUCCESS:
            return {
                ...state, isLoading: false, token: payload.data.token, sign_in: true,
                userData: payload.data.userdata, error: false, responseCode: payload.status, errorMsg: payload.data.msg
            }
        case SIGN_OUT_FAILURE:
                return { ...state, isLoading: false, error: true, sign_in: false, responseCode: payload.status, errorMsg: payload.data.msg }    
        case SIGN_OUT_REQUEST:
                return { ...state, isLoading: true, error: false, errorMsg: null }    
        case SIGN_OUT_SUCCESS:
            return {
                ...state, isLoading: false, token: null, sign_in: false,
                userData: {}, error: false, responseCode: null, errorMsg: null
            }    
        case SIGN_UP_REQUEST:
            return { ...state, isLoading: true, error: false, errorMsg: null }
        case SIGN_UP_FAILURE:
            return { ...state, isLoading: false, error: true, sign_up: false, responseCode: payload.status, errorMsg: payload.data.msg }
        case SIGN_UP_SUCCESS:
            return {
                ...state, isLoading: false, sign_up: true,
                userData: payload.data.userdata, error: false, responseCode: payload.status, errorMsg: payload.data.msg
            }
        case SET_USER_PROFILE:
        return {
            ...state, isLoading: false, token: payload.data.token, sign_in: true,
            userData: payload.data.userdata, error: false, responseCode: payload.status, errorMsg: payload.data.msg
        }
        case SET_LANGUAGE:
            return { ...state, lang: payload }
        case MAKE_ERROR_FALSE:
            return { ...state, error: payload }
        default:
            return state
    }
}