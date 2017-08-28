import React, { Component } from 'react';
import Navbar from './Navbar'; 
import CampusList from './CampusList'; 

export default class Home extends Component {
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