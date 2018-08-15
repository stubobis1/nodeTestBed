'use strict';

let narf = require('./pinky.js');
let file = process.argv[2];

let curry = (func) => {
    return (promise) => {
        return promise.then(func)
    }
};

let toUpper = (x) => {return x.toUpperCase()};

file = narf(file);
let upper = curry(toUpper);
file = upper(file);
console.log('Pinky says:');
curry(console.log)(file);

module.exports = curry;