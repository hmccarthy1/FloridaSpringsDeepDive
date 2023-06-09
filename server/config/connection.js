const mongoose = require('mongoose');
const dotenv = require('dotenv').config({path: '../.env'});

mongoose.connect(process.env.REACT_APP_MONGOOSE_STRING,
{
  dbName: 'FloridaSpringsDeepDiveDB',
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch((err) => console.log(err))


module.exports = mongoose.connection;
