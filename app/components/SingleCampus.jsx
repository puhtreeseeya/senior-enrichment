import React, { Component } from 'react'; 
import { withRouter } from 'react-router'; 
import { connect } from 'react-redux'; 
import store, { fetchStudentsFromCampus, fetchUpdateCampusName, fetchUpdateCampusImage, fetchDeleteStudent, fetchNewStudent } from '../store';  

const mapStateToProps = (state) => { 
	return {
		users : state.users.studentArr
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		updateName(event) {
			event.preventDefault(); 
			const campusId = ownProps.match.params.id; 
			dispatch(fetchUpdateCampusName(campusId, { name : event.target.newName.value })); 
			event.target.newName.value = ''; 
		}, 
		updateImage(event) {
			event.preventDefault(); 
			const campusId = ownProps.match.params.id; 
			dispatch(fetchUpdateCampusImage(campusId, { image : event.target.newImage.value })); 
			event.target.newImage.value = ''; 
		}, 
		removeStudent(event) {
			event.preventDefault(); 
			const studentId = event.target.value; 
			const campusId = ownProps.match.params.id; 
			dispatch(fetchDeleteStudent(studentId)); 
			dispatch(fetchStudentsFromCampus(campusId)); 
		}, 
		addStudent(event) {
			event.preventDefault();
		  const studentName = event.target.newStudent.value; 
			const studentEmail = event.target.newEmail.value; 
			const student = { name : studentName, email : studentEmail, campusId: ownProps.match.params.id }; 
			dispatch(fetchNewStudent(student)); 
			dispatch(fetchStudentsFromCampus(ownProps.match.params.id)); 
			event.target.newStudent.value = ''; 
			event.target.newEmail.value = ''; 
		}
	}
}


class StudentsList extends Component {

	componentDidMount() {
		const campusId = this.props.match.params.id; 
		store.dispatch(fetchStudentsFromCampus(campusId)); 
	}
	
	render() {
		return (
			<div>
				<h3> Students: </h3> 
				<ul>
				{
					this.props.users.map((student, index) => {
						return (
							<li> {student.name} <button value={`${student.id}`} onClick={this.props.removeStudent}> X </button></li> 
						)
					})
				}
				</ul> 

				<div> 
					<h3> Update Campus: </h3>  
					<form onSubmit={this.props.updateName}>
						<input type="text" name="newName" placeholder="Campus Name" />
						<button> # </button>
					</form>  
					<form onSubmit={this.props.updateImage}>
						<input type="text" name="newImage" placeholder="Image Url"/>
						<button> # </button>
					</form>  
				</div> 

				<div> 
					<h3> Add Student To Campus: </h3> 
					<form onSubmit={this.props.addStudent}>
						<input className="form-control" type="text" name="newStudent" placeholder="Student Name"/> 
						<input className="form-control"type="text" name="newEmail" placeholder="Student Email" /> 
					<div className="form-group">
 						<button type="submit" className="btn btn-default">Submit</button>
 					</div>
					</form> 
				</div> 

			</div> 

		)
	}

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentsList)); 

