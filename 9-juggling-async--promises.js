const http = require('http');

function getDataAsync(url) {
    let responseData = '';
    p = new Promise((resolve, reject) => {
        http.get(url, res => {
            res.on("data", d => {
                responseData += d;
            });
            res.on("end", d => {
                resolve(responseData)
            });
            res.on("error", e => {
                reject(e)
            });
        })
    });
    return p;
}
function fillData(index, url) {
    return new Promise((resolve, reject) => {
        getDataAsync(url).then(val => {
            resolve(val);
        });
    })
}

promises = [];
for (let i = 2; i < process.argv.length; i++) {
    promises.push(fillData(i - 2, process.argv[i]));
}
Promise.all(promises).then(a=> a.forEach(i => console.log(i)));