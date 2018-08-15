let fs = require('fs');

fs.readFile(process.argv[2], (e, data) => {
    if (e) throw e;
    console.log(data.toString().split("\n").length -1);
});
