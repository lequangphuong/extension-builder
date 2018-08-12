const fs = require('fs');
const path = require('path');
const config = require('../config/const');

/**
 * Remove directory recursively
 * @param {string} dir_path
 * @see https://stackoverflow.com/a/42505874/3027390
 */
const rimraf = function(dir_path) {
    if (fs.existsSync(dir_path)) {
        fs.readdirSync(dir_path).forEach(function(entry) {
            var entry_path = path.join(dir_path, entry);
            if (fs.lstatSync(entry_path).isDirectory()) {
                rimraf(entry_path);
            } else {
                fs.unlinkSync(entry_path);
            }
        });
        fs.rmdirSync(dir_path);
    }
} 

const build = function () {
    // console.log('create folder built');
    rimraf(config.BUILD.folder);
    fs.mkdirSync(config.BUILD.folder);
    
}

this.all = function () {
    build();
}

this.chrome = function () {
    build();

}

this.firefox = function () {
    build();

}

this.ie = function () {
    build();

}

this.safari = function () {
    build();

}

module.exports = {
    build: browser => {
        const func = this[browser] || function () { };
        return func();
    }
};