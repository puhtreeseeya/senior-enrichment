import React, { Component } from 'react'; 
import store, { fetchAllCampuses } from '../store'; 
import { connect } from 'react-redux'; 

function CampusList (props) {
	console.log("hello", props); 
	return (
		<div>
		<h3> Campuses: </h3> 
		<div className="row">
			{
				props.campuses.map((campus, index) => {
					return (
						<div className="col-xs-4" key={index}>
							<a className="thumbnail" href="#" onClick={props.handleClick}>
								<div className="caption"> 
									<h5> 
										<span>{campus.name}</span> 
									</h5> 
								</div> 
								<img src = {campus.image}/> 
							</a> 
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

const mapDispatchToProps = (dispatch) => {
	return {
		handleClick(event) {
			event.preventDefault(); 
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusList); 

