var express = require('express');
var router =  express.Router();
var authHelper = require('../helper/auth.helper.js');
var users = require('../config/users.config.json');

router.post('/login',authenticateUser);
router.post('/allUsers',getAllUsers);


function authenticateUser(req,res,next){
    let username = req.body.username;
    let password = req.body.password;
    authHelper.authenticate(username,password)
    .then(user=>{
        if(user)
            res.json(user);
        else
            res.status(400).json({ message: 'Username or password is incorrect' })   
    })
    .catch(err=> next(err));
}

function getAllUsers(req,res,next){
    let userList = [];
    users.forEach(user => {
        userList.push(user.username);
    });
    res.status(200).json({ users : userList });
}

module.exports = router;