var gulp = require('gulp'),
  watch = require('gulp-watch'),
  babel = require('gulp-babel'),
  connect = require('gulp-connect'),
  webpack = require('webpack-stream'),
  webpackConfig = require('./webpack.config.js'),
  sass = require('gulp-sass')

gulp.task('build', ['js', 'scss', 'html', 'watch'])

gulp.task('js', function() {
  return gulp.src('src/js/app.js')
    .pipe(webpack(webpackConfig))
    .pipe(babel({presets: ['babili']}))
    .pipe(gulp.dest('build/js/'))
});

gulp.task('scss', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css/'));
});

gulp.task('html', function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('build/'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'build'
  });
});

gulp.task('watch', function() {
  gulp.watch('./*', ['build']) 
});


gulp.task('default', ['build']);
