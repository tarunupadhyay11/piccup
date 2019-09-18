import {combineReducers} from 'redux';
import { authReducer } from './reducers/auth';
import { userReducer } from './reducers/user';
import { commonReducer } from './reducers/common';

export default combineReducers({
    auth : authReducer,
    user: userReducer,
    common: commonReducer
}); 