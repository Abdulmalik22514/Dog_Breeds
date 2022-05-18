import {combineReducers} from 'redux';
import dogsReducer from './breedStore/dogsReducer';
import authReducer from './authStore/authReducer';

export default combineReducers({
  dogsReducer,
  authReducer,
});
