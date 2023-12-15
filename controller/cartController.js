const asyncHandler = require('express-async-handler');
const Users = require('../models/userModel');

const allProducts = asyncHandler(async (req, res) => {
    res.json({"hi": "HI"});
    // const { userId } = req.authData;
    // const user = await Users.findById(userId);
    // res.json(user.cart);
});

const addProduct = asyncHandler(async (req, res) => {
    const { userId } = req.authData;
    const user = await Users.findById(userId);
    user.cart.push(req.params.id);
    await user.save();
    res.json({ "message": "product added to cart successfully"});
});

const removeProduct = asyncHandler(async (req, res) => {
    const { userId } = req.authData;
    const user = await Users.findById(userId);
    user.cart.remove(req.params.id);
    await user.save();
    res.json({ "message": "removed from cart successfully"});
});


module.exports = {
    allProducts,
    addProduct,
    removeProduct
}