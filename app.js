const express = require('express');
const rootRoute = require('./routes/rootRoute');
const errorHandler = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser');


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/', rootRoute);

app.use(errorHandler);

module.exports = app;