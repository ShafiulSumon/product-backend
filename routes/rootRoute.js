const express = require('express');
const rootRoute = express.Router();
const apiRouter = require('./v1/apiRouter');

rootRoute.use('/api/v1', apiRouter);

module.exports = rootRoute;