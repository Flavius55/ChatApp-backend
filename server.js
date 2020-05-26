
const express = require("express");
const Router = require('express').Router();
const HttpStatus = require('http-status-codes');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const Datastore = require('nedb');
require('dotenv').config();

const database = new Datastore("./stored_things/database.db");
database.loadDatabase();
//database.insert({name:"flavius"});

app.use(bodyParser.json())
Router.post("/" , (req,res) =>{
    database.insert({
        name:req.body.name,
        mesage:req.body.mesage
    });
    res.status(HttpStatus.OK).json({
        name:req.body.name,
        mesage:req.body.mesage
    });
})
Router.get("/" , (req,res) =>{
    database.find({} , (err,data)=>{
        console.log(data);
        res.status(HttpStatus.OK).json(data);
    });

    
})


app.use(cors());
app.use(Router);

app.listen(process.env.PORT , ()=>{
    console.log(`App is listening on port ${process.env.PORT}`);
});

