const express = require('express');
const authRoute = require('./authRouter');
const productRoute = require('./productRouter');

const apiRouter = express.Router();

apiRouter.use('/health', (req, res) => res.json({ "message": "Api is working" }));

apiRouter.use('/auth', authRoute);

apiRouter.use('/products', productRoute);

module.exports = apiRouter;
