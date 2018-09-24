const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const browserSync = require('browser-sync').create();

gulp.task('sass', () => {
	return gulp.src('sass/index.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('css'))
		.pipe(browserSync.stream());
});

gulp.task('minify-css', () => {
	return gulp.src('css/index.css')
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest('css'));
});

gulp.task('minify-js', function() {
	gulp.src(['src/app.js'])
	.pipe(minify())
	.pipe(gulp.dest('js'))
	.pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
	browserSync.init({
		server: ""
	});

	gulp.watch("sass/index.scss", ['sass']);
	gulp.watch("css/index.css", ['minify-css']);
	gulp.watch("js/**/*.js", ['minify-js']);
	gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'minify-js', 'browser-sync']);
