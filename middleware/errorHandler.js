const errorHandler = (err, req, res, next) => {
    const errorStatus = res.statusCode ? res.statusCode : 500;
    console.log('errorStatus: ', errorStatus);

    switch(errorStatus) {
        case(400):
            res.json({
                "title": "Bad Request",
                "message": err.message
            });
            break;
        case(401):
            res.json({
                "title": "Unauthorized",
                "message": err.message
            });
            break;
        case(403):
            res.json({
                "title": "Forbidden",
                "message": err.message
            });
            break;
        case(404):
            res.json({
                "title": "Not Found",
                "message": err.message
            });
            break;
        case(500):
            res.json({
                "title": "Server Error",
                "message": err.message
            });
            break;
        default:
            console.log('No error happened!');
    }
    next();
}

module.exports = errorHandler;

