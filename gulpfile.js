var gulp   = require('gulp'),
	inject = require('gulp-inject'),
	bower  = require('main-bower-files'),
	sass   = require('gulp-ruby-sass'),
	series = require('stream-series');

gulp.task('inject', function () {

	return gulp.src('client/views/index.html')
		.pipe(inject(gulp.src(bower(), {read: false}), {starttag: '<!-- inject:bower:{{ext}} -->'}))
		.pipe(inject(gulp.src('client/js/**/*.js', {read: false})))
		.pipe(gulp.dest('client/views'));

});

gulp.task('watch', function () {

	gulp.watch(['client/js/**/*.js', 'bower_components/js/**/*.js'], ['inject']);

});