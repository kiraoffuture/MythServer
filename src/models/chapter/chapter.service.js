const chapterModel = require("./chapter.model");

const getChapter = async (chapterId) => {
    return await chapterModel.getChapter(chapterId)
}

module.exports = {getChapter}
