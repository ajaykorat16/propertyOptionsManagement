const jwt = require('jsonwebtoken');

const auth = function (req, res, next) {

    const token = req.headers.authorization
    if (!token) {
        return res.status(401).json({ error: true, message: 'No token, authorization denied' });
    }

    // Verify token
    try {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
            if (error) {
                console.log(error)
                return res.status(401).json({ error: true, message: 'Token is not valid' });
            } else {
                req.user = decoded.user;
                next();
            }
        });
    } catch (err) {
        console.error('something wrong with auth middleware');
        res.status(500).json({ msg: 'Server Error' });
    }
};

module.exports = { auth }