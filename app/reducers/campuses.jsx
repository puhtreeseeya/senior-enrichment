import thunkMiddleware from 'redux-thunk';
import axios from 'axios'; 

const GET_CAMPUSES = 'GET_CAMPUSES'; 
const ADD_NEW_CAMPUS = 'ADD_NEW_CAMPUS'; 

 

export function getCampuses(campuses) {
	const action = { type : GET_CAMPUSES, campuses : campuses }; 
	return action; 
}

export function postNewCampus(campus) {
	const action = { type : ADD_NEW_CAMPUS, campus : campus }
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

export function fetchNewCampus(campus, history) {
	return function thunk (dispatch) {
		return axios.post('/api/campuses', campus)
		.then(res => res.data) 
		.then(newCampus => {
			const action = postNewCampus(newCampus); 
			dispatch(action); 
			if(history) history.push('/campuses/'+newCampus.id); 
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


export default function reducer(state = [], action) {
  switch(action.type) {
  	case GET_CAMPUSES : 
  		return action.campuses; 
  	case ADD_NEW_CAMPUS : 
  		return [...state, action.campus]; 
    default: 
    	return state
  }
};



