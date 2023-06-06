
const path = require('path');
const {springSeed} = require('./seed')
const session = require('express-session');
const routes = require('./controllers');
const User = require('./models/User');
const mongoose = require('./config/connection');
console.log(mongoose.collections)
const bodyParser = require("body-parser");

var express = require('express')

var app = express()


const PORT = process.env.PORT || 3001;



// Inform Express.js on which template engine to use
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


  app.listen(PORT, () => console.log(`Now listening at ${PORT}`));
