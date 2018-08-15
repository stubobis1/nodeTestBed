let fs = require('fs');

module.exports = (path, ext, cb) => {
    fs.readdir(path, 'utf8', (e, data) => {
        if (e) {
            cb(e);
        }
        else {
            let d = data.filter(f => {
                return f.endsWith("." + ext);
            });
            cb(e,d);
        }
    });
};