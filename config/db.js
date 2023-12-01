const mongoose = require('mongoose');

async function ConnectDB() {
    try {
        const connect = mongoose.connect(process.env.connection_string);
        console.log('/*-------------**----------------*/');
        console.log('/                                 /');
        console.log('/ Database connected successfully /');
        console.log('/                                 /');
        console.log('/*-------------**----------------*/');
    }
    catch(err) {
        console.log('Some error happened to connect DB. Error: ', err);
        process.exit(1);
    }
}

module.exports = ConnectDB;