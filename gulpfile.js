const { src, dest, parallel, series } = require('gulp')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const watch = require('gulp-watch')
const rename = require('gulp-rename')
const replace = require('gulp-replace')
const browserSync = require('browser-sync')
const server = browserSync.create()
const del = require('del')

const clean = () => del(['dist'])

function html(cb) {
  return src('src/*.pug')
    .pipe(pug({}))
    .pipe(dest('./dist/'))
  cb()
}

function css(cb) {
  return src('src/styles/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(dest('dist/styles/'))
  cb()
}

function js(cb) {
  return src('src/scripts/**/*.js')
    .pipe(dest('dist/scripts/'))
  cb()
}

function images(cb) {
  return src('src/images/**/*')
    .pipe(dest('dist/images/'))
  cb()
}

function fonts(cb) {
  return src('src/fonts/**/*')
    .pipe(dest('dist/fonts/'))
  cb()
}

function part(cb) {
  return src('src/parts/**/*.js')
    .pipe(dest('dist/parts/'))
  cb()
}

function serve(done) {
  server.init({
    server: {
      baseDir: './dist'
    }
  })
  done()
}

function w(cb) {
  watch('src/*.pug', () => {
    series(html)
    rl()
  })
  watch('src/styles/**/*.scss', () => {
    css()
    rl()
  })
  watch('src/scripts/**/*.js', () => {
    js()
    rl()
  })
  watch('src/images/**/*',  () => {
    images()
    rl()
  })
  watch('src/fonts/**/*',  () => {
    fonts()
    rl()
  })
  watch('src/parts/**/*.js',  () => {
    part()
    rl()
  })
}

function rl() {
  server.reload()
}

const build = series(clean, html, css, js, images, fonts, part)

const dev = series(build, serve, w)

exports.start = dev
