import React, { Component } from 'react'; 
import store, { fetchAllCampuses } from '../store'; 

const fakeCampuses = [
	{
		id: 1, 
		name : "Busch", 
		image: ""
	}, {
		id: 2, 
		name : "Livingston", 
		image: ""
	}
];


export default class CampusList extends Component {

	 
	constructor() {
		super(); 
		this.state = store.fetchAllCampuses(); 
	}

	componentDidMount() {

	}

	render() {
		console.log(this.state); 
		const campuses = fakeCampuses; 
		console.log(store); 
		return (
			<ul>
				{
					campuses.map((campus, index) => {
						return (
							<li key={index}>{campus.name}</li>
						)
					})
				}

			</ul>
		)

	}




}