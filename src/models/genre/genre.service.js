const genreModel = require("./genre.model")

const getGenres = () => genreModel.getGenres()

module.exports = {getGenres}
