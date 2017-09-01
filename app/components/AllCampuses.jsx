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
			console.log(event.target); 
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
			<div>
				<Link to="/new-campus"><button className="btn btn-success btn-lg">Add Campus</button></Link> 
			<div className="container">
			<div className="row">
				<h3> Campuses: </h3> 
					{
						this.props.campuses.map((campus, index) => {
							return (
								<div className={((index+1) % 3 === 0) ? "row" : "" }>
								<div className="col-sm-4" key={campus.id}>
									<div className="caption row"> 
" value={campus.id} onClick={this.props.handleDelete}> X </button></span> 
									</div> 
										<a className="thumbnail" onClick={this.props.handleSelectedCampus}>
											<div value={campus.id} className='campusImg' style={{backgroundImage : `url(${campus.image})`}}> </div>
										</a> 
								</div>	
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

