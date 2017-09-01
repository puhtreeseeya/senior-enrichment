'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('user', {
  name: {
  	type: Sequelize.STRING,
    allowNull : false,  
  	validate: {
      notEmpty: true
    }
  },
  email: {
  	type: Sequelize.STRING,
    allowNull : false,  
  	validate: {
  		isEmail: true, 
      notEmpty: true
  	}
  }
})
