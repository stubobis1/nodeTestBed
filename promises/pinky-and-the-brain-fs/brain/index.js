let brain = require('./brain.js');

let file = process.argv[2];

brain(file, function (err, data) {
    if (err) {
        console.log(err)
    }
    console.log('Brain says:');
    console.log(data);
});

module.exports = brain;