const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const db = require('./db');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.status(400);
    throw new Error('bad')
    next();
});

app.get('/', (req, res) => {
    // console.log('From -----------------------------------------------------------> root route');
    // console.log('req: ', req);
    // console.log('res: ', res);
    console.log('code: ', req.statusCode);
    if(req.statusCode) res.status(req.statusCode);
    res.send('ok');
});

app.use((req, res, next) => {
    // console.log('from middleware -----------------------------------------------------------> 2');
    // console.log('req: ', req);
    // console.log('res: ', res);
    next();
});


app.post('/api/login', (req, res) => {
    const userInfo = req.body;
    console.log('data: ', userInfo);

    jwt.sign(userInfo, process.env.Secret_Token_Key, { expiresIn: "1m" }, (err, token) => {
        if(err) {
            res.sendStatus(400).send({ "message": "jwt error happened!"});
        }
        res.status(200).send({"token": token});
    });
});

app.get('/api/home', verifyToken, (req, res) => {
    const token = req.token;
    
    jwt.verify(token, process.env.Secret_Token_Key, (err, authData) => {
        if(err) {
            res.status(403).send({ "message": "unauthorized user!" });
        }
        res.status(200).send({
            "message": "Welcome",
            "userData": authData
        });
    });
});


function verifyToken(req, res, next) {
    const bearerHeaders = req.headers.authorization;
    if(typeof bearerHeaders !== 'undefined') {
        const bearer = bearerHeaders.split(' ');
        const token = bearer[1];
        req.token = token
        next();
    }
    else if(req.query && req.query.token) {
        req.token = req.query.token;
        next();
    }
    else {
        res.status(403).send({ "message": "unauthorized user"});
    }
}

app.listen(8000, () => {
    console.log('Server running on : 8000 port');
});