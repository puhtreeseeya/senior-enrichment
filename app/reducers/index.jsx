import { createStore, applyMiddleware, combineReducers } from 'redux'; 
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import campuses from './campuses'; 

export default combineReducers({
	campuses 
});  
