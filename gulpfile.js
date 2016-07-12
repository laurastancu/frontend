'use strict';

require('./gulp');

var gulp = require('gulp'),
    jade = require('gulp-jade');

// run this task by typing in gulp jade in CLI
gulp.task('jade', function() {
    return gulp.src('src/*.jade')
        .pipe(jade()) // pip to jade plugin
        .pipe(gulp.dest('builds/development')); // tell gulp our output folder
});

