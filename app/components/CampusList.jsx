import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'
import store, { fetchAllCampuses, fetchDeleteCampus } from '../store'; 
import { connect } from 'react-redux'; 

const mapStateToProps =  (state) => {
	return {
		campuses : state.campuses.campusArr
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleDelete(event) {
			const campusId = event.target.value; 
			dispatch(fetchDeleteCampus(campusId)); 
			dispatch(fetchAllCampuses()); 
		}
	}
}


class CampusList extends Component {
	componentDidMount() {
		store.dispatch(fetchAllCampuses()); 
	}

	render() {
		return (
			<div>
			<Link to="/new-campus"><button>+</button></Link> 
			<h3> Campuses: </h3> 
			<div className="row">
				{
					this.props.campuses.map((campus, index) => {
						return (
							
							<div className="col-xs-4" key={campus.id}>
								<div className="caption"> 
									<h5> 
										<span value={campus.id}>{campus.name}<button value={campus.id} onClick={this.props.handleDelete}> X </button></span> 
									</h5> 
								</div> 
								<Link to={`/campuses/${campus.id}`}> 
									<a className="thumbnail" href="#" value={campus.id} >
										<img src={campus.image} value={campus.id}/> 
									</a> 
								</Link> 

							</div>	
						)
					})
				}
			</div> 
			</div>
		)

	}
}


export default connect(mapStateToProps, mapDispatchToProps)(CampusList); 

