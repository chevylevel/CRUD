const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const watch = require('gulp-watch');
const tasks = require('./gulp');


gulp.task('default',  gulpSequence('clean', 'tslint', 'compile', 'apidoc', 'watch'));

gulp.task('compile', tasks.compile);
gulp.task('tslint', tasks.tslint);
gulp.task('clean', tasks.clean);
gulp.task('apidoc', tasks.apidoc);

gulp.task('watch', () => {
    watch(['src/**/*.ts'], () => gulp.start('compile'));
    watch(['src/**/*.ts'], () => gulp.start('tslint'));
    watch(['src/application/**/*.ts'], () => gulp.start('apidoc'));
});