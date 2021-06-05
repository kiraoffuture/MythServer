const query = require("./mysql").query

const getAuthorsByAuthorIds = async (authorIds) => {
    if (authorIds.length === 0) return Promise.resolve([])
    return query(`select * from author where id in (${authorIds.join(",")})`)
}

module.exports = {getAuthorsByAuthorIds}
