import thunkMiddleware from 'redux-thunk';
import axios from 'axios'; 

const GET_CAMPUS_FROM_STUDENT = 'GET_CAMPUS_FROM_STUDENT';
const GET_SINGLE_CAMPUS = 'GET_SINGLE_CAMPUS';

export function getSingleCampus(campus) {
	const action = { type : GET_SINGLE_CAMPUS, campus : campus }; 
	return action; 
}

export function getCampusFromStudent(campus) {
	const action = { type : GET_CAMPUS_FROM_STUDENT, campus : campus }; 
	return action
}

export function fetchSingleCampus(campusId, history) {
	console.log('/api/campuses/'+campusId)
	return function thunk (dispatch) {
		return axios.get('/api/campuses/'+campusId)
		.then(res => res.data)
		.then(campus => {
			if (history) history.push('/campuses/'+campusId);
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

export default function reducer(state = {}, action ) {
	switch(action.type) {
		case GET_SINGLE_CAMPUS : 
  		return action.campus; 
  	case GET_CAMPUS_FROM_STUDENT : 
  		return action.campus; 
  	default: 
    	return state
	}
}