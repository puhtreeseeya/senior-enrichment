import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'
import store, { fetchAllCampuses } from '../store'; 
import { connect } from 'react-redux'; 
import StudentsList from './StudentsList'; 

const mapStateToProps =  (state) => {
	return {
		campuses : state.campuses.campusArr
	}
}


class CampusList extends Component {
	componentDidMount() {
		store.dispatch(fetchAllCampuses()); 
	}

	render() {
		return (
			<div>
			<Link to="/new-campus"><button>+</button></Link> 
			<h3> Campuses: </h3> 
			<div className="row">
				{
					this.props.campuses.map((campus, index) => {
						return (
							<div className="col-xs-4" key={campus.id} value={campus.id}>
							<Link to={`/campuses/${campus.id}`}> 
								<a className="thumbnail" href="#" value={campus.id} >
									<div className="caption"> 
										<h5> 
											<span value={campus.id}>{campus.name}</span> 
										</h5> 
									</div> 
									<img src="http://newbrunswick.rutgers.edu/sites/flagship/files/styles/ru_slideshow_medium/public/NR09VisitorCenter6990_pg.jpg?itok=1ddaTUhE" value={campus.id}/> 
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
}


export default connect(mapStateToProps)(CampusList); 

