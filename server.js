const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

// MODELS
const user = require('./router/usuarios.router.js')();

let app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTERS

app.use("/v1/usuarios", user);

module.exports = app;