const query = require("./mysql")

const getAll = async () => {
    const sql = "select * from novel"
    return query(sql)
}

const getNewest = async (limit) => {
    const sql = `select * from novel order by updated_at desc limit ${limit}`
    return query(sql)
}

module.exports = {getAll, getNewest}
