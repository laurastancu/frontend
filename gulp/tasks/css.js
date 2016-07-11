'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    browserSync = require('browser-sync');

var path = require('../utils/paths'),
    handleErrors = require('../utils/handleErrors');

gulp.task('css:less', function () {
  return gulp.src([ path.src.less + '*.less' ])
    .pipe($.less())
    .on('error', handleErrors)
    .pipe($.autoprefixer('last 1 version', '> 1%', 'ie 8'))
    //.pipe($.csso())
    .pipe($.size({ showFiles: true, title: 'css compressed:' }))
    .pipe(gulp.dest(path.dist.css))
    .pipe(browserSync.reload({ stream:true }));
});

gulp.task('css', [ 'css:less' ]);
