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

module.exports = {getAll, getNewest}
