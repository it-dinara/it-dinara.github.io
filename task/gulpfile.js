'use strict';
 
// Include gulp
var gulp = require("gulp");

var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var gulpif = require('gulp-if');
var argv = require('yargs').argv;

gulp.task('sass', function() {
     gulp.src('scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(gulpif(argv.prod, cleanCSS()))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css/'))
});

gulp.task("watch", function() {
    livereload.listen();
    gulp.watch("scss/**/*.scss", ["sass"]);
});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});



gulp.task("default", ["watch", "sass"]);

function showError(error){
    console.log(error.toString());
    this.emit('end');
}