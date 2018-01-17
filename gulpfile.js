var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('connect', function() {
        connect.server({
                root: 'dist/',
                livereload: true
        });
});

gulp.task('html', function buildHTML() {
        return gulp.src('src/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

gulp.task('html:watch', function() {
        gulp.watch(['src/*.pug', 'src/parts/*.pug'], ['html'])
});

gulp.task('img', function() {
        gulp.src(['src/images/*.{jpeg,jpg,gif,ico,png}', 'src/images/*/*.{jpeg,jpg,gif,ico,png}'])
        .pipe(gulp.dest('dist/images/'))
});

gulp.task('img:watch', function() {
        gulp.watch(['src/images/*.{jpeg,jpg,gif,ico,png}', 'src/images/*/*.{jpeg,jpg,gif,ico,png}'] ['img']);
});

gulp.task('sass', function() {
        gulp.src(['src/styles/**.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/styles/'))
        .pipe(connect.reload());
});

gulp.task('sass:watch', function() {
        gulp.watch(['src/styles/**.scss', 'src/styles/*/**.scss'], ['sass']);
});

gulp.task('js:min', function() {
  pump([
    gulp.src('src/scripts/**.js'),
    //uglify(),
    gulp.dest('dist/scripts/')
  ])
})

gulp.task('js:watch', function() {
        gulp.watch('src/scripts/**.js', ['js:min']);
});
gulp.task('font', function() {
        gulp.src('src/fonts/**.*')
        .pipe(gulp.dest('dist/fonts/'))
});
gulp.task('build', ['sass', 'img', 'js:min', 'html', 'font']);

gulp.task('dev', ['html:watch', 'sass:watch', 'img:watch', 'js:watch', 'connect']);
