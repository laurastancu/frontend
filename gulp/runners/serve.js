'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync');

var path = require('../utils/paths');

function browserSyncInit() {
  return browserSync.init({
    server: {
      baseDir: [path.dist.path, path.bower.path],
      directory: true
    },
    startPath: '/html/',
    notify: false,
    browser: 'google chrome canary'
  });
}

gulp.task('serve', ['css', 'js:dev', 'html', 'img'], function () {

  browserSyncInit();

  // for when we switch to jade
  gulp.watch([path.src.jade + '**/*.jade'], ['html']);
  //gulp.watch([path.src.html + '**/*.html'], ['html']);
  gulp.watch([path.src.less + '*.less'], ['css']);
  gulp.watch([path.src.js + '*.js'], ['js:dev']);
  gulp.watch([path.src.img + '**/*'], ['img']);
});
