var gulp = require('gulp');
var phpunit = require('gulp-phpunit');
var run = require('gulp-run');
var notify = require('gulp-notify');


gulp.task('test', function(){
	gulp.src('phpunit.xml')
	.pipe(run('clear'))
	.pipe(phpunit())
    .on('error', notify.onError({
           title: 'Dangit',
           message: 'Your tests failed!'

    }))
    .pipe(notify({
           title: 'Success',
           message: 'All tests have returned green!'
    }));

});

gulp.task('watch', function() {
   gulp.watch(['tests/**/*.php', 'src/**/*.php'], ['test']);
});

gulp.task('default', ['test', 'watch']);