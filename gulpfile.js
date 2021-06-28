'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;

gulp.task('img', function () {
    return gulp.src('app/img/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
})

gulp.task('sass', function() {
    return gulp.src('app/scss/style.scss')
        .pipe(sass({
            outputStyle: 'compressed',
        }))
        .pipe(gulp.dest('dist/css'));
})

gulp.task('js', function () {
    return pipeline(
        gulp.src('app/js/*.js'),
        uglify(),
        gulp.dest('dist/js')
    );
});

gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('app/js/*.js', gulp.series('js'));
})

// exports.default = sass;
