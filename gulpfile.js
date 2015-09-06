var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('hello', function() {
  console.log('Hello Robert');
});

//Sass task
gulp.task('styles', function() {
  return gulp.src('app/scss/*.scss')
    .pipe(sass().on('error', sass.logError)) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css/'))
    .pipe(browserSync.reload({
       stream: true
    }))
});

//Watch task
gulp.task('watch', ['browserSync', 'styles'], function() {
  gulp.watch('app/scss/*.scss',['styles']);
});

//Browser sync
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
})


