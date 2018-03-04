"use strict";
exports.__esModule = true;

var jsonServer = require("json-server");
var express = require("express");
var https = require("https");
var server = express();
var fs = require("fs")

var auth_1 = require("./auth");
var authz_1 = require("./authz");

var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();

var options = {
    key: fs.readFileSync("./keys/key.key"),
	cert: fs.readFileSync("./keys/cert.crt")
};

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

//middleware para login
server.post('/login', auth_1.handleAuthentication);
server.use('/orders', authz_1.handleAuthorization);

// Use default router
server.use(router);

https.createServer(options, server).listen(3443, function () {
    console.log('Server is running on https://localhost:3443');
});
