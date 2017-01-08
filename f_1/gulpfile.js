var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect'),
    open = require('gulp-open');

gulp.task('less', function () {
    var l = less({});
    l.on('error',function(e){
        console.log( e.message );
        console.log( e.extract );
        l.end();
    });
    return gulp.src('src/css/*.less')
        .pipe(l)
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/css'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    return gulp.src('src/**/*.html')
        .pipe(connect.reload());
});

gulp.task('js', function () {
    return gulp.src('src/**/*.js')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('src/css/*.less', ['less']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/**/*.js', ['js']);
});

gulp.task('connect', function() {
    connect.server({
        root: '',
        livereload: true
    });
});

gulp.task('open', function(){
    gulp.src('index.html')
        .pipe(open({uri: 'http://localhost:8080'}));
});

gulp.task('default', ['less', 'html', 'js', 'watch', 'connect', 'open']);

