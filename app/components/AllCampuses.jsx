import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'
import store, { fetchAllCampuses, fetchDeleteCampus, fetchSingleCampus } from '../store'; 
import { connect } from 'react-redux'; 

const mapStateToProps =  (state) => {
	return {
		campuses : state.campuses
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleDelete(event) {
			const campusId = event.target.value; 
			dispatch(fetchDeleteCampus(campusId)); 
			dispatch(fetchAllCampuses()); 
		}, 
		handleSelectedCampus(event) {
			event.preventDefault();
			const campusId = event.target.getAttribute('value'); 
			dispatch(fetchSingleCampus(campusId, ownProps.history)); 
		}
	}
}


class CampusList extends Component {
	componentDidMount() {
		store.dispatch(fetchAllCampuses()); 
	}

	render() {
		return (
			<div className="container">
				<div className="row">
				<Link to="/new-campus"><button className="btn btn-success btn-lg">Add Campus</button></Link> 
				<h3> Campuses: </h3> 
				<div className="row">
					{
						this.props.campuses.map((campus, index) => {
							return (
								
								<div className="col-xs-4" key={campus.id}>
									<div className="caption"> 
										<h5> 
											<span value={campus.id}>{campus.name}<button className="btn btn-danger" value={campus.id} onClick={this.props.handleDelete}> X </button></span> 
										</h5> 
									</div> 
										<a className="thumbnail" value={campus.id} onClick={this.props.handleSelectedCampus}>
											<img src={campus.image} value={campus.id}/> 
										</a> 
								</div>	
							)
						})
					}
				</div> 
				</div>
			</div>
		)

	}
}


export default connect(mapStateToProps, mapDispatchToProps)(CampusList); 

