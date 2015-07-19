var express = require('express')
	, React = require('react')
	, url = require('url')
	, router = express.Router()
	, eventController = require('../controllers/events')
	, App = require('../components/App.jsx')

var reactRender = function(req, res, next) {
	var data = {
		path: url.parse(req.url).pathname
		, data: res.locals.data
	}

	res.expose({data: data})
	res.render('index', {
		react : React.renderToString(React.createElement(App, data))
	})
}


router.route('/events')
	.get(eventController.list, reactRender)

router.get('/', reactRender)

module.exports = router
