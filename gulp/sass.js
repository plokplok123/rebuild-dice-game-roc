const { task, series, src, dest } = require('gulp');
const del = require('del');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

task('removeStyles', function(cb) {
    return del([
        'css/**/*'
    ]);
});

task('createSass', function () {
    return src('./sass/*.scss')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(dest('./css'));
});
module.exports = task('sass', series('removeStyles', 'createSass'));