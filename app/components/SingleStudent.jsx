import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import store, { fetchSingleStudent } from '../store'; 

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
	}

	render() {
		console.log("HUULLO", this.props.users); 

		return (
			<h2>{this.props.users.name}</h2> 
			<h4>this.props.</h4> 
		)
	}
}

export default connect(mapStateToProps)(SingleStudent); 