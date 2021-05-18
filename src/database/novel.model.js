const query = require("./mysql")

const getAll = async () => {
    const sql = "select * from novel"
    return query(sql)
}

module.exports = {getAll}
