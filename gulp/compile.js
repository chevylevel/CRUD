const ts = require('gulp-typescript');
const gulp = require('gulp');
const typescript = require('typescript');

const project = ts.createProject('tsconfig.json', {typescript});

module.exports = function compile() {
    const result = gulp.src('src/**/*.ts').pipe(project());
    return result.js.pipe(gulp.dest('dist'));
}