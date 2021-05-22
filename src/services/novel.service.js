const novelModel = require("../database/novel.model")

const getAll = novelModel.getAll

const getNewest = novelModel.getNewest

module.exports = {getAll, getNewest}
