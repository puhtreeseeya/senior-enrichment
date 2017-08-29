import thunkMiddleware from 'redux-thunk';
import axios from 'axios'; 

const GET_CAMPUSES = 'GET_CAMPUSES'; 

export function getCampuses(campuses) {
	const action = { type: GET_CAMPUSES, campusArr : campuses }; 
	return action; 
}

export function fetchAllCampuses() {
	return function thunk (dispatch) {
		return axios.get('/api/campuses')
		.then(res => res.data)
		.then(campuses => {
			const action = getCampuses(campuses); 
			dispatch(action); 
		})
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
    default: 
    	return state
  }
};



