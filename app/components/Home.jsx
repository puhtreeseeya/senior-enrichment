import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import Navbar from './Navbar'; 
import CampusList from './CampusList'; 
import StudentsList from './StudentsList'; 
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
				<Router> 
					<div> 
						<Route exact path='/' component={CampusList} /> 
						<Route path='/campuses/:id' component={StudentsList} /> 
					</div> 
				</Router> 
			</div> 
		)
	}
}