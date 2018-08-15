const http = require('http');
const fs = require('fs');

server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        res.writeHead(200, {'content-type': 'text/plain'});
        let data = "";
        req.on("data", d => {
            data += d;
        });
        req.on("end", () => {
            res.write(data.toUpperCase());
            res.end();
        });
    }
});

server.listen(process.argv[2]);