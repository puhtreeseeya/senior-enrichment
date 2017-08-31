import thunkMiddleware from 'redux-thunk';
import axios from 'axios'; 

const GET_CAMPUSES = 'GET_CAMPUSES'; 
const ADD_NEW_CAMPUS = 'ADD_NEW_CAMPUS'; 
const GET_CAMPUS_FROM_STUDENT = 'GET_CAMPUS_FROM_STUDENT';
const GET_SINGLE_CAMPUS = 'GET_SINGLE_CAMPUS';  

export function getCampuses(campuses) {
	const action = { type : GET_CAMPUSES, campusArr : campuses }; 
	return action; 
}

export function getSingleCampus(campus) {
	const action = { type : GET_SINGLE_CAMPUS, campusArr : campus }; 
	return action; 
}

export function getCampusFromStudent(campus) {
	const action = { type : GET_CAMPUS_FROM_STUDENT, campusArr : campus }; 
	return action
}

export function postNewCampus(campus) {
	const action = { type : ADD_NEW_CAMPUS, newCampus : campus }
	return action 
}

export function fetchAllCampuses(history) {
	return function thunk (dispatch) {
		return axios.get('/api/campuses')
		.then(res => res.data)
		.then(campuses => {
			console.log(history); 
			const action = getCampuses(campuses); 
			dispatch(action); 
			if(history) history.push("/"); 
		})
	}
}

export function fetchSingleCampus(campusId, history) {
	console.log("HELLO"); 
	console.log('/api/campuses/'+campusId)
	return function thunk (dispatch) {
		return axios.get('/api/campuses/'+campusId)
		.then(res => res.data)
		.then(campus => {
			console.log(campus);  
			history.push('/campuses/'+campusId);
			const action = getSingleCampus(campus); 
			dispatch(action); 
			
		})
	}
}

export function fetchCampusFromStudent(studentId) { 
	return function thunk (dispatch) {
		return axios.get(`/api/users/campuses/${studentId}`)
		.then(res => res.data)
		.then(campus => {
			const action = getCampusFromStudent(campus)
			dispatch(action); 
		})
	}
}

export function fetchNewCampus(campus) {
	return function thunk (dispatch) {
		return axios.post('/api/campuses', campus)
		.then(res => res.data) 
		.then(campus => {
			const action = postNewCampus(campus); 
			dispatch(action); 
		}) 
	}
}

export function fetchDeleteCampus(campusId) {
	return function thunk (dispatch) {
		return axios.post('/api/campuses/delete/' + campusId, {})
	}
}

export function fetchUpdateCampusName(campusId, campus) {
	return function thunk (dispatch) {
		return axios.post('/api/campuses/update_name/' + campusId, campus); 
	}
}

export function fetchUpdateCampusImage(campusId, campus) {
	return function thunk (dispatch) {
		return axios.post('/api/campuses/update_image/' + campusId, campus); 
	}
}




//initial state
const initialState = {
	campusArr : []
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
  	case GET_CAMPUSES : 
  		return Object.assign({}, state, { campusArr: action.campusArr }); 
  	case GET_SINGLE_CAMPUS : 
  		return Object.assign({}, state, { campusArr : action.campusArr }); 
  	case GET_CAMPUS_FROM_STUDENT : 
  		return Object.assign({}, state, { campusArr : action.campusArr }); 
  	case ADD_NEW_CAMPUS : 
  		return Object.assign({}, state, { campusArr : state.campusArr.concat(action.newCampus)}); 
    default: 
    	return state
  }
};



