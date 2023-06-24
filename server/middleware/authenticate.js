const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.headers.authentication.split(' ');
    if (2 === token.length) {
        try {
            let decode = jwt.verify(token[1], 'verySecretValue');
            req.user = decode;
            next();
            
        } catch(error) {
            res.json({
                message: "Authentication failed!"
            })
        }
    } else {
        res.json({
            message: "something is wrong your bearer token"
        })
    }
}

module.exports = authenticate;