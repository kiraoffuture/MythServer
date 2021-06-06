const query = require("./mysql").query

const getAll = async () => query("select * from novel")

const getNewest = async (limit) => query(`select *
                                          from novel
                                          order by updated_at desc limit ${limit}`)

const getPopular = async (limit) => query(`select *
                                           from novel
                                           order by view_count desc limit ${limit}`)
const getDetail = async (id) => {
    const novels = await query(`select *
                                from novel
                                where id = ?`, [id])
    return novels[0]
}
module.exports = {getAll, getNewest, getPopular, getDetail}
