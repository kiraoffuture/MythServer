const query = require("./mysql").query

const getAuthorIdsByNovelId = async (novelId) => {
    const rows = await query(`select id_author
                              from authornovel
                              where id_novel = ${novelId}`)
    return rows.map(row => row.id_author)
}

module.exports = {getAuthorIdsByNovelId}
