let ls = require('./listFile.js');


ls(process.argv[2],process.argv[3],(e,list) => {list.map(i => {console.log(i)})});