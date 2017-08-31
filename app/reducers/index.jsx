import { createStore, applyMiddleware, combineReducers } from 'redux'; 
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import campuses from './campuses'; 
import users from './users';
import singleCampus from './singleCampus'; 
import singleStudent from './singleUser'; 

const reducer = combineReducers({
	campuses, 
	users, 
	singleCampus, 
	singleStudent
});  

export default reducer; 




//export action creators 