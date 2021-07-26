const responseBuilder = require("../../common/builders/response.builder")
const chapterService = require("./chapter.service")
const logError = require("../../common/error-logs")
const {HttpCode} = require("../../common/enums")

const getChapter = (req, res) => {
    const chapterId = req.params.id
    chapterService.getChapter(chapterId).then(chapter => {
        res.json(responseBuilder.build(HttpCode.OK, chapter))
    }, error => {
        logError("Chapter getChapter", {chapterId}, error)
        res.status(HttpCode.NotFound)
        res.json(responseBuilder.build(HttpCode.NotFound))
    })
}

module.exports = {getChapter}
