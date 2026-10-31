const express = require('express')
const productRoute = require('./routes/productRoutes')
const app = express()

app.use('/product',productRoute)

app.listen(4000,'localhost',()=>{
    console.log("App is Runnig on 4000")
})  