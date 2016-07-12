'use strict';

require('./gulp');

var gulp = require('gulp'),
    jade = require('gulp-jade');

// run this task by typing in gulp jade in CLI
gulp.task('jade', function() {
<<<<<<< HEAD
    return gulp.src('src/*.jade')
        .pipe(jade()) // pip to jade plugin
        .pipe(gulp.dest('builds/development')); // tell gulp our output folder
});

=======
    return gulp.src('src/pages/*.jade')
        .pipe(jade()) // pip to jade plugin
        .pipe(gulp.dest('public/html')); // tell gulp our output folder
});
>>>>>>> cc13be0a004bbd9a474e2edc036489a09d9e7eca
