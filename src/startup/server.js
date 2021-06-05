const express = require("express")
const app = express()
const connectMysql = require("../models/mysql").connectMysql
const {serverPort} = require("../common/constants")
const routers = require("../configs/routes.config")
const path = require("path")

const start = async () => {
    await connectMysql()
    console.log("1. Mysql Connected")
    app.listen(serverPort, () => {
        console.log("2. Server Listen")
        routers.forEach((router) => {
            app.use(router.path, require(path.resolve(router.router)))
        })
    })
}

module.exports = {start}
