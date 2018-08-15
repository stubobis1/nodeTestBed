
const async = require("async");



//This will not respect the order, unless the limit > items.
let tasks = [
    cb => {setTimeout(function (){console.log(10); cb()},1000)},
    cb => {setTimeout(function (){console.log(1); cb()},100)},
    cb => {setTimeout(function (){console.log(7); cb()},700)},
    cb => {setTimeout(function (){console.log(20); cb()},2000)},
    cb => {setTimeout(function (){console.log(8); cb()},800)},
    cb => {setTimeout(function (){console.log(6); cb()},600)},
    cb => {setTimeout(function (){console.log(2); cb()},200)},
    cb => {setTimeout(function (){console.log(1); cb()},100)},
    cb => {setTimeout(function (){console.log(1); cb()},100)},
    cb => {setTimeout(function (){console.log(4); cb()},400)},
    cb => {setTimeout(function (){console.log(9); cb()},900)},
    cb => {setTimeout(function (){console.log(1); cb()},100)},
    cb => {setTimeout(function (){console.log(1); cb()},100)},
    cb => {setTimeout(function (){console.log(1); cb()},100)},
    cb => {setTimeout(function (){console.log(1); cb()},100)},
    cb => {setTimeout(function (){console.log(1); cb()},100)},
    cb => {setTimeout(function (){console.log(5); cb()},500)},
    cb => {setTimeout(function (){console.log(3); cb()},300)},
];

module.exports = {
    test: function() {
        async.parallelLimit(tasks, 100, (err, results) => {}); // Once upon a time, Steve told us to do parallelLimit. This is because you can put a Limit on it.
    }
}
