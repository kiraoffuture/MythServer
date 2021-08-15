const mysql = require("mysql")
const {MySqlState} = require("../common/enums")

const mysqlPool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.MYSQL_HOST ? process.env.MYSQL_HOST : "localhost",
    user: process.env.MYSQL_USER ? process.env.MYSQL_USER : "root",
    password: process.env.MYSQL_PASSWORD ? process.env.MYSQL_PASSWORD : "1234",
    database: process.env.MYSQL_DATABASE ? process.env.MYSQL_DATABASE : "myth",
    charset: "utf8_unicode_ci"
});

const getConnection = async () => new Promise(((resolve, reject) => {
    mysqlPool.getConnection(function (err, connection) {
        if (err) {
            console.log(' Error getting mysql_pool connection: ' + err);
            reject(err)
            return
        }
        resolve(connection)
    })
}))

const querySql = async (connection, sql, params) => new Promise(((resolve, reject) => {
    connection.query(sql, params, (error, results) => {
        if (error) return reject(error)
        return resolve(results)
    })
}))

const query = async (sql, params) => {
    const connection = await getConnection()
    console.log("connection = " + connection)
    if (connection === undefined) return
    const result = await querySql(connection, sql, params)
    connection.release()
    return result
}

module.exports = {query}
