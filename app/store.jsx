import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger())); 

export * from './reducers/campuses'; 
export * from './reducers/users'; 
export * from './reducers/singleUser'; 
export * from './reducers/singleCampus'; 
