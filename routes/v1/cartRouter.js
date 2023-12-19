const express = require('express');
const authentication = require('../../middleware/authentication');
const cartController = require('../../controller/cartController');

const cartRouter = express.Router();


cartRouter.get('/all', authentication, cartController.allProducts);

cartRouter.post('/add/:id', authentication, cartController.addProduct);

cartRouter.delete('/remove/:id', authentication, cartController.removeProduct);



module.exports = cartRouter;