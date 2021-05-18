const novelService = require("../services/novel.service")
const responseBuilder = require("../common/builders/response.builder")
const {HttpCode} = require("../common/enums");

const getAll = (req, res) => {
    novelService.getAll().then((novels) => {
        res.json(responseBuilder.build(HttpCode.OK, novels))
    }, (error) => {
        console.log("error = " + error)
        res.json(responseBuilder.build(HttpCode.OK, []))
    })
    return this
}

module.exports = {getAll}
