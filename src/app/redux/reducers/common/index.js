import {
    HOME_BANNER_SUCCESS,SET_LANGUAGE,MAKE_ERROR_FALSE,COMMON_ACTION_FAILURE,
    COMMON_ACTION_REQUEST,CATEGORY_SUCCESS,NEWS_COMMUNITY_SUCCESS
} from '../../actions/action-types.js';

const initialState = {   
    isLoading: false,
    homeBanner: [],
    categoryList: [],
    newCommunityList: [],
    error: false, errorMsg: null,
    responseCode: null,   
    lang: 'en'
}

export const commonReducer = (state = initialState, { type, payload }) => {
    // console.log(payload)
    switch (type) {
        case COMMON_ACTION_REQUEST:
            return { ...state, isLoading: true, error: false, errorMsg: null }
        case COMMON_ACTION_FAILURE:
            return { ...state, isLoading: false, error: true, responseCode: payload.status, errorMsg: payload.data.message }
        case HOME_BANNER_SUCCESS:
            return {
                ...state, isLoading: false,
                homeBanner: payload.data.data, error: false, responseCode: payload.status, errorMsg: payload.data.message
            } 
        case CATEGORY_SUCCESS:
            return {
                ...state, isLoading: false,
                categoryList: payload.data.data, error: false, responseCode: payload.status, errorMsg: payload.data.message
             }   
        case NEWS_COMMUNITY_SUCCESS:
        return {
            ...state, isLoading: false,
            newCommunityList: payload.data.data, error: false, responseCode: payload.status, errorMsg: payload.data.message
            }               
        case SET_LANGUAGE:
            return { ...state, lang: payload }
        case MAKE_ERROR_FALSE:
            return { ...state, error: payload }
        default:
            return state
    }
}