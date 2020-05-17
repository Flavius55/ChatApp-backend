
const express = require("express");
const Router = require('express').Router();
const HttpStatus = require('http-status-codes');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const data = [];

app.use(bodyParser.json())

Router.post("/salut" , (req,res) =>{
    data.push(req.body.email);
    res.status(HttpStatus.OK).json(req.body.email);
    //console.log(data);
})
Router.get("/salut" , (req,res) =>{
    console.log(data);
    res.status(HttpStatus.OK).json(data);
})

//app.use(cors());
app.use(Router);

app.listen(3005 , ()=>{
    console.log("App is listening on port 3005");
});

