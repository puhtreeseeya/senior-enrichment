import thunkMiddleware from 'redux-thunk';
import axios from 'axios'; 

const GET_STUDENTS_FROM_CAMPUS = 'GET_STUDENTS_FROM_CAMPUS'; 

export function getStudentsFromCampus(students) {
	const action = { type: GET_STUDENTS_FROM_CAMPUS, studentArr : students }; 
	return action; 
}

export function fetchStudentsFromCampus(campusId) {
	console.log(campusId);
	return function thunk (dispatch) {
		return axios.get('/api/campuses/users/' + campusId)
		.then(res => res.data)
		.then(users => {
			console.log(users); 
			const action = getStudentsFromCampus(users); 
			dispatch(action); 
		})
	}
}


//initial state
const initialState = {
	studentArr : []
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
  	case GET_STUDENTS_FROM_CAMPUS : 
  		return Object.assign({}, state, { studentArr: action.studentArr }); 
    default: 
    	return state
  }
};



