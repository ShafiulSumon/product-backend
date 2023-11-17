const express = require('express');
const rootRoute = require('./routes/rootRoute');
const errorHandler = require('./middleware/errorHandler');


const app = express();

app.use(express.json());

app.use('/', rootRoute);

app.use(errorHandler);

module.exports = app;