const gulp = require('gulp');
const del = require('del');

const DIRS = ['dist/**/*', 'public/**/*'];

module.exports = function clean() {
    return del(DIRS);
}