import thunkMiddleware from 'redux-thunk';
import axios from 'axios'; 

const GET_SINGLE_STUDENT = 'GET_SINGLE_STUDENT'; 

export function getSingleStudent(student) {
	const action = { type: GET_SINGLE_STUDENT, student: student }; 
	return action; 
}

export function fetchSingleStudent(studentId, history) {
	return function thunk (dispatch) {
		return axios.get('/api/users/' + studentId) 
		.then(res => res.data) 
		.then(student => {
			const action = getSingleStudent(student); 
			dispatch(action); 
			if(history) history.push(studentId); 
		})
	}
}

export default function reducer(state = {}, action) {
	switch(action.type) {
		case GET_SINGLE_STUDENT : 
			return action.student; 
		default: 
			return state; 
	}
}

