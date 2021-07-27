const novelModel = require("./novel.model")
const authorNovelModel = require("../author_novel/author_novel.model")
const authorModel = require("../author/author.model")
const genreNovelModel = require("../genre_novel/genre_novel.model")
const genreModel = require("../genre/genre.model")
const chapterModel = require("../chapter/chapter.model")

const getAll = novelModel.getAll

const getNewest = async (limit) => {
    const novels = await novelModel.getNewest(limit)
    for await (const novel of novels) {
        novel.chapter_count = await chapterModel.countChapterByNovelId(novel.id)
    }
    return novels
}

const getPopular = async (limit) => {
    const novels = await novelModel.getPopular(limit)
    for await (const novel of novels) {
        novel.chapter_count = await chapterModel.countChapterByNovelId(novel.id)
        const genreIds = await genreNovelModel.getGenreIdsByNovelId(novel.id)
        novel.genres = await genreModel.getGenreNamesByIds(genreIds)
        const authorIds = await authorNovelModel.getAuthorIdsByNovelId(novel.id)
        novel.authors = await authorModel.getAuthorsByAuthorIds(authorIds)
    }
    return novels
}

const getDetail = async (id) => {
    const novel = await novelModel.getDetail(id)
    const authorIds = await authorNovelModel.getAuthorIdsByNovelId(novel.id)
    novel.authors = await authorModel.getAuthorsByAuthorIds(authorIds)
    const genreIds = await genreNovelModel.getGenreIdsByNovelId(novel.id)
    novel.genres = await genreModel.getGenreNamesByIds(genreIds)
    return novel
}

const getChapters = async (novelId) => chapterModel.getChaptersByNovelId(novelId)

const getFullChapters = async (novelId) => chapterModel.getFullChaptersByNovelId(novelId)

const searchSuggestion = async (searchText) => novelModel.searchSuggestion(searchText)

const search = async (searchText) => novelModel.search(searchText)

module.exports = {
    getAll,
    getNewest,
    getPopular,
    getDetail,
    getChapters,
    getFullChapters,
    searchSuggestion,
    search
}
