const novelModel = require("../models/novel.model")
const authorNovelModel = require("../models/author-novel.model")
const authorModel = require("../models/author.model")
const genreNovelModel = require("../models/genre-novel.model")
const genreModel = require("../models/genre.model")
const chapterModel = require("../models/chapter.model")

const getAll = novelModel.getAll

const getNewest = async (limit) => {
    const novels = await novelModel.getNewest(limit)
    for await (const novel of novels) {
        novel.chapter_count = await chapterModel.countChapterByNovelId(novel.id)
        novel.source_url = undefined
        novel.created_at = undefined
        novel.updated_at = undefined
        novel.rating_count = undefined
        novel.status = undefined
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
        novel.source_url = undefined
        novel.created_at = undefined
        novel.updated_at = undefined
        novel.rating_count = undefined
        novel.status = undefined
    }
    return novels
}

const getDetail = async (id) => {
    const novel = await novelModel.getDetail(id)
    const authorIds = await authorNovelModel.getAuthorIdsByNovelId(novel.id)
    novel.authors = await authorModel.getAuthorsByAuthorIds(authorIds)
    const genreIds = await genreNovelModel.getGenreIdsByNovelId(novel.id)
    novel.genres = await genreModel.getGenreNamesByIds(genreIds)
    novel.source_url = undefined
    novel.created_at = undefined
    novel.updated_at = undefined
    novel.rating_count = undefined
    return novel
}

const getChapters = async (novelId) => chapterModel.getChaptersByNovelId(novelId)

const getFirstChapterByNovelId = async (novelId) => chapterModel.getFirstChapterByNovelId(novelId)

const getFullChapters = async (novelId) => chapterModel.getFullChaptersByNovelId(novelId)

module.exports = {getAll, getNewest, getPopular, getDetail, getChapters, getFirstChapterByNovelId, getFullChapters}
