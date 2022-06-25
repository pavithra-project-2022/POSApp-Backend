const express = require('express');
const connection = require('../config/config')
const router = express.Router();
var auth = require('../services/authentication')

router.post('/add',auth.authenticateToken,(req,res,next)=>{
let category = req.body;
var query1 = "insert into category (name) values(?)";
connection.query(query1,[category.name],(err,results)=>{
    if(!err){
        return res.status(200).json({message:"Category Added Successfully"})
    }
    else{
        return res.status(500).json(err)
    }
})
})

router.get('/get',(req,res,next)=>{
var query = "select * from category order by name";
connection.query(query,(err,results)=>{
    if(!err){
        return res.status(200).json(results)
    }
    else{
        return res.status(500).json(err);
    }
})
})


module.exports = router; 