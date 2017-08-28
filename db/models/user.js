'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('user', {
  firstName: {
  	type: Sequelize.STRING, 
  	allowNull: false 
  },
  lastName: {
    type: Sequelize.STRING, 
    allowNull: false 
  },
  email: {
  	type: Sequelize.STRING, 
  	validate: {
  		isEmail: true
  	}
  }, 
  fullName: {
    type: Sequelize.STRING, 
    set() {
      this.setDataValue('fullname', this.firstName + ' ' + this.lastName); 
    }
  }
})
