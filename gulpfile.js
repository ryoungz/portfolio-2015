var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');

// Converts Sass to CSS with gulp-sass
gulp.task('styles', function() {
  return gulp.src('app/scss/*.scss')
    .pipe(sass().on('error', sass.logError)) 
    .pipe(autoprefixer())
    .pipe(gulp.dest('app/css/'))
    .pipe(browserSync.reload({
       stream: true
    }))
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

//Browser sync
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
})

//Watch task
gulp.task('watch', ['browserSync', 'styles'], function() {
  gulp.watch('app/scss/*.scss',['styles']);
  gulp.watch("app/*.html", ['bs-reload']);
});

// deploys
gulp.task('default',  ['watch','bs-reload','styles']);


