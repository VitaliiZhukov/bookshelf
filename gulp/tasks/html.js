var gulp = require('gulp');
var config = require('../config').html;

gulp.task('html', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});

// Images
gulp.task('images', function () {
    return gulp.src([
        'src/img/*'])
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/img'))
        .pipe($.size());
});

// Data
gulp.task('data', function () {
    return gulp.src([
            'src/data/data.json'])
        .pipe(gulp.dest('dist/data'))
        .pipe($.size());
});

// Fonts
gulp.task('fonts', function() {
    return gulp.src([
                    'src/fonts/*.*'])
            .pipe(gulp.dest('dist/fonts/'));
});

