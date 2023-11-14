const express = require('express');
const rootRoute = require('./routes/rootRoute');

const app = express();

app.use(express.json());

app.use('/', rootRoute);

module.exports = app;