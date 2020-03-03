var jwtToken = require('jsonwebtoken');
var secretConfigJson = require('../config/secret.config.json');
var userList = require('../config/users.config.json');

const authenticate = (username,password) =>{
     return new Promise((resolve,reject)=>{
        userList.forEach(user => {
            if(user.username === username && user.password === password)
            {
                const token = jwtToken.sign({ sub : user.id }, secretConfigJson.secretKey); 
                const { password, ...userWithoutPassword } = user;
                resolve({  
                    "user" : userWithoutPassword,
                    "token" : token
                });
            }
        });
    });
}

module.exports.authenticate = authenticate;