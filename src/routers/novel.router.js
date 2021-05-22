const express = require("express")
const router = express.Router()
const novelController = require("../controllers/novel.controller")

/**
 @api {get} /novel/get_all Get All Novels
 @apiName GetAllNovels
 @apiGroup Novel

 @apiSuccess {String} status <code>success</code>
 @apiSuccess {Object} data Novel object

 @apiSuccessExample Success-Response:
 {
   "status":"success",
   "data":[
      {
         "id":1,
         "image_url":"https://cdn.wuxiaworld.com/images/covers/dop.jpg?ver=77c208ac6bf01989ba4c4b8f8b4ade7108ce0604",
         "title":"Duke Pendragon",
         "details":"\n<p><strong>Schedule:</strong> one chapter per day</p><p><strong>Discord link:</strong> <a href=\"https://discord.gg/SfvPUuGqPA\">https://discord.gg/SfvPUuGqPA</a></p>\n",
         "source_url":"https://www.wuxiaworld.com/novel/duke-pendragon",
         "view_count":0,
         "created_at":"2021-05-17T15:24:09.000Z",
         "rating":0,
         "rating_count":0,
         "status":"Ongoing"
      }
   ]
}
 */
router.get("/get_all", novelController.getAll)

module.exports = router
