const gulp = require('gulp');
const lint = require('gulp-tslint');

const  DIRS = ['src/**/*.ts'];

module.exports = function tslint() {
    gulp.src(DIRS).pipe(lint({
        formatter: 'stylish',
        fix: true
    })).pipe(lint.report({
        emitError: false,
        summarizeFailureOutput: true
    }));
}