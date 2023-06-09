const mongoose = require('mongoose');
const dotenv = require('dotenv').config({path: '../.env'});

mongoose.connect(process.env.REACT_APP_MONGOOSE_STRING,
{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose.connection;
