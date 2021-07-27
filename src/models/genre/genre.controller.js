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

module.exports = {getGenre}
