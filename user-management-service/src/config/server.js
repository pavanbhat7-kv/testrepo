const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(cors());
app.use(express.json()); // For parsing application/json
app.use(morgan('dev')); // Logging middleware

const PORT = process.env.PORT || 5000;

module.exports = { app, PORT };