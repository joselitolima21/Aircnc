const express = require('express');
const routes = express.Router();

routes.get('/users',(req,res)=>{
    return res.status(200).json(req.body)})

module.exports = routes;