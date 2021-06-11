const novelService = require("../services/novel.service")
const responseBuilder = require("../common/builders/response.builder")
const {HttpCode} = require("../common/enums");
const constants = require("../common/constants")
const logError = require("../common/error-logs")

const getAll = (req, res) => {
    novelService.getAll().then((novels) => {
        res.json(responseBuilder.build(HttpCode.OK, novels))
    }, (error) => {
        logError("Novel getAll", {size}, error)
        res.json(responseBuilder.build(HttpCode.OK, []))
    })
    return this
}

const getNewest = (req, res) => {
    const size = req.query.size ? req.query.size : constants.newestNovelsSize
    novelService.getNewest(size).then((novels) => {
        res.json(responseBuilder.build(HttpCode.OK, novels))
    }, (error) => {
        logError("Novel getNewest", {size}, error)
        res.json(responseBuilder.build(HttpCode.OK, []))
    })
}

const getPopular = (req, res) => {
    const size = req.query.size ? req.query.size : constants.popularNovelsSize
    novelService.getPopular(size).then((novels) => {
        res.json(responseBuilder.build(HttpCode.OK, novels))
    }, (error) => {
        logError("Novel getPopular", {size}, error)
        res.json(responseBuilder.build(HttpCode.OK, []))
    })
}

const getDetail = (req, res) => {
    const novelId = req.params.id
    novelService.getDetail(novelId).then(novel => {
        res.json(responseBuilder.build(HttpCode.OK, novel))
    }, error => {
        logError("Novel getDetail", {novelId}, error)
        res.status(HttpCode.NotFound)
        res.json(responseBuilder.build(HttpCode.NotFound))
    })
}

const getChapters = (req, res) => {
    const novelId = req.params.id
    novelService.getChapters(novelId).then(chapters => {
        res.json(responseBuilder.build(HttpCode.OK, chapters))
    }, error => {
        logError("Novel getChapters", {novelId}, error)
        res.json(responseBuilder.build(HttpCode.OK, []))
    })
}

const getFirstChapterByNovelId = (req, res) => {
    const novelId = req.params.id
    novelService.getFirstChapterByNovelId(novelId).then(chapter => {
        res.json(responseBuilder.build(HttpCode.OK, chapter))
    }, error => {
        logError("Novel getFirstChapterByNovelId", {novelId}, error)
        res.status(HttpCode.NotFound)
        res.json(responseBuilder.build(HttpCode.NotFound))
    })
}

module.exports = {getAll, getNewest, getPopular, getDetail, getChapters, getFirstChapterByNovelId}
