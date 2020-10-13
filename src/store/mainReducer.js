import usersReducer from './UsersReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';


export default combineReducers({
    usersState: usersReducer,
    firebase: firebaseReducer,
});