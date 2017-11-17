const gulp = require('gulp');
const gulpApidoc = require('gulp-apidoc');

module.exports = function apiDoc(done) {
    gulpApidoc({
        src: "src/application",
        dest: "public/doc/",
        debug: true
    }, done);
}