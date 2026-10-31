const mysql = require('mysql2/promise')


           const pool = mysql.createPool({
                host:'localhost',
                user:'kd3-98807-Sachin',
                password:'sachin',
                database :'express',
            })


module.exports=pool;