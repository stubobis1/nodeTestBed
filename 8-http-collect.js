const http = require('http');

let responseData = '';
http.get(process.argv[2], res => {
    res.on("data", d => {
        responseData += d;
    });
    res.on("end", d => {
        console.log(responseData.length);
        console.log(responseData);
    })
});