const query = require("../mysql").query

const getGenreIdsByNovelId = async (novelId) => {
    const rows = await query(`select id_genre
                              from genrenovel
                              where id_novel = ${novelId}`)
    return rows.map(row => row.id_genre)
}

const getNovelIdsByGenreId = async (genreId) => {
    const rows = await query(`select id_novel
                              from genrenovel
                              where id_genre = ?`, [genreId])
    return rows.map(row => row.id_novel)
}

const countNovelOfGenre = async (genreId) => {
    const result = await query(`select count(id_novel)
                                from genrenovel
                                where id_genre = ${genreId}`)
    console.log("count = " + result[0]["count(id_novel)"])
    return result[0]["count(id_novel)"]
}

module.exports = {getGenreIdsByNovelId, getNovelIdsByGenreId, countNovelOfGenre}
