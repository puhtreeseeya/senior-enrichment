import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import store, { fetchNewCampus } from '../store';  
import { Link } from 'react-router-dom'; 

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleNewCampus(event) {
			event.preventDefault();
			const name = event.target.newCampusName.value; 
			const imageUrl = event.target.imageUrl.value; 
			const newCampus = { name: name, image: imageUrl }
			dispatch(fetchNewCampus(newCampus));
			event.target.newCampusName.value = ''; 
			event.target.imageUrl.value = ''; 
		}
	}
}


class NewCampus extends Component {

	render() {
		return (
			<div> 
				<h3> New Campus HAHAHAHH! </h3> 
				<form onSubmit={this.props.handleNewCampus}>
					<input className="form-control" type="text" name="newCampusName" placeholder="Campus Name"/> 
					<input className="form-control" type="text" name="imageUrl" placeholder="image URL"/>
				<div className='form-group'>
				<button type="submit" className="btn btn-default">Submit</button>
				</div>
				</form>   

			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCampus); 