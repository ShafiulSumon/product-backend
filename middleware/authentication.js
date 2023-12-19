const jwt = require('jsonwebtoken');

function authentication(req, res, next) {
    let token = null;
    const bearerHeaders = req.headers.authorization;
    if(typeof bearerHeaders !== 'undefined') {
        const bearer = bearerHeaders.split(' ');
        token = bearer[1];
    }
    else if(req.query && req.query.token) {
        token = req.query.token;
    }
    
    if(!token) {
        res.status(403).send({ "message": "unauthorized user"});
    }
    
    jwt.verify(token, process.env.Secret_Token_Key, (err, authData) => {
        if(err) {
            res.status(401);
            throw new Error("Unauthorized Person.");
        }
        req.authData = authData;
    });
    next();
}

module.exports = authentication;
