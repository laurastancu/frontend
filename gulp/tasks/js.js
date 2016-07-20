'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var path = require('../utils/paths'),
    handleErrors = require('../utils/handleErrors');

gulp.task('js:merge', function() {
  return gulp.src('./' + path.src.js + '/*.*')
      .on('error', handleErrors)
      .pipe($.include())
      .pipe(gulp.dest(path.dist.js));
});

gulp.task('js:hint', function () {
  return gulp.src([path.src.js + '**/index.js'])
    .pipe($.jshint())
    .on('error', handleErrors)
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe(reload({stream: true}));
});

gulp.task('js:dev', ['js:hint', 'js:merge']);
gulp.task('js:build', ['js:merge']);
