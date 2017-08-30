import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import store, { fetchStudentsFromCampus } from '../store';  

const mapStateToProps = (state) => {
	return {
		users : state.users.studentArr
	}
}


class StudentsList extends Component {

	componentDidMount() {
		const campusId = this.props.match.params.id; 
		store.dispatch(fetchStudentsFromCampus(campusId)); 
	}
	
	render() {
		console.log("HULLO" , this.props.users); 
		return (
			<div>
				<h3> Students: </h3> 
				<ul>
				{
					this.props.users.map((student, index) => {
						return (
							<li> {student.firstName} {student.lastName} </li> 
						)
					})
				}
				</ul> 

			</div> 


		)
	}

}

export default connect(mapStateToProps)(StudentsList); 



// function StudentsList (props) {

// 	component
// 		{props.getStudentList()}
// 		return (
// 			<h1> HULLO </h1> 

// 		)
// }

// const mapStateToProps = (state) => {
// 	console.log("YOWASSUPPP", state); 
// 	return {
// 		students : state.users.studentArr
// 	}
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
// 	return {
// 		getStudentList() {
// 			console.log(ownProps); 
// 			const campusId = ownProps.match.params.id; 
// 			dispatch(fetchStudentsFromCampus(campusId));
// 		}
// 	}
// }


// export default connect(mapStateToProps, mapDispatchToProps)(StudentsList); 
