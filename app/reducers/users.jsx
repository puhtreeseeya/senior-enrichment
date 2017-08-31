import thunkMiddleware from 'redux-thunk';
import axios from 'axios'; 


const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS'; 
const ADD_NEW_STUDENT = 'ADD_NEW_STUDENT'; 
const GET_STUDENTS_FROM_CAMPUS = 'GET_STUDENTS_FROM_CAMPUS'; 

export function getStudentsFromCampus(students) {
	const action = { type: GET_STUDENTS_FROM_CAMPUS, students : students }; 
	return action; 
}

export function getAllStudents(students) {
	const action = { type: GET_ALL_STUDENTS, students: students }; 
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

export function fetchAllStudents(history) {
	return function thunk (dispatch) {
		return axios.get('/api/users')
		.then(res => res.data)
		.then(students => {
			const action = getAllStudents(students); 
			dispatch(action); 
			if(history) history.push('/students/'); 
		})
	}
}

export function fetchNewStudent(student, history) {
	console.log("hello", history); 
	return function thunk (dispatch) {
		return axios.post('/api/users', student)
		.then(res => res.data)
		.then(newStudent => {
			console.log(newStudent); 
			const action = postNewStudent(newStudent); 
			dispatch(action); 
			if(history) history.push('/students/'+newStudent.id); 
		})
	}
}

export function fetchDeleteStudent(studentId) {
	return function thunk (dispatch) {
		return axios.post('/api/users/delete/' + studentId, {})
	}
}

export function fetchUpdateStudentCampus(studentId, campusId) {
	console.log("SUPPPP"); 
	return function thunk (dispatch) {
		return axios.post('/api/users/update_campus/' + studentId, { campusId : campusId }) 
	}
}

export function fetchUpdateStudentEmail(studentId, email) {
	return function thunk (dispatch) {
		return axios.post('/api/users/update_email/' + studentId, { email : email })
	}
}

export default function reducer(state = [], action) {
  switch(action.type) {
  	case GET_STUDENTS_FROM_CAMPUS : 
  		return action.students; 
    case GET_ALL_STUDENTS : 
    	return action.students; 
    case ADD_NEW_STUDENT : 
    	return [...state, action.newStudent]; 
    default: 
    	return state
  }
};



