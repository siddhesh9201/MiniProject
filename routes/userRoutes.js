const express = require('express')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')
const result = require('../utils/results/')
     userRouts=express.Router();
const pool = require('../db/pool')


userRouts.post('/user/signin',(req,res)=>{
        const{email,password}=req.body
        const hashedPassword = crypto.SHA256(password)
        const sql = 'SELECT * FROM users WHERE email=? AND password=?'
        try{
         const data = pool.query(sql,[email,hashedPassword])
          const dbuser=data[0][0];
          const uid=dbuser.id;
          const token=jwt.sign(uid,config.SECRET_KEY)
          dbuser.token=token
           res.send(result.createSuccessResult(dbuser))
        }catch(error){
           res.send(result.createErrorResult('Invalid!'))
        }
})


userRouts.post('/user/signup', async (req,res)=>{
    const{name,email,password} =req.body;
    const hashedPassword = crypto.SHA256(password)
    const sql = 'INSERT INTO users (name,email,password) VALUES (?,?,?,?)'
    try{
      const data= await pool.query(sql,[name,email,hashedPassword])
        res.send(result.createSuccessResult(data))
    }catch(error){
       res.send(result.createErrorResult('Not Found!'))
    }   
})

module.exports=userRouts