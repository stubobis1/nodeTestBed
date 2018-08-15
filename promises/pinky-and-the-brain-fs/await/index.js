'use strict';

let readerPromise = require('./await.js');
let file = process.argv[2];

async function waiting() {
    let a = await readerPromise(file);
    console.log("Await says: ~~");
    console.log(a + "~~");
}

module.exports = waiting();