var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var clean = require('gulp-rimraf');
var zip = require('gulp-zip');
var babel = require('babelify');



 
gulp.task('browserify',['clean'], function() {
    return browserify({
		entries: './src/app/js/app.js',
		extensions: ['.jsx'],
		debug: true
	})
		.transform(babel)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./tmp/js/'));
});

gulp.task('compress', ['browserify'], function(){
	return gulp.src('./tmp/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./public/js/'))		
});


gulp.task('clean',function(){
		gulp.src('./public/js/*.js',{read: false})
		.pipe(clean());
});


gulp.task('build',['compress'], function(){
	return gulp.src('./tmp',{read: false})
		.pipe(clean());
});

gulp.task('package',['build'], function () {
	return gulp.src('**/*')
		.pipe(zip('package.zip'))
		.pipe(gulp.dest('build'));
});