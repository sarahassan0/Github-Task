var jwt = require('jsonwebtoken')

function auth(req, res, next) {
    const { authentication } = req.headers;

    jwt.verify(authentication, process.env.SECRET, function (err, decoded) {
        if (decoded) {
            console.log(decoded);
            req.userId=decoded.data.userId
            next()
        }
        if (err) {
            res.status(401).end()
        }
    });


}

module.exports ={auth}