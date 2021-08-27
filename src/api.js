const express = require('express');
const serverless = require('serverless-http');
const bodyparser = require('body-parser');
const compression = require('compression');
const WalletRouter = require('./routes/wallet');

const app = express();

app.use(compression());
app.use(bodyparser.json());
app.use(`/.netlify/functions/api`, WalletRouter);

module.exports = app;
module.exports.handler = serverless(app);
