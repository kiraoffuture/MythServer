const express = require("express")
const router = express.Router()
const genreController = require("./genre.controller");

/**
 @api {get} /genre/list Get List Genres
 @apiName GetListGenres
 @apiGroup Genre

 @apiSuccess {String} status <code>success</code>
 @apiSuccess {Object} data List Genres

 @apiSuccessExample Success-Response:
 {
    "status": "success",
    "data": [
        {
            "id": 1,
            "name": "Hệ Thống",
            "image_url": "https://korea.com.vn/wp-content/uploads/2021/02/iu-song-trong-can-phong-gian-di-kho-tin-du-so-huu-tai-san-28-trieu-usd-8e1-5593599.jpg"
        },
        {
            "id": 2,
            "name": "Quân Sự",
            "image_url": "https://korea.com.vn/wp-content/uploads/2021/02/iu-song-trong-can-phong-gian-di-kho-tin-du-so-huu-tai-san-28-trieu-usd-8e1-5593599.jpg"
        },
        {
            "id": 3,
            "name": "Trọng Sinh",
            "image_url": "https://korea.com.vn/wp-content/uploads/2021/02/iu-song-trong-can-phong-gian-di-kho-tin-du-so-huu-tai-san-28-trieu-usd-8e1-5593599.jpg"
        }
    ]
}
 */
router.get("/list", genreController.getGenre)

module.exports = router
