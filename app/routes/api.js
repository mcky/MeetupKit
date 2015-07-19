var express = require('express')
	, router = express.Router()
	, userController = require('../controllers/users')
	, eventController = require('../controllers/events')

var toJSON = function(req, res, next) {
	var data = res.locals.data
	res.json(data)
	next()
}

module.exports = function(io) {

	// Users
	router.route('/login')
		.get(userController.login.get)
		.post(userController.login.post)

	router.route('/logout')
		.get(userController.logout)

	router.route('/users')
		.get(userController.list)
		.post(userController.post)

	router.route('/users/:userId')
		.get(userController.get)
		.put(userController.put)

	// Events
	router.route('/events')
		.get(eventController.list)

	router.route('/events/:ID')
		.get(eventController.get)
		.put(eventController.put)
		.delete(eventController.delete)

	router.all('/*', toJSON)

	return router

}
