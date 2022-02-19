require('dotenv').config()
const user = process.env.DB_USER
const password = process.env.DB_PASS
const db = process.env.DB

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
    return global.connection
const mysql = require('mysql2/promise')
const connection = await mysql.createConnection(`mysql://${user}:${password}@localhost:3306/${db}`)
console.log("Conectado ao MYSQL")

global.connection = connection
return connection
}

// async function selectCustomers() {
//     const conn = await connect()
//     return await conn.query('select * from grupos;')
// }

module.exports = {connect}
