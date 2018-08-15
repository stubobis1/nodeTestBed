let fs = require('fs');

let brain = function (file, callback) {
    fs.readFile(file, 'utf8', function (e, d) {
        if (e) {
            callback(e)
        }
        return callback(null, d.toString())
    })
};

module.exports = brain;