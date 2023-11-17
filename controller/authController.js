const asyncHandler = require('express-async-handler');
const isEmailValid = require('../utils/emailValidation');
const makeToken = require('../utils/makeToken');
const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const signup = asyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body;

    // all fields are mandatory
    if(!username || !email || !password) {
        res.status(400);
        throw new Error('All fields are mandatory!');
    }

    // validation of email
    if(!isEmailValid(email)) {
        res.status(400);
        throw new Error('Wrong email format. Change it like: abc@xyz.com');
    }

    // if email is available
    const alreadyTakenEmail = await Users.exists({ email });
    if(alreadyTakenEmail) {
        res.status(400);
        throw new Error('This email has already exist');
    }

    // saving on db
    const hashedPassword = await bcrypt.hash(password, 10);
    await Users.create({ username, email, password: hashedPassword });

    res.json({ "message": "data saved" });
});


const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        res.status(400);
        throw new Error('please enter email and password.');
    }

    const user = await Users.findOne({ email });
    if(user && await bcrypt.compare(password, user.password)) {
        const data = {
            "username": user.username,
            "email": user.email
        }
        jwt.sign(data, process.env.Secret_Token_Key, { expiresIn: "1d" }, (err, token) => {
            console.log('debug - 2');
            if(err) {
                res.status(401);
                throw new Error('Enter correct Email/Password');
            }
            else {
                res.json({token});
            }
        });
    }
    else {
        res.status(401);
        throw new Error('Wrong Email/Password!');
    }
});

const allUsers = asyncHandler(async (req, res) => {
    const users = await Users.find();
    res.json(users);
});



module.exports = {
    signup,
    login,
    allUsers
} 
