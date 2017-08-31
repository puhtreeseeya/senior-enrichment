import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import store, { fetchStudentsFromCampus, fetchUpdateCampusName, fetchUpdateCampusImage, fetchDeleteStudent } from '../store';  

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
		}, 
		removeStudent(event) {
			event.preventDefault(); 
			const studentId = event.target.value; 
			console.log(studentId); 
			const campusId = ownProps.match.params.id; 
			dispatch(fetchDeleteStudent(studentId)); 
			dispatch(fetchStudentsFromCampus(campusId)); 
		}
	}

}


class StudentsList extends Component {

	componentDidMount() {
		const campusId = this.props.match.params.id; 
		store.dispatch(fetchStudentsFromCampus(campusId)); 
	}
	
	render() {
		console.log("CAMPUS STUDENTS LIST COMPONENT!!!!")
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
						<input type="text" name="newName" />
						<button> # </button>
					</form>  
					<form onSubmit={this.props.updateImage}>
						<input type="text" name="newImage" />
						<button> # </button>
					</form>  
				</div> 

			</div> 

		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList); 

