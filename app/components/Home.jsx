import React, { Component } from 'react';
import Navbar from './Navbar'; 
import CampusList from './CampusList'; 
import store, { fetchAllCampuses } from '../store'; 

export default class Home extends Component {
	componentDidMount() {
		const campusThunk = fetchAllCampuses(); 
		store.dispatch(campusThunk); 
	}

	render() {
		return (
			<div>
				<Navbar />
				<h1>HELLOOOOOO</h1> 
				<CampusList /> 
			</div> 
		)
	}
}