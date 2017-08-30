import thunkMiddleware from 'redux-thunk';
import axios from 'axios'; 

const GET_STUDENTS_FROM_CAMPUS = 'GET_STUDENTS_FROM_CAMPUS'; 
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS'; 
const ADD_NEW_STUDENT = 'ADD_NEW_STUDENT'; 
const GET_SINGLE_STUDENT = 'GET_SINGLE_STUDENT'; 

export function getStudentsFromCampus(students) {
	const action = { type: GET_STUDENTS_FROM_CAMPUS, studentArr : students }; 
	return action; 
}

export function getAllStudents(students) {
	const action = { type: GET_ALL_STUDENTS, studentArr: students }; 
	return action; 
}

export function getSingleStudent(student) {
	const action = { type: GET_SINGLE_STUDENT, studentArr: student }; 
	return action; 
}

export function postNewStudent(student) {
	const action = { type: ADD_NEW_STUDENT, newStudent : student }
	return action; 
}

export function fetchStudentsFromCampus(campusId) {
	return function thunk (dispatch) {
		return axios.get('/api/campuses/users/' + campusId)
		.then(res => res.data)
		.then(users => {
			const action = getStudentsFromCampus(users); 
			dispatch(action); 
		})
	}
}

export function fetchAllStudents() {
	return function thunk (dispatch) {
		return axios.get('/api/users')
		.then(res => res.data)
		.then(students => {
			const action = getAllStudents(students); 
			dispatch(action); 
		})
	}
}

export function fetchSingleStudent(studentId) {
	return function thunk (dispatch) {
		return axios.get('/api/users/' + studentId) 
		.then(res => res.data) 
		.then(student => {
			const action = getSingleStudent(student); 
			dispatch(action); 
		})
	}
}

export function fetchNewStudent(student) {
	return function thunk (dispatch) {
		return axios.post('/api/users', student)
		.then(res => res.data)
		.then(student => {
			const action = getSingleStudent(student); 
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
    case GET_ALL_STUDENTS : 
    	return Object.assign({}, state, { studentArr: action.studentArr });
    case GET_SINGLE_STUDENT : 
    	return Object.assign({}, state, { studentArr: action.studentArr }); 
    case ADD_NEW_STUDENT : 
    	return Object.assign({}, state, { studentArr: state.studentArr.concat(action.newStudent)}); 
    default: 
    	return state
  }
};



