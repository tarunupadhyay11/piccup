import {
    SET_LANGUAGE,MAKE_ERROR_FALSE,
    FETCHING_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE,UPDATE_USERPROFILE_SUCCESS
} from '../../actions/action-types.js';

const initialState = {
    userProfile: {},
    isFetching: false,
    error: false
}

export const userReducer = (state = initialState, { type, payload }) => {

    switch(type) {
        case FETCHING_USER:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                userProfile: payload.data.data
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        case UPDATE_USERPROFILE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                userProfile: payload.data.data
            }    
        default:
            return state
    }
}