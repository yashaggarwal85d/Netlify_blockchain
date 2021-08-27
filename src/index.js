const express = require('express');
const http = require('http');
const bodyparser = require('body-parser');
const compression = require('compression');

const app = express();
const server = http.createServer(app);

//router
app.use(compression());
app.use(bodyparser.json());
const WalletRouter = require('./routes/wallet');
app.use('/wallet', WalletRouter);

var PORT = 8000;
server.listen(PORT);
