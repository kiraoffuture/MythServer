const query = require("../mysql").query

const getGenreIdsByNovelId = async (novelId) => {
    const rows = await query(`select id_genre from genrenovel where id_novel = ${novelId}`)
    return rows.map(row => row.id_genre)
}

module.exports = {getGenreIdsByNovelId}
