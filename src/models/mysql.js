const mysql = require("mysql")
const {MySqlState} = require("../common/enums")

const connection = mysql.createConnection({
    host: "remotemysql.com",
    user: "KWvA4YaPe4",
    password: "Pw78MSiLB3",
    database: "KWvA4YaPe4",
    charset: "utf8_unicode_ci"
})

const connectMysql = async () => new Promise(((resolve, reject) => {
    connection.connect((error) => {
        if (error) return reject(error)
        resolve()
    })
}))

const querySql = async (connection, sql, params) => new Promise(((resolve, reject) => {
    console.log(sql)
    connection.query(sql, params, (error, results) => {
        if (error) return reject(error)
        return resolve(results)
    })
}))

const query = async (sql, params) => {
    if (connection.state === MySqlState.DISCONNECTED) {
        await connectMysql()
        return querySql(connection, sql, params)
    }
    return querySql(connection, sql, params)
}

module.exports = {connectMysql, query}
