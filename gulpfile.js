var gulp = require("gulp");
var gulpSequence = require('gulp-sequence')
var ts = require("gulp-typescript");
var gulpWebpack = require('gulp-webpack');
var webpack = require('webpack');
var uglify = require('gulp-uglify');
var pump = require('pump');
var browserSync = require('browser-sync').create();
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var Server = require('karma').Server;

gulp.task('default', gulpSequence(
    'webpack',
    'lint',
    'serve'
));

gulp.task('build', gulpSequence(
    'webpack',
    'lint',
    'compress'
));

gulp.task('webpack', function () {
    return gulp.src('src/app.tsc')
        .pipe(gulpWebpack(require('./webpack.config.js'), webpack))
        .pipe(gulp.dest('dist/'))
});

gulp.task('lint', function () {
    return gulp.src('./dist/*.js')
        .pipe(jshint({ proto: true }))
        .pipe(jshint.reporter(stylish))
});

gulp.task('compress', function (callback) {
    pump([
        gulp.src('./dist/*.js'),
        uglify(),
        gulp.dest('./dist')
    ],
        callback
    );
});

gulp.task('watch', ['webpack', 'compress'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/test/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('serve', ['watch'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./src/*", ['watch']);
});
