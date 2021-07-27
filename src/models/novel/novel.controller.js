const novelService = require("./novel.service")
const responseBuilder = require("../../common/builders/response.builder")
const {HttpCode} = require("../../common/enums");
const constants = require("../../common/constants")
const logError = require("../../common/error-logs")
const {isBlank} = require("../../common/helper");

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
    const novelId = req.query.id
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

const getFullChapters = (req, res) => {
    const novelId = req.params.id
    novelService.getFullChapters(novelId).then(chapters => {
        res.json(responseBuilder.build(HttpCode.OK, chapters))
    }, error => {
        logError("Novel getChapters", {novelId}, error)
        res.json(responseBuilder.build(HttpCode.OK, []))
    })
}

const searchSuggestion = (req, res) => {
    const searchText = req.query.search_text
    if (isBlank(searchText)) {
        logError("Novel search suggestion", {searchText}, Error("Empty key search"))
        res.json(responseBuilder.build(HttpCode.OK, []))
        return
    }
    novelService.searchSuggestion(searchText).then(novels => {
        res.json(responseBuilder.build(HttpCode.OK, novels))
    }, error => {
        logError("Novel search suggestion", {searchText}, error)
        res.json(responseBuilder.build(HttpCode.OK, []))
    })
}

const search = (req, res) => {
    const searchText = req.query.search_text
    if (isBlank(searchText)) {
        logError("Novel search", {searchText}, Error("Empty key search"))
        res.json(responseBuilder.build(HttpCode.OK, []))
        return
    }
    novelService.search(searchText).then(novels => {
        res.json(responseBuilder.build(HttpCode.OK, novels))
    }, error => {
        logError("Novel search", {searchText}, error)
        res.json(responseBuilder.build(HttpCode.OK, []))
    })
}

module.exports = {getAll, getNewest, getPopular, getDetail, getChapters, getFullChapters, searchSuggestion, search}
