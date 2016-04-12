var 	gulp    = require('gulp'),
		inject  = require('gulp-inject'),
		bower   = require('main-bower-files'),
		sass    = require('gulp-ruby-sass'),
		series  = require('stream-series'),
		concat  = require('gulp-concat'),
		uglify  = require('gulp-uglify'),
		uglycss = require('gulp-uglifycss');

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

gulp.task('build', function () {
	gulp.src(['app/modules/**/*.js', 'bower_components/**/*.js'])
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));

	gulp.src(['app/styles/main.css', 'bower_components/**/*.css'])
		.pipe(concat('main.css'))
		.pipe(uglycss())
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
	gulp.watch(['app/modules/**/*.js', 'app/styles/**/*.css', 'bower_components/**/*.js'], ['inject']);
	gulp.watch('app/styles/sass/**/*.scss', ['sass']);

});