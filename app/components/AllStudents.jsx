import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'; 
import store, { fetchAllStudents, fetchDeleteStudent, fetchSingleStudent } from '../store'; 

class AllStudents extends Component {
	componentDidMount() {
		store.dispatch(fetchAllStudents()); 
	}
	render() {
		console.log(this.props); 
		return (
			<div> 
			<Link to="/new-student"><button>+</button></Link> 
			<h1> Students: </h1> 
			<ul> 
				{
					this.props.users.map(student => {
						return (					
								<li><a onClick={this.props.handleSelectedStudent} value={student.id}>{student.name}</a> <button value={`${student.id}`} onClick={this.props.handleDelete}> X </button> </li>
						)
					})
				}
			</ul> 
			</div> 
		)		
	}
	
}

const mapStateToProps = (state) => {
	return {
		users : state.users, 
		singleUser : state.singleStudent
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleDelete(event) {
			const studentId = event.target.value; 
			dispatch(fetchDeleteStudent(studentId)); 
			dispatch(fetchAllStudents()); 
		}, 
		handleSelectedStudent(event) {
			event.preventDefault(); 
			const studentId = event.target.getAttribute('value'); 
			dispatch(fetchSingleStudent(studentId, ownProps.history))
			
			

		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents); 