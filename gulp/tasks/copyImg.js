var gulp = require('gulp');
var config = require('../config').copyImg;

gulp.task('copyImg', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});