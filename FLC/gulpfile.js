var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
	gulp.src('./sass/**/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/css'))
		.on('error', showError);
});

gulp.task('watch', function(){
	gulp.start('sass');
	gulp.watch('./sass/**/*.sass',['sass']).on('error', showError);
})

function showError(error){
	console.log(error.toString());
	this.emit('end');
}