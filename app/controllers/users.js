var User = require('../models/user')

var userController = {
	list: function(req, res, next) {
		res.locals.data = {}
		next()
	}

	, get: function(req, res, next) {
		res.locals.data = {}
		next()
	}

	, post: function(req, res, next) {
		res.locals.data = {}
		next()
	}

	, put: function(req, res, next) {
		res.locals.data = {}
		next()
	}

	, delete: function(req, res, next) {
		res.locals.data = {}
		next()
	}

	, login: {
		get: function(req, res, next) {
			res.locals.data = {}
			next()
		}

		, post: function(req, res, next) {
			res.locals.data = {}
			next()
		}
	}

	, logout: function(req, res, next) {
		req.logout()
		res.locals.data = 'Successfully logged out'
		next()
	}
}

module.exports = userController
