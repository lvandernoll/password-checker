const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();

gulp.task('sass', () => {
	return gulp.src('src/sass/index.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('css/'))
		.pipe(browserSync.stream());
});

gulp.task('minify-css', () => {
	return gulp.src('css/index.css')
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest('css/'));
});

gulp.task('minify-js', () => {
	gulp.src(['src/js/app.js'])
	.pipe(minify())
	.pipe(gulp.dest('js/'))
	.pipe(browserSync.stream());
});

gulp.task('gulp-clean', () => {
	return gulp.src('js/app.js')
	.pipe(clean({force: true}));
});

gulp.task('browser-sync', function() {
	browserSync.init({
		server: ""
	});

	gulp.watch("src/sass/index.scss", ['sass']);
	gulp.watch("css/index.css", ['minify-css']);
	gulp.watch("src/js/app.js", ['minify-js']);
	gulp.watch("js/app-min.js", ['gulp-clean']);
	gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'minify-js', 'gulp-clean', 'browser-sync']);
