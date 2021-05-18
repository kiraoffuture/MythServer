const express = require("express")
const app = express()
const {serverPort} = require("../common/constants")
const routers = require("../configs/routes.config")
const path = require("path")

const start = () => {
    app.listen(serverPort, () => {
        console.log("Server Listen")
        routers.forEach((router) => {
            app.use(router.path, require(path.resolve(router.router)))
        })
    })
}

module.exports = {start}
