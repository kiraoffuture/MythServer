const express = require("express")
const router = express.Router()
const novelController = require("../controllers/novel.controller")

/**
 @api {get} /novel/all Get All Novels
 @apiName GetAllNovels
 @apiGroup Novel

 @apiSuccess {String} status <code>success</code>
 @apiSuccess {Object} data List novels

 @apiSuccessExample Success-Response:
 {
   "status":"success",
   "data":[
      {
         "id":1,
         "image_url":"https://cdn.wuxiaworld.com/images/covers/dop.jpg?ver=77c208ac6bf01989ba4c4b8f8b4ade7108ce0604",
         "title":"Duke Pendragon",
         "details":"\n<p><strong>Schedule:</strong> one chapter per day</p><p><strong>Discord link:</strong> <a href=\"https://discord.gg/SfvPUuGqPA\">https://discord.gg/SfvPUuGqPA</a></p>\n",
         "view_count":0,
         "rating":0
      }
   ]
}
 */
router.get("/all", novelController.getAll)

/**
 @api {get} /novel/newest Get 30 newest novels
 @apiName GetNewestNovels
 @apiGroup Novel

 @apiParam {Integer} size=30 Size of list novels

 @apiSuccess {String} status <code>success</code>
 @apiSuccess {Object} data List novels

 @apiSuccessExample Success-Response:
 {
   "status":"success",
   "data":[
      {
         "id":1,
         "image_url":"https://cdn.wuxiaworld.com/images/covers/dop.jpg?ver=77c208ac6bf01989ba4c4b8f8b4ade7108ce0604",
         "title":"Duke Pendragon",
         "details":"\n<p><strong>Schedule:</strong> one chapter per day</p><p><strong>Discord link:</strong> <a href=\"https://discord.gg/SfvPUuGqPA\">https://discord.gg/SfvPUuGqPA</a></p>\n",
         "view_count":0,
         "rating":0
      }
   ]
}
 */
router.get("/newest", novelController.getNewest)

/**
 @api {get} /novel/popular Get 50 popular novels
 @apiName GetPopularNovels
 @apiGroup Novel

 @apiParam {Integer} size=50 Size of list novels

 @apiSuccess {String} status <code>success</code>
 @apiSuccess {Object} data List novels

 @apiSuccessExample Success-Response:
 {
   "status":"success",
   "data":[
      {
         "id":1,
         "image_url":"https://cdn.wuxiaworld.com/images/covers/dop.jpg?ver=77c208ac6bf01989ba4c4b8f8b4ade7108ce0604",
         "title":"Duke Pendragon",
         "details":"\n<p><strong>Schedule:</strong> one chapter per day</p><p><strong>Discord link:</strong> <a href=\"https://discord.gg/SfvPUuGqPA\">https://discord.gg/SfvPUuGqPA</a></p>\n",
         "view_count":0,
         "rating":0
      }
   ]
}
 */
router.get("/popular", novelController.getPopular)

/**
 @api {get} /novel/{id} Get detail of novel
 @apiName GetNovelDetail
 @apiGroup Novel

 @apiParam {Integer} id Id of novel

 @apiSuccess {String} status <code>success</code>
 @apiSuccess {Object} data Novel object

 @apiSuccessExample Success-Response:
 {
   "status":"success",
   "data": {
             "id":1,
             "image_url":"https://cdn.wuxiaworld.com/images/covers/dop.jpg?ver=77c208ac6bf01989ba4c4b8f8b4ade7108ce0604",
             "title":"Duke Pendragon",
             "details":"\n<p><strong>Schedule:</strong> one chapter per day</p><p><strong>Discord link:</strong> <a href=\"https://discord.gg/SfvPUuGqPA\">https://discord.gg/SfvPUuGqPA</a></p>\n",
             "view_count":0,
             "rating":0,
             "status":"Ongoing"
            }
}
 */
router.get("/:id", novelController.getDetail)

/**
 @api {get} /novel/chapters/{id} Get list chapters of novel
 @apiName GetNovelChapters
 @apiGroup Novel

 @apiParam {Integer} id Id of novel

 @apiSuccess {String} status <code>success</code>
 @apiSuccess {Object} data List chapters

 @apiSuccessExample Success-Response:
 {
   "status":"success",
   "data": {
             "id":1,
             "image_url":"https://cdn.wuxiaworld.com/images/covers/dop.jpg?ver=77c208ac6bf01989ba4c4b8f8b4ade7108ce0604",
             "title":"Duke Pendragon",
             "details":"\n<p><strong>Schedule:</strong> one chapter per day</p><p><strong>Discord link:</strong> <a href=\"https://discord.gg/SfvPUuGqPA\">https://discord.gg/SfvPUuGqPA</a></p>\n",
             "view_count":0,
             "rating":0,
             "status":"Ongoing"
            }
}
 */
router.get("/chapters/:id", novelController.getChapters)

module.exports = router
