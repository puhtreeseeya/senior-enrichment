import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Navbar from './Navbar'; 
import AllCampuses from './AllCampuses'; 
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';  
import AllStudents from './AllStudents'; 
import NewStudent from './NewStudent'; 
import NewCampus from './NewCampus'; 
import { connect } from 'react-redux'; 
import store, { fetchAllCampuses, fetchAllStudents } from '../store'; 

class Home extends Component {
	componentDidMount() {
		// const campusThunk = fetchAllCampuses(); 
		// store.dispatch(campusThunk); 
		store.dispatch(fetchAllCampuses()); 
	}

	render() {
		return (
			<div> 	
				<Router> 
					<div> 
						<Navbar /> 
						<Switch> 
							<Route exact path='/' component={AllCampuses} /> 
							<Route path='/campuses/:id' component={SingleCampus} /> 
							<Route exact path='/students/' component={AllStudents} />
							<Route path='/students/:id' component={SingleStudent} /> 
							<Route exact path='/new-student' component={NewStudent} />
							<Route exact path='/new-campus' component={NewCampus} />
						</Switch> 
					</div> 
				</Router> 
			</div> 
		)
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		campuses : state.campuses.campusArr
// 	}
// }

export default Home;  

