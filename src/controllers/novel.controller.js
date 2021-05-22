const novelService = require("../services/novel.service")
const responseBuilder = require("../common/builders/response.builder")
const {HttpCode} = require("../common/enums");
const constants = require("../common/constants")

const getAll = (req, res) => {
    novelService.getAll().then((novels) => {
        res.json(responseBuilder.build(HttpCode.OK, novels))
    }, (error) => {
        console.log("error = " + error)
        res.json(responseBuilder.build(HttpCode.OK, []))
    })
    return this
}

const getNewest = (req, res) => {
    const size = req.query.size ? req.query.size : constants.newestNovelsSize
    novelService.getNewest(size).then((novels) => {
        res.json(responseBuilder.build(HttpCode.OK, novels))
    }, (error) => {
        console.log(error)
        res.json(responseBuilder.build(HttpCode.OK, []))
    })
}

module.exports = {getAll, getNewest}
