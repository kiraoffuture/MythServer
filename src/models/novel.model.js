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
const search = async (searchText) => {
    return await query(`select id, title
                        from novel
                        where title like ?`, [`%${searchText}%`])
}
module.exports = {getAll, getNewest, getPopular, getDetail, search}
