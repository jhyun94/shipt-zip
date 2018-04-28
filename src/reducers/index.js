import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import storeReducer from './storeReducer';

export default combineReducers({
	form: formReducer,
	stores: storeReducer
})