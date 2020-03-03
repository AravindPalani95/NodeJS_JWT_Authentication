var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('./middleware/jwt.handler.js');
var userService = require('./router/user.controller.js');
var errHandler = require('./middleware/error.handler.js');

app.use(bodyParser.json());
//JWT Authentication
app.use(jwt());

app.use('/',userService);
//Global Error Handler
app.use(errHandler);

app.listen(3000,()=>{
    console.info("Server started");
});

