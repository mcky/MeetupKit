var react = require('./react')
	, auth = require('./auth')
	, api = require('./api')

module.exports = function(app, io) {
	app.use('/api', api(io))
	app.use('/auth', auth)
	app.use('/', react)
}
