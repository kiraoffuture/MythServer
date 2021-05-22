const query = require("./mysql")

const getGenreNamesByIds = (ids) => {
    if (ids.length === 0) return Promise.resolve([])
    return query(`select * from genre where id in (${ids.join(',')})`)
}

module.exports = {getGenreNamesByIds}
