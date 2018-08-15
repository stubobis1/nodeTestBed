let fs = require('fs');

fs.readdir(process.argv[2], 'utf8', (e, data) => {
    if (e) throw e;
    data.map(f => {
        if(f.endsWith("." + process.argv[3])) console.log(f);
    });
});
