const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:127.0.0.1/FloridaSpringsDeepDiveDB',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose.connection;
