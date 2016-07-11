'use strict';

var gulp = require('gulp');

gulp.task('default', ['css', 'js:build', 'html', 'img']);

gulp.task('build', ['default']);
