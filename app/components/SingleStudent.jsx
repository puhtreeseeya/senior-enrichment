import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import store, { fetchSingleStudent, fetchCampusFromStudent } from '../store'; 
import axios from 'axios'; 

const mapStateToProps = (state) => {
	return {
		users : state.users.studentArr, 
		campuses : state.campuses.campusArr
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleNewCampus(event) {
			event.preventDefault(); 
			console.log("UPWASSI");
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
		store.dispatch(fetchSingleStudent(studentId));
		store.dispatch(fetchCampusFromStudent(studentId)); 
		this.getAllCampuses(); 
	}

	render() {
		console.log(this.state.allCampuses); 
		return (
			<div> 
				<h2>Name : {this.props.users.name}</h2> 
				<h2>Campus : {this.props.campuses.name}</h2> 

				<div> 
					<h3> Change Campus : </h3>
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
			</div> 
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent); 