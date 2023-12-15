const express = require('express');
const cartController = require('../../controller/cartController');
const authentication = require('../../middleware/authentication');

const cartRouter = express.Router();


cartRouter.get('/all', authentication, cartController.allProducts);

cartRouter.post('/add:id', authentication, cartController.addProduct);

cartRouter.delete('/remove:id', authentication, cartController.removeProduct);



module.exports = authRouter;