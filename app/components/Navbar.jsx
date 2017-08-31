import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'; 
import { connect } from 'react-redux'; 
import { fetchAllCampuses, fetchAllStudents } from '../store'

class Navbar extends Component {
	render() {
		return (
			<nav> 
				<button onClick={this.props.handleHome}>Home</button>
				<button onClick={this.props.handleStudents}>Students</button>
			</nav> 
		)
	}
}


const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleHome(event) {
			dispatch(fetchAllCampuses(ownProps.history))
		}, 
		handleStudents(event) {
			dispatch(fetchAllStudents(ownProps.history)); 
		}
	}
}

const mapStateToProps = (state) => {
	return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
