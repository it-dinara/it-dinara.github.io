var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
	gulp.src('./**/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('.'))
		.on('error', showError);
});

gulp.task('watch', function(){
	gulp.run('sass');
	gulp.watch('./**/*.sass',['sass']).on('error', showError);
})

function showError(error){
	console.log(error.toString());
	this.emit('end');
}