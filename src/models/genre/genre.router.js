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

/**
 @api {get} /genre/novels Get List Novels By Genre Id
 @apiName GetListNovelsByGenreId
 @apiGroup Genre

 @apiParam {String} id genre id

 @apiSuccess {String} status <code>success</code>
 @apiSuccess {Object} data List Novels

 @apiSuccessExample Success-Response:
 {
    "status": "success",
    "data": [
        {
            "id": 19,
            "image_url": "https://123truyen.com/images/2020/12/toi-cuong-he-thong-de-hoang.jpeg",
            "title": "Tối Cường Hệ Thống Đế Hoàng",
            "details": "<p>【 【 văn học mạng chi vương huyền huyễn \"BOSS lưu\" yêu cầu viết bài 】 dự thi tác phẩm 】<br> <br> Đinh! Hồng bao mở ra thành công! Thu hoạch được thần khí một thanh! Đinh! Thu hoạch được rút thưởng luân bàn, bắt đầu rút thưởng!<br> <br> Tây Môn Hạo, mang theo dị giới hồng bao hệ thống xuyên qua đến Thiên Kình đại lục, Khánh quốc Đại hoàng tử thân bên trên, bắt đầu bật hack hoàng quyền chi lộ!<br> <br> Công pháp, phù lục, đan dược, thần tiên? Yêu quái? Hết thảy đến trẫm trong chén tới!<br> <br> Vương gia? Công chúa? Quân vương? Môn phái đại năng? Hết thảy thần phục tại trẫm dưới chân! Trẫm thế nhưng là mạnh nhất hồng bao hoàng đế!<br> <br> Hạo gia mở hồng bao bật hack! Thiên Kình chinh phục tại dưới chân! Liền hỏi một câu: Còn có ai? ! ! !<br> <br> Cảnh giới: Thoát thai, Ngưng Khí, Đoán Thần, luyện hồn, quy nhất, hóa hư, khai vân, trúc tinh, độ kiếp. . .<br> <br> Truyện mới của lão Hiệp Xả Đản, vẫn phong cách vô sỉ, vô địch lưu lại thêm tí hài tí sắc quen thuộc.<br> <br> ✯ Cvt by KOL</p>",
            "view_count": 154153,
            "rating": 3.6546282126511205
        }
    ]
}
 */
router.get("/novels", genreController.getNovelsByGenreId)
module.exports = router
