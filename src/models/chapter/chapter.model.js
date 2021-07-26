const query = require("../mysql").query

const countChapterByNovelId = async (novelId) => {
    const result = await query(`select count(id)
                                from chapter
                                where id_novel = ${novelId}`)
    return result[0]["count(id)"]
}

const getChaptersByNovelId = async (novelId) => query(`select id, \`index\`, title
                                                       from chapter
                                                       where id_novel = ?`, [novelId])
const getFullChaptersByNovelId = async (novelId) => query(`select id, \`index\`, title, content
                                                           from chapter
                                                           where id_novel = ?`, [novelId])

const getChapter = async (chapterId) => {
    const chapters = await query(`select id, \`index\`, title, content
                                  from chapter
                                  where id = ?`, [chapterId])
    return chapters[0]
}

module.exports = {
    countChapterByNovelId,
    getChaptersByNovelId,
    getChapter,
    getFullChaptersByNovelId
}
