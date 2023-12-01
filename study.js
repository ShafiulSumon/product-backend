const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const db = require('./db');

const app = express();

app.listen(8000, () => {
    console.log('Server running on : 8000 port');
});


app.use(express.json());

app.get('/product/:pId', (req, res) => {
    console.log('pId: ', req.params.pId);
    res.json({ 'pId': req.params.pId});
})