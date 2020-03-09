/* eslint-disable */
const path = require('path');

module.exports = {
    resolve(dir) {
        return path.join(__dirname, '../../..', dir);
    },
    assetsPath(_path) {
        const assetsSubDirectory = 'lib';

        return path.posix.join(assetsSubDirectory, _path);
    }
};
