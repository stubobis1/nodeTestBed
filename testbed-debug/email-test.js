const fs = require('fs');
const mailer = require('nodemailer');

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

let defaultEmailOptions = {
    transportOptions: {
        service: 'gmail',
        auth: {
            user: 'automatedemailer72@gmail.com',
            pass: 'thisisapublicpassword'
        }
    },
    mailOptions: {
        from: 'automatedemailer72@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'test successful!'
    },
    recipients: {}
};



async function sendEmail(options) {
    let transporter = mailer.createTransport(options.transportOptions);
    let emailPromises = options.recipients.map(i => {
        let mailOptions = Object.assign(options.mailOptions, {to: i, subject: options.mailOptions.subject, });
        return new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
                resolve();
            });
        });
    });

    await Promise.all(emailPromises);
    console.log("Done");
}

async function testEmail () {
    let fileData = await fileReadPromise("./data/email.json");
    fileData = JSON.parse(fileData);

    let emailOptions = Object.assign(defaultEmailOptions, {
        transportOptions: {
            service: 'gmail',
            auth: {
                user: 'automatedemailer72@gmail.com',
                pass: 'thisisapublicpassword'
            }
        },
        mailOptions: {
            from: 'automatedemailer72@gmail.com',
            subject: 'Sending Email using Node.js',
            html: '<b>Hello World</b>'
        },
        recipients: fileData
    });
    await sendEmail(emailOptions)
}

testEmail().then(() => console.log("Done."));