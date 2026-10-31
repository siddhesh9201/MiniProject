const express = require('express')
     userRouts=express.Router();
const pool = require('../db/pool')

userRouts.post('/user/signin',(req,res)=>{
        const sql = ''
})


userRouts.post('/user/signup',(req,res)=>{
    const{name,email,password} =req.body
    const sql = 'INSERT INTO users (name,email,password) VALUES (?,?,?,?)'
    try{
           pool.
    }catch(error){
       
    }   

})