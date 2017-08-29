import { createStore, applyMiddleware, combineReducers } from 'redux'; 
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import campuses from './campuses'; 

const reducer = combineReducers({
	campuses 
});  

export default reducer; 




//export action creators 