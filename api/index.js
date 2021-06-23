const express = require('express');
const apiRouter = express.Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const { getUserById } = require('../db/index')


apiRouter.get('/test', async (req, res, next) => {
  console.log("A get request was made to /api");
  res.send({
    message: "It works!"
  });
})