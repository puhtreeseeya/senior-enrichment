import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Navbar from './Navbar'; 
import CampusList from './CampusList'; 
import StudentsList from './StudentsList';
import SingleStudent from './SingleStudent';  
import AllStudents from './AllStudents'; 
import NewStudent from './NewStudent'; 
import NewCampus from './NewCampus'; 
import store, { fetchAllCampuses, fetchAllStudents } from '../store'; 

export default class Home extends Component {
	componentDidMount() {
		const campusThunk = fetchAllCampuses(); 
		store.dispatch(campusThunk); 
	}
	
	render() {
		return (
			<div> 
				
				<Router> 
					<div> 
						<Navbar /> 
						<Switch> 
							<Route exact path='/' component={CampusList} /> 
							<Route path='/campuses/:id' component={StudentsList} /> 
							<Route exact path='/students/' component={AllStudents} />
							<Route path='/students/:id' component={SingleStudent} /> 
							<Route path='/new-student' component={NewStudent} />
							<Route path='/new-campus' component={NewCampus} />
						</Switch> 
					</div> 
				</Router> 
			</div> 
		)
	}
}