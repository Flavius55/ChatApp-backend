
const express = require("express");
const Router = require('express').Router();
const HttpStatus = require('http-status-codes');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();

const data = [{key:"value"}];

app.use(bodyParser.json())


Router.post("/" , (req,res) =>{
    data.push(req.body.email);
    res.status(HttpStatus.OK).json(req.body.email);
    //console.log(data);
})

Router.get("/" , (req,res) =>{
    console.log(data);
    res.status(HttpStatus.OK).json(data);
})

app.use(cors());
//app.use(express.static("public"));
app.use(Router);

app.listen(process.env.PORT , ()=>{
    console.log(`App is listening on port ${process.env.PORT}`);
});

