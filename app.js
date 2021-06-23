const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const client = require('./db/client');
const apiRouter = require('./api')
const { PORT = 3100 } = process.env;

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(cookieParser());

app.use(morgan('dev'));

app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log('Server is up on ', PORT);
    client.connect();
})