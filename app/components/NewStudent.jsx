import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import store, { fetchStudentsFromCampus, fetchNewStudent } from '../store';  
import { Link } from 'react-router-dom'; 

const mapStateToProps = (state) => {
	return {
		campuses : state.campuses.campusArr
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleAddPerson(event) {
			event.preventDefault();
			const name = event.target.newNameInput.value; 
			const campusId = event.target.pickedCampus.value; 
			const newStudent = { name: name, campusId: campusId }
			dispatch(fetchNewStudent(newStudent));
		}
	}
}


class NewStudent extends Component {

	render() {
		return (
			<div>
				<h3> Add Person: </h3> 
				<form onSubmit={this.props.handleAddPerson}>
					<input className="form-control" type="text" name="newNameInput" placeholder="Name"/>
					<select name="pickedCampus">
						{
							this.props.campuses.map(campus => {
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

		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStudent); 

