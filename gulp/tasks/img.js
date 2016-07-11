'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var path = require('../utils/paths'),
    handleErrors = require('../utils/handleErrors');


gulp.task('img:compress', function () {
  return gulp.src(path.src.img + '**/*')
    .pipe($.changed(path.dist.img))
    .on('error', handleErrors)
    .pipe($.size({ showFiles: true, title: 'images compressed:' }))
    .pipe(gulp.dest(path.dist.img))
    .pipe(reload({ stream: true, once: true }));
});

gulp.task('img', [ 'img:compress' ]);
