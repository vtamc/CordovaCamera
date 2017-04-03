
var babelify = require('babelify'),
    browserify = require('browserify'),
    gulp = require('gulp'),
    rename = require('gulp-rename')
    source = require('vinyl-source-stream');
 
gulp.task('default', [ 'build' ]);
gulp.task('build', [ 'js:bundle' ]);
 
gulp.task('js:bundle', function () {
  var bundler = browserify({
    entry: './src/index.js',
    debug: true
  });
 
  return bundler
    .add('./src/index.js')
    .transform(babelify)
    .bundle()
    .pipe(source('./src/index.js'))
    .pipe(rename('index.js'))
    .pipe(gulp.dest('./www/js'));
});