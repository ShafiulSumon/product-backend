function signup(req, res) {
    res.send('requesting for signup');
}

function login(req, res, next) {
    console.log('req: ', req.body);
    const loginInfo = req.body;

    if(!loginInfo.email || !loginInfo.password) {
        res.send({
            "message": "please fill up all the fields."
        });
    }
    else {
        if(loginInfo.email === 'test@test.com' && loginInfo.password === 'test') {
            res.send({
                "message": "login successful!"
            });
        }
        else {
            res.send({
                "message": "wrong email/password."
            });
        }
    }
}

module.exports = {
    signup,
    login
}