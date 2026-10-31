const mysql = require('mysql2/promise')


    const pool = mysql.createPool({
    host: '10.108.247.1',
    user: 'root',
    password: 'admin123',
    database: 'express',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


module.exports=pool;