var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var del = require('del');
var runSequence = require('run-sequence');
var path = require('path');
var colors = require('colors');
var autoprefixer = require('gulp-autoprefixer');
var gcmq = require('gulp-group-css-media-queries');

function exceptionLog (error) {
	console.log(error.toString());
	this.emit('end');
}

// Сборка js
gulp.task('webpack', function() {
	var webpackTime = new Date();
	console.log('---------- Start webpack ----------'.bold.green.bgBlack);
	gulp.src('./js/main.js')
		.pipe( webpack( require('./webpack.config.js') )
		.on('error', exceptionLog) )
		
		.on('end', function() {
			console.log( ('-------- Finished webpack ---------').bold.green.bgBlack.inverse );
			console.log( ('------ build time: ' + (new Date() - webpackTime)/1000 + ' sec ------' ).bold.yellow );
		})
		.pipe(gulp.dest('./public/js/'))
	

});

// Сборка sass
gulp.task('sass', function() {
	console.log('----------- Start SASSS -----------'.bold.green.bgBlack);
	gulp.src('./sass/*.sass')
		.pipe( sass(/*{outputStyle: 'compressed'}*/)
		.on('error', sass.logError) )
		.pipe(autoprefixer())
		.pipe(gcmq())
		.pipe(gulp.dest('./public/css'))
		.on('error', exceptionLog)
		.on('end', function() {
			console.log('--------- Finished SASSS ----------'.bold.green.bgBlack.inverse);
		});
	
});

//media-queries

// del
gulp.task('del-build', function() {
	console.log('--------- Delete old build ---------'.bold.yellow);
	del([
		'public/js/build.js',
		'public/js/build.js.map',
		'public/css/style.css',
		'public/css/style.css.map'
	])
	.then(function (paths) {
		console.log('---- Finished Delete old build ----'.bold.green.bgBlack.inverse);
	});
});

// watcher
gulp.task('default', function () {
	runSequence('del-build', ['webpack', 'sass'])
	gulp.watch(['./js/**/*.js','./js/*.js', './js/**/*.jsx', './js/*.jsx', './webpack.config.js'], ['webpack']);
	gulp.watch('./sass/**/*.sass', ['sass']);
	gulp.watch('./public/landing/sass/*.sass', ['landing'])
});