var gulp = require('gulp')
	, util = require('gulp-util')
	, rename = require('gulp-rename')
	, uglify = require('gulp-uglifyjs')
	, notify = require('gulp-notify')
	, gulpif = require('gulp-if')
	, plumber = require('gulp-plumber')
	, autoprefixer = require('gulp-autoprefixer')
	, reactify = require('reactify')
	, babelify = require("babelify")
	, browserSync = require('browser-sync')
	, sass = require('gulp-sass')
	, gulpBrowserify = require('gulp-browserify')
	, lrload = require('livereactload')
	, reload = browserSync.reload

// NODE_ENV=production gulp for smaller builds

var sassPath = './app/src/scss/*'
	, production = process.env.NODE_ENV === 'production'

gulp.task('sass', function() {
	return gulp.src(sassPath+'*/*.scss')
		.pipe(sass({
			errLogToConsole: true
			,includePaths: require('node-neat').includePaths
		}))
		.pipe(autoprefixer())
		.pipe(rename('style.css'))
		.pipe(gulp.dest('./app/public/css/'))
		.pipe(reload({stream: true}))
})

gulp.task('serve', ['scripts', 'sass'], function() {

	browserSync({ proxy: 'meetup.dev' })

	lrload.monitor('./app/public/js/bundle.js')
	// lrload.monitor('./app/public/js/bundle.js', {displayNotification: true})

	gulp.watch(['./app/components/**/*.jsx'], ['scripts'])
	gulp.watch(['./app/client.jsx', './app/{actions,stores}/*.js'], ['scripts'])
	gulp.watch(sassPath+'*/*.scss', ['sass'])
	gulp.watch('./app/views/**/*.html').on('change', reload)
})

gulp.task('scripts', function() {
	gulp.src('./app/client.js')
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(gulpBrowserify({
			transform: production ? ['babelify', 'reactify'] : ['babelify', 'reactify', lrload]
		}))
		.pipe(rename('bundle.js'))
		.pipe(gulpif(production, uglify()))
		.pipe(gulp.dest('./app/public/js/'))
		.on("error", notify.onError("Error: <%= error.message %>"))
})

gulp.task('default', ['serve'])
gulp.task('build', ['scripts', 'sass'])
