const expressJwt = require('express-jwt');

function authJwt(){
    const secret = process.env.SECRET;
    return expressJwt({
        secret,
        algorithms: ['sha1', 'RS256', 'HS256'],
        isRevoked: isRevoked
    }).unless({
        path: [
            {url: /\/auth(.*)/, methods: ['GET', 'OPTIONS']},
        ]
    });
}

module.exports = authJwt;