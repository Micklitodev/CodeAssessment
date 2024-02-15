const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/assessment').then(() => console.log('db connect: 200')).catch('db connect: 400')

module.exports = mongoose.connection;


