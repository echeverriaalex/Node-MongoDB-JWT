const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1:27017/Users_JWT';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

module.exports = db;