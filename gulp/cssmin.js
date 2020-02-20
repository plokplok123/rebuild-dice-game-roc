const { task, series, src, dest } = require('gulp');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

module.exports = task('cssmin', function() {
    return src('./css/*.css')
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min'}))
    .pipe(dest('css/'));
  });