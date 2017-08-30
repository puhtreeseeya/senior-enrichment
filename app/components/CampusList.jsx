import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'
import store, { fetchAllCampuses, fetchStudentsFromCampus } from '../store'; 
import { connect } from 'react-redux'; 
import StudentsList from './StudentsList'; 

function CampusList (props) {
	return (
		<div>
		<h3> Campuses: </h3> 
		<div className="row">
			{
				props.campuses.map((campus, index) => {
					return (
						<div className="col-xs-4" key={campus.id} value={campus.id}>
						<Link to={`/campuses/${campus.id}`}> 
							<a className="thumbnail" href="#" value={campus.id} >
								<div className="caption"> 
									<h5> 
										<span value={campus.id}>{campus.name}</span> 
									</h5> 
								</div> 
								<img src = {campus.image} value={campus.id}/> 
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

const mapStateToProps =  (state) => {
	return {
		campuses : state.campuses.campusArr
	}
}

export default connect(mapStateToProps)(CampusList); 

