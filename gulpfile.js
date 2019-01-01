'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src(['./src/sass/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
  }))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', function() {

  browserSync.init({
      server: ["./","./src"]
  });

  gulp.watch("./src/sass/**/*.scss", gulp.series('sass'));
  gulp.watch("./src/**/*.js").on('change', browserSync.reload);
  gulp.watch("./src/*.html").on('change', browserSync.reload);
});
 
gulp.task('default', gulp.series('serve'));