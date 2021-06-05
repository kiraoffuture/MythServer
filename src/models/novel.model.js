const query = require("./mysql")

const getAll = async () => query("select * from novel")

const getNewest = async (limit) => query(`select *
                                          from novel
                                          order by updated_at desc limit ${limit}`)

const getPopular = async (limit) => query(`select *
                                           from novel
                                           order by view_count desc limit ${limit}`)

module.exports = {getAll, getNewest, getPopular}
