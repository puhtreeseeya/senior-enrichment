import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'; 
import store, { fetchAllStudents, fetchDeleteStudent } from '../store'; 

class AllStudents extends Component {
	componentDidMount() {
		store.dispatch(fetchAllStudents()); 
	}
	render() {
		return (
			<div> 
			<Link to="/new-student"><button>+</button></Link> 
			<h1> Students: </h1> 
			<ul> 
				{
					this.props.users.map(student => {
						return (					
								<li><Link to={`/students/${student.id}`}> {student.name} </Link> <button value={`${student.id}`} onClick={this.props.handleDelete}> X </button> </li>
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
		users : state.users.studentArr
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleDelete(event) {
			const studentId = event.target.value; 
			dispatch(fetchDeleteStudent(studentId)); 
			dispatch(fetchAllStudents()); 
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents); 