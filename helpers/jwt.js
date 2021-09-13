const expressJwt = require('express-jwt');

function authJwt(){
    const secret = process.env.SECRET_KEY;
    return expressJwt({
        secret,
        algorithms: ['sha1', 'RS256', 'HS256'],
    }).unless({
        path: [
            {url: /\/auth(.*)/, methods: ['POST', 'OPTIONS']},
        ]
    });
}

module.exports = authJwt;