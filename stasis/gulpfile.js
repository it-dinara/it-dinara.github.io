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
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var path = require('path');
var rename = require('gulp-rename');
var cheerio = require('gulp-cheerio');


gulp.task('sass', function() {
    gulp.src(['scss/*.scss'])
        .pipe(gulpif(argv.dev, sourcemaps.init()))
        .pipe(sass())
        .pipe(prefix('last 3 versions'))
        .pipe(gulpif(argv.prod, cleanCSS()))
        .pipe(gulpif(argv.dev, sourcemaps.write()))
        .pipe(gulp.dest('css/'))
});

gulp.task("watch", function() {
    livereload.listen();
    gulp.watch("scss/*.scss", ["sass"]);
});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('svgstore', function() {
    return gulp
        .src('svg/store/*.svg', { base: 'store/svg' })
        .pipe(svgmin(function(file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: false
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('./store'));
});

gulp.task('svgcheerio', function() {
    return gulp
        .src('svg/cheerio/*.svg', { base: 'cheerio/svg' })
        .pipe(svgmin(function(file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: false
                    }
                }]
            }
        }))
        .pipe(cheerio({
            run: function($) {
                $('[fill]').removeAttr('fill'),
                $('[stroke]').removeAttr('stroke');
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('./cheerio'));
});


gulp.task("default", ["watch", "sass"]);


function showError(error) {
    console.log(error.toString());
    this.emit('end');
}