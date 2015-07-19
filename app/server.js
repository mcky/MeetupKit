var express = require('express')
	, mongoose = require('mongoose')
	, hbs = require('hbs')
	, passport = require('passport')
	, methodOverride = require('method-override')
	, bodyParser = require('body-parser')
	, cookieParser = require('cookie-parser')
	, session = require('cookie-session')
	, expstate = require('express-state')
	, React = require('react')
	, app = express()
	, http = require('http').Server(app)
	, io = require('socket.io')(http)
	, url = require('url')
	, LocalStrategy = require('passport-local').Strategy
	, MeetupStrategy = require('passport-meetup').Strategy
	, User = require('./models/user')
	, env = process.env
	, nodeEnv = env.NODE_ENV
	, port = env.PORT || 3000

require('babel/register');
require('dotenv').load()

passport.use(new MeetupStrategy({
    consumerKey: env.MEETUP_KEY,
    consumerSecret: env.MEETUP_SECRET,
    callbackURL: 'http://127.0.0.1:3000/auth/meetup/callback'
  },
  function(token, tokenSecret, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {

      // To keep the example simple, the user's Meetup profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Meetup account with a user record in your database,
      // and return that user instead.
      console.log('+++++++++++++++++++')
      console.log(token, tokenSecret, profile)
      return done(null, profile);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(session({ keys: ['secretkey1', 'secretkey2', '...']}))
app.use(passport.initialize())
app.use(passport.session())
// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser())
// passport.deserializeUser(User.deserializeUser())

app.set('views', __dirname + '/views')
app.set('view options', { layout:'layout.html' })
app.set('view engine', 'html')
app.engine('html', hbs.__express)
app.use(express.static(__dirname + '/public'))
expstate.extend(app)


console.log('[ENV]:', nodeEnv)

if (nodeEnv === 'production' || nodeEnv === 'staging') {
	mongoose.connect(env.MONGOLAB_URI)
} else {
	mongoose.connect('mongodb://localhost/MeetupKit')
}

// Routes
require('./routes')(app, io)

io.on('connection', function(socket){
  console.log('a user connected')
})

http.listen(port, function(){
  console.log('listening on', port)
})
