const express = require('express')
const pool = require('../db/pool')
const routes = express.Router()



// add Product
routes.post('/',async(req,res)=>{
   const sql = `INSERT INTO products(name,price,category,stock) values(?,?,?,?)`
   const {name,price,category,stock}=req.header
   try{
        const data = await pool.query(sql,[name,price,category,stock])
        res.send(data[0])
    }catch(error){
        res.send(error)
    }
})


// get all product
routes.get('/',async(req,res)=>{
     const sql = `SELECT * FROM products`
    try{
        const data = await pool.query(sql)
        
        res.send(data[0])
    }catch(error){
        res.send(error)
    }
})


// // Search by name
routes.get('/search/:name',async(req,res)=>{
      const sql = `SELECT * from products where name= ?`
    const name = req.params.name
    try{
        const data = await pool.query(sql,[name])
        res.send(data[0])
    }catch(error){
        res.send(error)
    }
})



//Get product by ID
routes.get('/:id',async(req,res)=>{
     const sql = `SELECT * FROM products where id= ?`
    const id = req.params.id
    try{
        const data = await pool.query(sql,[id])
        
        res.send(data[0])
    }catch(error){
        res.send(error)
    }
})


//	Update product
routes.put('/:id/:name',async(req,res)=>{
    const sql= `UPDATE products SET name= ?  where id = ?`
    const id =req.params.id
    const name = req.params.name
    try{
        const data = await pool.query(sql,[name,id])
        res.send(data[0])
    }catch(error){
        res.send(error)
    }
})

// //	Delete product
routes.delete('/:id',async(req,res)=>{
      const sql = `Delete from products where id= ?`
    const id = req.params.id
    try{
        const data = await pool.query(sql,[id])
        
        res.send(data[0])
    }catch(error){
        res.send(error)
    }
})




module.exports = routes