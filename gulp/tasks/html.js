'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var path = require('../utils/paths'),
    handleErrors = require('../utils/handleErrors');


var jadeOpts = {
  pretty: true
};
// for when we switch to jade
//gulp.task('html:all', function() {
//  return gulp.src(path.src.jade + '**/*.jade')
//    .pipe($.jade(jadeOpts))
//    .on('error', handleErrors)
//    .pipe(gulp.dest(path.dist.html))
//    .pipe(browserSync.reload({ stream:true }));
//});

gulp.task('html:all', function() {
  return gulp.src(path.src.html + '**/*.html')
    .on('error', handleErrors)
    .pipe(gulp.dest(path.dist.html))
    .pipe(browserSync.reload({ stream:true }));
});

gulp.task('html', ['html:all']);
