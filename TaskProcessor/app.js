
const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const { MONGO_DB_CONNECT } = process.env;

const app = express();

// NOTE: when exporting app.js as agent for supertest 
// we should exlcude connecting to the real database
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(MONGO_DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}