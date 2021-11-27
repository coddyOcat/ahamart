const mysql = require("mysql2")
const dbConfig = require("../config").db

var conn = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
})

module.exports = conn