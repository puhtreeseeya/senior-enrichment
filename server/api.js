'use strict'
const api = require('express').Router()
const db = require('../db')
const User = db.models.user; 
const Campus = db.models.campus; 

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/users', (req, res) => {
	User.findAll().then(users => {
		res.json(users); 
	})
}); 

api.get('/users/:id', (req, res) => {
	User.findById(req.params.id)
	.then(user => {
		res.json(user); 
	})
}); 

//GETS CAMPUS BY USER ID 
api.get('/users/campuses/:id', (req, res) => {
	User.findById(req.params.id)
	.then(user => {
		Campus.findById(user.campusId)
		.then(campus => {
			res.json(campus); 
		})
	})
}); 

//GETS STUDENTS BY CAMPUS ID 
api.get('/campuses/users/:id', (req, res) => {
	User.findAll({
		where: {
			campusId : req.params.id
		}
	}).then(users => {
		res.json(users); 
	})
}); 

api.get('/campuses', (req, res) => {
	Campus.findAll().then(campuses => {
		res.json(campuses); 
	})
}); 

api.get('/campuses/:id', (req, res) => {
	Campus.findById(req.params.id)
	.then(campus => {
		res.json(campus); 
	})
}); 

api.post('/campuses', (req, res) => {
	Campus.create(req.body)
	.then(campus => {
		res.json(campus);
	})
}); 

api.post('/users', (req, res) => {
	User.create(req.body)
	.then(user => {
		res.json(user); 
	})
}); 

//DELETES USER BY ID 
api.post('/users/delete/:id', (req, res) => {
	User.destroy({
		where: {
			id : req.params.id
		}
	}).then(succ => {
		res.json(succ); 
	})
}); 

api.post('/campuses/delete/:id', (req, res) => {
	Campus.destroy({
		where: {
			id : req.params.id
		}
	}).then(succ => {
		res.json(succ); 
	})
}); 

api.post('/campuses/update_name/:id', (req, res) => {
	Campus.update(
		{ name : req.body.name}, 
		{ where : { id : req.params.id}
	}).then(succ => { res.json(succ)})

}); 

api.post('/campuses/update_image/:id', (req, res) => {
	Campus.update(
		{ image : req.body.image}, 
		{ where : { id : req.params.id}
	}).then(succ => { res.json(succ)})
}); 

api.post('/users/update_campus/:id', (req, res) => {
	User.update(
		{ campusId : req.body.campusId}, 
		{ where : { id : req.params.id}
	}).then(succ => { res.json(succ)})
}); 

api.post('/users/update_email/:id', (req, res) => {
	User.update(
		{ email : req.body.email}, 
		{ where : { id : req.params.id}
	}).then(succ => { res.json(succ)})
})




// api.get('/hello', (req, res) => res.send({hello: 'world'}))

module.exports = api