
const express = require("express");
const Router = require('express').Router();
const HttpStatus = require('http-status-codes');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const Datastore = require('nedb');
const pool = require("./stored_things/db");
require('dotenv').config();


const database = new Datastore("./stored_things/database.db");
database.loadDatabase();
//database.insert({name:"flavius"});

app.use(bodyParser.json())
Router.post("/" , async (req,res) =>{
    database.insert({
        name:req.body.name,
        mesage:req.body.mesage
    });
     const newMesage = await pool.query
     ("INSERT INTO mesaj (username,mesage) VALUES ('"+req.body.name+"','"+req.body.mesage+"')");
    res.status(HttpStatus.OK).json({
        name:req.body.name,
        mesage:req.body.mesage
    });
})
Router.get("/" , async (req,res) =>{
    // database.find({} , (err,data)=>{
    //     console.log(data);
    //     res.status(HttpStatus.OK).json(data);
    // });
    const getData = await pool.query
    ("SELECT * FROM mesaj");
    res.status(HttpStatus.OK).json(getData);
    
})


app.use(cors());
app.use(Router);

app.listen(process.env.PORT , ()=>{
    console.log(`App is listening on port ${process.env.PORT}`);
});

