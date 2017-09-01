import React, { Component } from 'react'; 
import { withRouter } from 'react-router'; 
import { connect } from 'react-redux'; 
import store, { fetchStudentsFromCampus, fetchUpdateCampusName, fetchUpdateCampusImage, fetchDeleteStudent, fetchNewStudent, fetchSingleCampus } from '../store';  

const mapStateToProps = (state) => {
	return {
		users : state.users, 
		campus : state.singleCampus
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		updateName(event) {
			event.preventDefault();
			const campusId = ownProps.match.params.id; 
			dispatch(fetchUpdateCampusName(campusId, { name : event.target.newName.value }));
			dispatch(fetchSingleCampus(campusId)); 
			event.target.newName.value = ''; 
		}, 
		updateImage(event) {
			event.preventDefault(); 
			const campusId = ownProps.match.params.id; 
			dispatch(fetchUpdateCampusImage(campusId, { image : event.target.newImage.value })); 
			dispatch(fetchSingleCampus(campusId)); 
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

class SingleCampuses extends Component {

	componentDidMount() {
		const campusId = this.props.match.params.id; 
		store.dispatch(fetchStudentsFromCampus(campusId)); 
	}
	
	render() {
		console.log(this.props); 
		return (
			<div className="container">
				<div className="row">
					 
					<h3> Campus Name: {this.props.campus.name}</h3> 
					
				
					<h2>Student List :  </h2> 
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
						<div className="input-group">
							<input className="form-control" type="text" name="newName" placeholder="Campus Name" />
							<div className="input-group-btn">
								<button className="btn btn-default"> # </button>
							</div> 
						</div> 
						</form>  
						<form onSubmit={this.props.updateImage}>
						<div className="input-group">
							<input className="form-control" type="text" name="newImage" placeholder="Image Url"/>
							<div className="input-group-btn">
								<button className="btn btn-default"> # </button>
							</div>
						</div>
						</form>  
					</div> 

					<div> 
						<h3> Add Student To Campus: </h3> 
							<form onSubmit={this.props.addStudent}>
							<div className="form-group">
								<input className="form-control" type="text" name="newStudent" placeholder="Student Name"/> 
								<input className="form-control"type="text" name="newEmail" placeholder="Student Email" /> 
							
		 						<button type="submit" className="btn btn-default">Submit</button>
		 					</div>
							</form> 
					</div> 

				</div> 
			</div>


		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleCampuses); 


