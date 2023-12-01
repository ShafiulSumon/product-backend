const asyncHandler = require('express-async-handler');
const Products = require('../models/productModel');

const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Products.find();
    res.json(products);
});


// we got req.authData for authorization
const createItem = asyncHandler(async (req, res) => {
    // const { email } = req.authData;
    const { name, desc, price } = req.body;

    if(!name || !price) {
        res.status(400);
        throw new Error('Product name and price are mandatory!');
    }

    await Products.create({ name, desc, price });
        res.json({ "message": "data has been saved!"});

    // if(email !== 'admin@admin.com') {
    //     res.status(403);
    //     throw new Error('Only admin can create/update/delete a product.');
    // }
    // else {
        
    // }
});

const updateItem = asyncHandler(async (req, res) => {
    // const { email } = req.authData;
    const productId = req.params.id;
    const { name, desc, price } = req.body;

    // if(email !== 'admin@admin.com') {
    //     res.status(403);
    //     throw new Error('Only admin can create/update/delete a product.');
    // }

    if(!name || !price) {
        res.status(400);
        throw new Error('Product name and price are mandatory!');
    }

    // await Products.replaceOne({ _id: productId}, name, desc, price);
    // await Products.findByIdAndUpdate(_id:productId, )
    const product = await Products.findById({_id:productId});
    product.name = name;
    product.desc = desc;
    product.price = price
    await product.save();

    res.json({ "message": "data updated successfully!"});
});

const deleteItem = asyncHandler(async (req, res) => {
    // const { email } = req.authData;
    const productId = req.params.id;

    // if(email !== 'admin@admin.com') {
    //     res.status(403);
    //     throw new Error('Only admin can create/update/delete a product.');
    // }

    await Products.deleteOne({ _id: productId});
    res.json({ "message": "deleted successfully!"});
});

module.exports = {
    getAllProducts,
    createItem,
    updateItem,
    deleteItem
}