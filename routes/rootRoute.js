const express = require('express');
const v1 = require('./v1/apiRouter');
const rootRoute = express.Router();

rootRoute.use('/api/v1', v1);

module.exports = rootRoute;