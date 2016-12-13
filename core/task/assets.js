'use strict';

const gulp = require('gulp'),
  browserSync = require('browser-sync'),
  cache = require('gulp-cached'),
  imageMin = require('gulp-imagemin');

gulp.task('move-fonts', () => {
  gulp.src('app/assets/fonts/**/*')
    .pipe(cache('assets'))
    .pipe(gulp.dest('dist/assets/fonts'))
});

gulp.task('optimize-images', () => {
  gulp.src('app/assets/images/**/*')
    .pipe(cache('assets'))
    .pipe(imageMin())
    .pipe(gulp.dest('dist/assets/images'))
    .pipe(browserSync.stream());
});

gulp.task('move-assets', ['move-fonts', 'optimize-images']);