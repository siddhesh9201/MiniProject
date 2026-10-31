const express = require('express')
const pool = require('../db/pool')
const routes = express.Router()



// add Product
routes.post('/',(req,res)=>{
   res.send("product Get ReQ")
})

// get all product
routes.get('/',async(req,res)=>{
     const sql = `SELECT * FROM products`
    try{
        const data = await pool.query(sql)
        res.send(data[0][0])
    }catch(error){
        res.send(error)
    }
})

//Get product by ID
routes.get('/',(req,res)=>{
    res.send("product Get ReQ")
})


//	Update product
routes.put('/',(req,res)=>{
    res.send("product Get ReQ")
})

//	Delete product
routes.delete('/',(req,res)=>{
    res.send("product Get ReQ")
})


// Search by name
routes.get('/',(req,res)=>{
    res.send("product Get ReQ")
})

module.exports = routes