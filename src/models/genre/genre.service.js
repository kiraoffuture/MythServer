const genreModel = require("./genre.model")
const genreNovelModel = require("../genre_novel/genre-novel.model")
const novelModel = require("../novel/novel.model")

const getGenres = () => genreModel.getGenres()

const getNovelsByGenreId = async (genreId) => {
    const novelIds = await genreNovelModel.getNovelIdsByGenreId(genreId)
    return novelModel.getNovelsByIds(novelIds)
}

module.exports = {getGenres, getNovelsByGenreId}
