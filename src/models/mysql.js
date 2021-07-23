const mysql = require("mysql")
const {MySqlState} = require("../common/enums")

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    charset: "utf8_unicode_ci"
})

const connectMysql = async () => new Promise(((resolve, reject) => {
    connection.connect((error) => {
        if (error) {
            console.log("zzzz")
            return reject(error)
        }
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
