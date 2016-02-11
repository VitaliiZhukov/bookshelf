var gulp = require('gulp');
var config = require('../config').copyFonts;

gulp.task('copyFonts', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});