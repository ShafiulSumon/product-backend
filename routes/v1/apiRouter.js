const express = require('express');
const authRoute = require('./authRouter');

const apiRouter = express.Router();

apiRouter.route('/').all((req, res) => {
    res.send('this is v1');
});

apiRouter.use('/auth', authRoute);

module.exports = apiRouter;
