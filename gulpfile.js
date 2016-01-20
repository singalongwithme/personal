var gulp   = require('gulp'),
	inject = require('gulp-inject'),
	bower  = require('main-bower-files'),
	sass   = require('gulp-ruby-sass'),
	series = require('stream-series');

gulp.task('inject', function () {

	return gulp.src('app/views/index.html')
		.pipe(inject(gulp.src(bower(), {read: false}), {starttag: '<!-- inject:bower:{{ext}} -->'}))
		.pipe(inject(gulp.src('app/modules/**/*.js', {read: false})))
		.pipe(inject(gulp.src('app/styles/**/*.css', {read: false})))
		.pipe(gulp.dest('app/views'));

});

gulp.task('sass', function () {

	return sass('app/styles/sass/main.scss')
		.on('error', sass.logError)
		.pipe(gulp.dest('app/styles'));

});

gulp.task('watch', function () {

	gulp.watch(['app/modules/**/*.js', 'app/styles/**/*.css', 'bower_components/**/*.js'], ['inject']);
	gulp.watch('app/styles/sass/**/*.scss', ['sass']);

});