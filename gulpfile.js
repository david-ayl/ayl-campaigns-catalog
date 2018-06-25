var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var replace = require('gulp-replace');

gulp.task('html', function() {
  return gulp.src('src/*.pug')
    .pipe(pug({}))
    .pipe(gulp.dest('dist/'))
});

gulp.task('sass', function() {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/styles/'))
});

gulp.task('js', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(gulp.dest('dist/scripts/'))
});

gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images/'))
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts/'))
});

gulp.task('part', function() {
  return gulp.src('src/parts/**/*.js')
    .pipe(gulp.dest('dist/parts/'))
});

gulp.task('serve', function() {
  gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      direcotyListing: true,
      open: true
    }));
});

gulp.task('export', function() {
  gulp.src('src/parts/campaigns.pug')
    .pipe(replace(/^-|\/\/\-.*/gm, ''))
    .pipe(rename('parts/campaigns.js'))
    .pipe(gulp.dest('dist/'));
})

gulp.task('watch', function() {
  gulp.watch([
    'src/styles/**/*.scss',
    'src/scripts/**/*.js',
    'src/*.pug',
    'src/images/**/*',
    'src/parts/**/*',
    'src/fonts/**/*'
  ], ['build']);
});

gulp.task('build', ['html', 'sass', 'js', 'images', 'part', 'export']);

gulp.task('dev', ['serve', 'watch']);
