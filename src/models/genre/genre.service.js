const genreModel = require("./genre.model")
const genreNovelModel = require("../genre_novel/genre_novel.model")
const novelModel = require("../novel/novel.model")
const chapterModel = require("../chapter/chapter.model");
const authorNovelModel = require("../author_novel/author_novel.model");
const authorModel = require("../author/author.model");

const getGenres = async () => {
    const genres = await genreModel.getGenres()
    for await (const genre of genres) {
        genre.novel_count = await genreNovelModel.countNovelOfGenre(genre.id)
    }
    return genres
}

const getNovelsByGenreId = async (genreId) => {
    const novelIds = await genreNovelModel.getNovelIdsByGenreId(genreId)
    const novels = await novelModel.getNovelsByIds(novelIds)
    for await (const novel of novels) {
        novel.chapter_count = await chapterModel.countChapterByNovelId(novel.id)
        const genreIds = await genreNovelModel.getGenreIdsByNovelId(novel.id)
        novel.genres = await genreModel.getGenreNamesByIds(genreIds)
        const authorIds = await authorNovelModel.getAuthorIdsByNovelId(novel.id)
        novel.authors = await authorModel.getAuthorsByAuthorIds(authorIds)
    }
    return novels
}

module.exports = {getGenres, getNovelsByGenreId}
