var mongoose = require('mongoose')
	, Schema = mongoose.Schema
	, passportLocalMongoose = require('passport-local-mongoose')

var User = new Schema({
	name: String
	, dateCreated: {type: Date, default: Date.now()}
})

// User.plugin(passportLocalMongoose,{
// 	usernameField: 'email'
// 	, usernameLowerCase: true
// })

module.exports = mongoose.model('User', User)
