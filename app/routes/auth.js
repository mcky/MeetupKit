var express = require('express')
	, React = require('react')
	, url = require('url')
	, passport = require('passport')
	, router = express.Router()
	, userController = require('../controllers/users')

router.route('/meetup')
	.get(passport.authenticate('meetup'))

router.route('/meetup/callback')
	.get(
		passport.authenticate('meetup', { failureRedirect: '/login' })
		, function(req, res) {
			console.log(req.user)
			res.redirect('/')
		}
	)

router.route('/logout')
	.get(
		userController.logout
		, function(req, res){
			res.redirect('/')
		}
	)


module.exports = router
