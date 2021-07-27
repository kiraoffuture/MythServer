const genreService = require("./genre.service")
const responseBuilder = require("../../common/builders/response.builder");
const logError = require("../../common/error-logs");
const {HttpCode} = require("../../common/enums");

const getGenre = (req, res) => {
    genreService.getGenres().then(genres => {
        res.json(responseBuilder.build(HttpCode.OK, genres))
    }, error => {
        logError("Get List Genres", {}, error)
        res.json(responseBuilder.build(HttpCode.OK, []))
    })
}

const getNovelsByGenreId = (req, res) => {
    const genreId = req.query.id
    genreService.getNovelsByGenreId(genreId).then(novels => {
        res.json(responseBuilder.build(HttpCode.OK, novels))
    }, error => {
        logError("Get List Novels By Genre Id", {}, error)
        res.json(responseBuilder.build(HttpCode.OK, []))
    })
}

module.exports = {getGenre, getNovelsByGenreId}
