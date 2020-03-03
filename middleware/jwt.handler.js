var jwt = require('express-jwt');
var secretConfigJson = require('../config/secret.config.json');

function checkJwtToken(){
    const { secretKey } = secretConfigJson;
    return jwt({secret : secretKey, requestProperty: 'authorization'}).unless({
        path : ['/login']
    }); 
}

module.exports = checkJwtToken;