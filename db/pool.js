const mysql = require('mysql2/promise')


           const pool = mysql.createPool({
                host:'192.168.1.18',
                user:'root',
                password:'admin123',
                database :'express'  
            })


module.exports=pool;