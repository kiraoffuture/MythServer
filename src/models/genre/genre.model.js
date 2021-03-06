const query = require("../mysql").query

const getGenreNamesByIds = (ids) => {
    if (ids.length === 0) return Promise.resolve([])
    return query(`select id, name
                  from genre
                  where id in (${ids.join(',')})`)
}

const getGenres = () => {
    return query(`select id, name
                  from genre`)
}

module.exports = {getGenreNamesByIds, getGenres}
