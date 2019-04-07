import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
// import { firebaseReducer } from 'redux-firestore'; 
import { firebaseReducer } from 'react-redux-firebase';
import projectDetailReducer from './projectDetailReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    projectDetail: projectDetailReducer,
    firebase: firebaseReducer
})

export default rootReducer;

