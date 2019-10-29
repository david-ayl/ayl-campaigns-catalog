const { parallel } = require('gulp')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const webserver = require('gulp-connect')
const watch = require('gulp-watch')
const rename = require('gulp-rename')
const replace = require('gulp-replace')

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

function clean(cb) {
  console.log('it clean')
  cb()
}

exports.default = clean

exports.build = parallel(javascript, css)
