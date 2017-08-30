import { createStore, applyMiddleware, combineReducers } from 'redux'; 
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import campuses from './campuses'; 
import users from './users'; 

const reducer = combineReducers({
	campuses, 
	users
});  

export default reducer; 




//export action creators 