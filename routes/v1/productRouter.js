const express = require('express');
const authentication = require('../../middleware/authentication');
const authorization = require('../../middleware/authorization');
const productController = require('../../controller/productController');
const router = express.Router();

// get all the products
router.get('/', authentication, authorization(['user']), productController.getAllProducts);

// create an item
router.post('/', authentication, authorization(['admin']), productController.createItem);

// update an item
router.put('/:id', authentication, authorization(['admin']), productController.updateItem);

// delete an item
router.delete('/:id', authentication, authorization(['admin']), productController.deleteItem);



module.exports = router;