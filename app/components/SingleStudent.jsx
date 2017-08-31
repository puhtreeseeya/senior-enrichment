import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import store, { fetchSingleStudent, fetchCampusFromStudent } from '../store'; 

const mapStateToProps = (state) => {
	return {
		users : state.users.studentArr, 
		campuses : state.campuses.campusArr
	}
}

class SingleStudent extends Component {

	componentDidMount() {
	 	const studentId = this.props.match.params.id; 
		store.dispatch(fetchSingleStudent(studentId));
		store.dispatch(fetchCampusFromStudent(studentId)); 
	}

	render() {
		return (
			<div> 
				<h2>{this.props.users.name}</h2> 
				<h2>{this.props.campuses.name}</h2> 
			</div> 
		)
	}
}

export default connect(mapStateToProps)(SingleStudent); 