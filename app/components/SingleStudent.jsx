import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import store, { fetchSingleStudent, fetchCampusFromStudent, fetchUpdateStudentCampus, fetchUpdateStudentEmail } from '../store'; 
import axios from 'axios'; 

const mapStateToProps = (state) => {
	return {
		users : state.singleStudent,
		campuses : state.singleCampus
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleNewCampus(event) {
			event.preventDefault();
			const campusId = event.target.newCampus.value; 
			dispatch(fetchUpdateStudentCampus(ownProps.match.params.id, campusId));
			dispatch(fetchCampusFromStudent(ownProps.match.params.id));  
			// event.target.newCampus.value = ''; 
		}, 
		handleNewEmail(event) {
			event.preventDefault(); 
			const email = event.target.newEmail.value; 
			const studentId = ownProps.match.params.id; 
			dispatch(fetchUpdateStudentEmail(studentId, email)); 
			dispatch(fetchSingleStudent(studentId)); 
			event.target.newEmail.value = ''; 
		}
	}
}

class SingleStudent extends Component {

	constructor() {
		super(); 
		this.state = {
			allCampuses : []
		}
		this.getAllCampuses = this.getAllCampuses.bind(this); 
	}

	getAllCampuses() {
		console.log("EHLLLOOO"); 
		axios.get('/api/campuses')
		.then(res => res.data)
		.then(campuses => {
			this.setState({
				allCampuses : campuses
			})
		}); 
	}

	componentDidMount() {
	 	const studentId = this.props.match.params.id; 
	 	console.log(this.props.match.params.id); 
		store.dispatch(fetchSingleStudent(studentId));
		store.dispatch(fetchCampusFromStudent(studentId)); 
		this.getAllCampuses(); 
	}

	render() {
		return (
			<div> 
				<h2>Name : {this.props.users.name}</h2> 
				<h2>Campus : {this.props.campuses.name}</h2> 
				<h2>Email : {this.props.users.email} </h2> 

				<div> 
					<h3> Update Campus : </h3>
					<form onSubmit={this.props.handleNewCampus}>
						<select name="newCampus">
						{
							this.state.allCampuses.map(campus => {
								return (
									<option value={`${campus.id}`}>{campus.name}</option>
								)
							})
						}
						</select>
						<div className="form-group">
							<button type="submit" className="btn btn-default">Submit</button>
						</div>		
					</form> 
				</div> 

				<div> 
					<h3> Update Student Details : </h3> 
					<form onSubmit={this.props.handleNewEmail}> 
						<input className="form-control" type="text" name="newEmail" placeholder="Email"/> 
						<button type="submit" className="btn btn-default">Submit</button>
					</form> 
				</div> 
			</div> 
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent); 