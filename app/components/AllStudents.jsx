import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'; 
import store, { fetchAllStudents } from '../store'; 

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
							<Link to={`/students/${student.id}`}><li> {student.name} </li></Link> 
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

export default connect(mapStateToProps)(AllStudents); 