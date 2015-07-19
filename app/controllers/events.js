var request = require('request-promise')
	, qs = require('querystring')

var eventController = {

	list: function(req, res, next) {
		var env = process.env
			, queryString = {
				sign: 'true'
				, 'photo-host': 'public'
				, group_id: env.MEETUP_GROUPID
				, status: 'upcoming,past'
				, page: 50
				, only: 'name,id,time,yes_rsvp_count,waitlist_count'
				, key: env.MEETUP_APIKEY
				, desc: true
			}

		request({url:'https://api.meetup.com/2/events', qs: queryString})
			.then(function(response) {
				var resp = JSON.parse(response)
				res.locals.data = resp.results
			})
			.catch(console.error)
			.finally(function(response) {
				next()
			})
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
}

module.exports = eventController
