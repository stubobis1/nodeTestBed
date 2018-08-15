const net = require('net');

function fmtNum(val){
    return ("00" + val.toString()).substr(-2)
}

let server = net.createServer(socket => {
    let d = new Date();
    let fdate = `${d.getFullYear()}-${fmtNum(d.getMonth() + 1)}-${fmtNum(d.getDate())} ${fmtNum(d.getHours())}:${fmtNum(d.getMinutes())}\n`;
    socket.end(fdate);
});
server.listen(process.argv[2]);