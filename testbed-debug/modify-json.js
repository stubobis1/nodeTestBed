const fs = require('fs');

let fileReadPromise = (file) => {
    let p = new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (error, data) => {
            return error ? reject(error) : resolve(data);
        })
    });
    return p.then((x) => {
        return x.toString()
    });
};
let fileWritePromise = (file, objData) => {
    let data = JSON.stringify(objData);
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, 'utf8', (error, data) => {
            return error ? reject(error) : resolve(data);
        })
    });
};

async function modify() {
    let fileData = await fileReadPromise("./test-data.json");
    fileData = JSON.parse(fileData);
    fileData = fileData.map(i => {
        return {
            "XDoc": `XDOC${i.ReceiptId}`,
            "Key": `Receipt=\"${i.ReceiptId}\" Stage=\"90\"`,
            "Stage": "00",
        }
    });
    await fileWritePromise("./out.json", fileData);
}
modify();