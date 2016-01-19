var gulp   = require('gulp'),
	inject = require('gulp-inject'),
	bower  = require('main-bower-files'),
	sass   = require('gulp-ruby-sass'),
	series = require('stream-series');

gulp.task('inject', function () {

	return gulp.src('app/views/index.html')
		.pipe(inject(gulp.src(bower(), {read: false}), {starttag: '<!-- inject:bower:{{ext}} -->'}))
		.pipe(inject(gulp.src('app/modules/**/*.js', {read: false})))
		.pipe(gulp.dest('app/views'));

});

gulp.task('watch', function () {

	gulp.watch(['app/modules/**/*.js', 'bower_components/**/*.js'], ['inject']);

});