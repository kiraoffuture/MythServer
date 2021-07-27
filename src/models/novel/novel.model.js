const query = require("../mysql").query

const getAll = async () => query("select * from novel")

const getNewest = async (limit) => query(`select id, image_url, title, details, view_count, rating
                                          from novel
                                          order by updated_at desc
                                          limit ${limit}`)

const getPopular = async (limit) => query(`select id, image_url, title, view_count, rating
                                           from novel
                                           order by view_count desc
                                           limit ${limit}`)

const getDetail = async (id) => {
    const novels = await query(`select id, image_url, title, details, view_count, rating, status
                                from novel
                                where id = ?`, [id])
    return novels[0]
}

const searchSuggestion = async (searchText) => {
    return await query(`select id, title, image_url
                        from novel
                        where title like ?
                        limit 5`, [`%${searchText}%`])
}

const search = async (searchText) => {
    return await query(`select id, image_url, title, view_count, rating
                        from novel
                        where title like ?
                        limit 5`, [`%${searchText}%`])
}

const getNovelsByIds = (ids) => {
    if (ids.length === 0) return Promise.resolve([])
    return query(`select id, image_url, title, details, view_count, rating
                  from novel
                  where id in (${ids.join(',')})`)
}

module.exports = {getAll, getNewest, getPopular, getDetail, searchSuggestion, search, getNovelsByIds}
