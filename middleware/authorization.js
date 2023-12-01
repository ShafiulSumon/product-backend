const authorization = (roles = []) => {
    return (req, res, next) => {
        const authData = req.authData;
        switch (authData.role) {
            case "admin":
                return next();
                break;
            case "user":
                if(roles.includes('user')) {
                    return next();
                }
                else {
                    res.status(401);
                    next(new Error('You do not have the permissions for such actions.'));
                }
                break;
            default:
                res.status(401);
                throw new Error("You do not have the permissions for such actions.");
                break;
        }
    }
} 

module.exports = authorization;