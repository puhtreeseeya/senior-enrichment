import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; 

export default class Navbar extends Component {
	render() {
		return (
			<nav> 
				<NavLink to='/'><button>Home</button></NavLink>
				<NavLink to='/students/'><button>Students</button></NavLink>
			</nav> 
		)
	}
}