'use strict';
let fs = require('fs');

let narf = (file) => {
    let p = new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (error, data) => {
            return  error ? reject(error) : resolve(data);
        })
    });
    return p.then((x) => { return x.toString() });
};

module.exports = narf;