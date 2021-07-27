const express = require("express")
const router = express.Router()
const novelController = require("./novel.controller")

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
 @api {get} /novel/detail Get detail of novel
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
router.get("/detail", novelController.getDetail)

/**
 @api {get} /novel/chapters/{id} Get list chapters of novel
 @apiName GetNovelChapters
 @apiGroup Novel

 @apiParam {Integer} id Id of novel

 @apiSuccess {String} status <code>success</code>
 @apiSuccess {Object} data List chapters

 @apiSuccessExample Success-Response:
 {
    "status": "success",
    "data": [
        {
            "id": 51,
            "index": 1,
            "title": "Book 1 – Prologue"
        },
        {
            "id": 150,
            "index": 2,
            "title": "Book 6, Prologue - Heart to Heart"
        }
    ]
}
 */
router.get("/chapters/:id", novelController.getChapters)

/**
 @api {get} /novel/download_chapters/{id} Get list full chapters of novel
 @apiName GetFullNovelChapters
 @apiGroup Novel

 @apiParam {Integer} id Id of novel

 @apiSuccess {String} status <code>success</code>
 @apiSuccess {Object} data List chapters

 @apiSuccessExample Success-Response:
 {
    "status": "success",
    "data": [
        {
            "id": 1,
            "index": 1,
            "title": "Chương 1: 1:: Phục Cừu Giả",
            "content": "<div class=\"visible-md visible-lg ads-responsive incontent-ad\" id=\"ads-chapter-pc-top\" align=\"center\" style=\"height:90px\"></div><p>Lúc ban đêm, một tòa phồn hoa bên trong lộ ra táo bạo nhị tuyến thành thị.</p> <p>Đường đi bên trên xe nước Mã Long, sống về đêm bắt đầu, để hứa bao nhiêu tuổi người từ nóng bức trong phòng chạy ra, thỏa thích tiêu xài lấy thời gian.</p> <p>Tô Hiểu ngồi chồm hổm ở một tòa tầng hai biệt thự nóc phòng, gió đêm thổi qua, để hắn cảm giác được một trận mát mẻ.</p> <p>Tô Hiểu thân mặc hắc y, đầu đội rộng lượng màu đen mũ trùm, tướng thân hình giấu ở nóc phòng trong bóng tối.</p> <p>Cái này thân trang phục tại khốc nhiệt mùa hè, liền xem như ban đêm, cũng sẽ cho người cảm thấy oi bức.</p> <p>Nhưng cùng hắn kia bất hạnh kinh lịch so sánh, cái này đều không tính là gì, hắn đã chờ đợi ở đây hai giờ.</p> <p>Lấy Tô Hiểu hiện tại niên kỷ, vốn nên tại trong đại học vượt qua thời gian tốt đẹp, nhưng hắn lại bởi vì cừu hận, tại ba năm trước đây từ bỏ việc học, bắt đầu học tập một chút những tri thức khác. </p> <p>Nhân thể giải phẫu học, cách đấu, nhanh chóng mở khóa chờ tri thức.</p> <p>Dài dằng dặc chờ đợi bắt đầu. . . .</p> <p>Hai giờ về sau, một cỗ màu đen xe sang trọng chậm rãi lái vào biệt thự trong nội viện, trầm muộn tiếng động cơ dập tắt, xe cửa mở ra, một vị mang theo men say trung niên nhân từ xe sang trọng bên trong đi ra. </p> <p>Bởi vì quá lượng uống rượu, trung niên nhân bước chân rõ ràng có chút phù phiếm.</p> <p>Biệt thự nóc phòng Tô Hiểu, cầm lấy bên người một thanh trường đao, trường đao ra khỏi vỏ, thân đao đen nhánh, mượn nhờ bóng đêm để cho người ta rất khó phát giác. </p> <p>Thả người từ cao năm mét nóc phòng nhảy xuống, Tô Hiểu kia linh hoạt cánh tay, trên không trung bắt lấy biệt thự bên trên đột xuất củ ấu, tốc độ rơi xuống chậm lại. </p> <p>Bình ổn rơi xuống đất, Tô Hiểu rơi vào cừu nhân ngay phía trước.</p> <p>Không có bất luận cái gì nói nhảm, Tô Hiểu trường đao trong tay vạch phá không khí, phát ra một trận tiếng nghẹn ngào về sau, một đao tướng cừu nhân yết hầu chém ra. </p> <p>Máu tươi phun ra ngoài, mặc dù Tô Hiểu cực lực tránh né, nhưng ống tay áo cùng mu bàn tay y nguyên bị máu tươi xâm nhiễm.</p> <p>Đã say rượu cừu nhân, còn không có minh bạch xảy ra chuyện gì, đã ngửa ngã xuống đất.</p> <p>Loại thương thế này cùng tử vong không khác, cho nên Tô Hiểu lập tức hướng người ở thưa thớt vị trí chạy.</p> <p>Dư quang đảo qua, Tô Hiểu nhìn thấy một tên người mặc đồng phục Bảo An.</p> <p>Mặc dù hắn ngay tại hành hung, nhưng bị người tại chỗ chính mắt trông thấy cũng không quan trọng, hắn tướng tướng mạo nấp rất kỹ.</p> <p>Nhưng sau đó một khắc, Tô Hiểu liền cảm thấy lông mao dựng đứng, tên kia Bảo An thế mà tại bên hông rút ra một khẩu súng, đen nhánh súng ngắn, thân súng thon dài, rõ ràng là chuyên chở ống giảm thanh giới. </p> <p>Bảo An làm sao có thể có súng, Tô Hiểu đã tới không kịp cẩn thận suy nghĩ.</p> <p>Phía sau là chí ít mười mấy diện rộng biệt thự, tên kia Bảo An cách hắn có chừng hai mươi mét, nếu như lựa chọn trốn, phía sau lưng liền sẽ triệt để bại lộ cho địch nhân, vậy liền thành bia sống. </p> <p>Gặp được nguy hiểm, Tô Hiểu phản ứng đầu tiên là giải quyết nguy hiểm đầu nguồn, tuyệt không phải trốn.</p> <p>Động thân xông về phía trước, Tô Hiểu thành S hình chạy, tận khả năng tránh cho bị thương kích.</p> <p>\"Phốc, phốc, phốc. . . .\"</p> <p>Chuyên chở ống giảm thanh súng ngắn, chỉ phát ra yếu ớt súng vang lên.</p> <p>Tô Hiểu vừa xông ra cách xa năm mét tả hữu, cũng cảm giác bắp chân tê rần, về sau ngực truyền đến cảm giác giống nhau.</p> <p>Tô Hiểu biết đây là trúng thương, mặc dù hắn là cái Phục Cừu Giả, nhưng hắn cũng không trúng qua thương.</p> <p>Cảm giác vô lực tại thân thể lan tràn, Tô Hiểu cũng không có sợ hãi, chỉ là có chút không cam lòng mà thôi.</p> <p>Báo thù còn chưa hoàn thành, hắn liền đã ngã xuống, mà lại là bị không biết địch nhân giết chết, đây là cỡ nào uất ức một sự kiện.</p> <p>Dùng hết cuối cùng khí lực, Tô Hiểu tướng trường đao trong tay ném ra ngoài.</p> <p>Cái này một đao căn bản là phó thác cho trời, nhưng lão thiên phảng phất phát giác được Tô Hiểu không cam lòng, cùng cái kia bất công tao ngộ, kia cây trường đao trên không trung phi tốc xoay tròn vài vòng về sau, lại như kỳ tích đâm vào đến cầm thương Bảo An ngực. </p> <p>Co quắp ngã xuống đất Tô Hiểu, trên mặt lộ ra dáng tươi cười.</p> <p>Kia cây trường đao hắn tôi hệ thần kinh độc tố, mà lại là hỗn hợp loại, tên kia bị đâm tổn thương Bảo An hẳn phải chết không nghi ngờ.</p> <p>Ý thức bắt đầu mơ hồ, Tô Hiểu cảm giác đầu lọt vào trọng kích, về sau trước mắt một mảnh đen kịt.</p> <p>Tại cuối cùng còn sót lại trong ý thức, Tô Hiểu mơ hồ nghe được.</p> <p>\"Liệp Sát giả, '' luân hồi nhạc viên '' vì ngươi mở ra.\"</p> <p>- - - - - - - - - - - - - -</p> <p>【 thân thể truyền thâu bên trong. . . 】</p> <p>【10%, 50%, 100%, truyền thâu hoàn thành, kiểm hạch đến Liệp Sát giả thân thể thụ đến đại lượng tổn thương, đợi chữa trị. . . . 】</p> <p>【 Liệp Sát giả ý thức chưa thức tỉnh, chữa trị chỉ lệnh trì hoãn, hiện duy trì thấp nhất sinh tồn trạng thái, duy trì thời gian mười phút. . . .\"</p> <p>【 tích. . . , phát hiện Liệp Sát giả thiên phú vì trở thành trưởng thiên phú, sinh tồn thời gian thêm vào hai giờ. 】</p> <p>Một phiến trong bóng tối, mấy hàng màu lam nhạt văn tự phiêu phù ở giữa không trung, phát ra nhàn nhạt ánh sáng nhạt.</p> <p>Tại màu lam nhạt văn tự phía dưới, Tô Hiểu đầy người máu tươi nằm trong hư không.</p> <p>Ngón tay co rúm, Tô Hiểu mơ màng tỉnh lại.</p> <p>Tại sau khi tỉnh lại, Tô Hiểu trước là có chút mờ mịt, nhưng nhớ lại kia họng súng đen ngòm về sau, lập tức nghĩ đứng người lên.</p> <p>Kịch liệt đau nhức truyền đến, Tô Hiểu đau suýt nữa lần nữa hôn mê.</p> <p>Phí sức ngồi dậy, Tô Hiểu liếc nhìn chung quanh, ngoại trừ mấy hàng lóe lam quang văn tự, bốn phía một mảnh đen kịt.</p> <p>【 Liệp Sát giả, hoan nghênh đi vào '' luân hồi nhạc viên '' 】</p> <p>Một hàng chữ viết trống rỗng ra hiện tại Tô Hiểu trước mặt, nhưng Tô Hiểu cũng không có đi xem kia một hàng chữ viết, mà là bắt đầu kiểm tra thân thể thương thế. </p> <p>Bắp chân bị đánh xuyên, miệng vết thương da thịt xoay tròn, ngón tay đều có thể tuỳ tiện thăm dò vào trong đó.</p> <p>Loại này máu tanh tình cảnh, Tô Hiểu chỉ là mày nhăn lại, cũng không có cái khác biểu hiện.</p> <p>Hắn trải qua so cái này tàn khốc gấp mười tình cảnh, cho nên những này cũng không thể để hắn động dung.</p> <p>Chỗ ngực thương thế càng thêm nghiêm trọng, nhưng vô luận là bắp chân hoặc chỗ ngực tổn thương, đều không có lại chảy ra mảy may huyết kế.</p> <p>\"Ta không chết?\"</p> <p>Nắm tay đặt tại ngực, Tô Hiểu cảm giác được trái tim tại hữu lực nhảy lên.</p> <p>【 Liệp Sát giả, ngươi cũng không có tử vong, là / không nguyện ý gia nhập '' luân hồi nhạc viên '', nơi này có ngươi muốn hết thảy. 】</p> <p>Tô Hiểu đã sớm chú ý tới những cái kia khả nghi văn tự, nhưng từ đối với không biết sự vật cảnh giác, hắn cũng không để ý những cái kia văn tự.</p> <p>Tình huống hiện tại có chút quỷ dị, hắn thụ hẳn phải chết thương thế, nhưng lại như kỳ tích sống tiếp được, mà lại ở trước mặt hắn có một nhóm huyết hồng sắc số lượng ngay tại đếm ngược. 【1: 35: 10 】, 【1: 35: 9 】. . . .</p> <p>Một giờ ba mươi lăm phút lẻ chín giây, nếu như Tô Hiểu không có đoán sai, đây chính là những con số kia ý tứ, mà lại số lượng còn đang không ngừng đếm ngược. </p> <p>Cái này huyết hồng sắc số lượng, cho Tô Hiểu một loại chẳng lành cảm giác, phảng phất tại con số này về không lúc, hắn sẽ mất đi sinh mệnh.</p> <p>【 Liệp Sát giả, xin mau sớm cùng '' nhạc viên '' câu thông, lấy ký kết khế ước, nếu không ngươi sẽ tại ''1 giờ 35 phân '' sau tử vong 】</p> <p>Quả nhiên, những con số kia đại biểu hắn còn có thể sống sót thời gian, Tô Hiểu trước đó liền có suy đoán, thương thế của hắn quá nặng, sớm nên tử vong.</p> <p>\"Đao của ta đâu.\"</p> <p>Tô Hiểu không có để ý cái gì '' khế ước '' hoặc '' nhạc viên '', mà là hướng đối phương yêu cầu đao của hắn.</p> <p>Cây đao kia là cha mẹ của hắn lưu cho hắn duy nhất kỷ niệm, nghe nói là hắn thái gia gia tịch thu được một thanh sĩ quan đao, một mực truyền đến hắn thế hệ này. 【 hiện thực vật phẩm không cách nào đưa vào '' nhạc viên '' bên trong, xin mau sớm ký kết khế ước. 】</p> <p>Tô Hiểu trầm mặc, màu lam nhạt văn tự chớp động, có thể là chưa từng gặp qua Tô Hiểu loại này '' Liệp Sát giả '' .</p> <p>\"Khế ước? Nói một chút, ta cần phải bỏ ra cái gì, lại có thể được cái gì.\"</p> <p>Dần dần giảm bớt sinh tồn thời gian, để Tô Hiểu không có quá nhiều thời gian đi trì hoãn, mà lại hắn cảm giác, hắn hẳn là gặp cái gì '' siêu tự nhiên '' sự kiện, cái này khiến nội tâm của hắn có chút ba động. </p> <p>Tô Hiểu rất cần lực lượng đi báo thù, mà '' siêu tự nhiên '' sự kiện tại nương theo to lớn nguy hiểm đồng thời, cũng có thể là thu hoạch được không giống tầm thường lực lượng. 【 ký kết khế ước, ngươi tướng xuyên thẳng qua tại từng cái '' diễn sinh vị diện '' bên trong, đi hoàn thành '' luân hồi nhạc viên '' ban bố nhiệm vụ, thu hoạch được '' thế giới chi nguyên '', cuối cùng lấy '' thế giới chi nguyên '' nhiều ít, đến cố định ban thưởng phải chăng phong phú. 】 【 '' luân hồi nhạc viên '' không gì làm không được. 】</p> <p>. . . .</p> <p>Đại lượng văn tự hiển hiện, Tô Hiểu cẩn thận đọc lấy.</p> <p>\"Không gì làm không được? Năng sống lại qua đời người?\"</p> <p>Tất cả màu lam nhạt văn tự bỗng nhiên đứng im giữa không trung, về sau toàn bộ biến mất.</p> <p>【 xét thấy ngươi Liệp Sát giả thân phận, không thể. 】</p> "
        },
        {
            "id": 2,
            "index": 2,
            "title": "Chương 2: Sát Giả, Cái Này Thần Bí Luân Hồi Nhạc Viên Từ Một Bắt Đầu Liền Xưng Hô Như Vậy Tô Hiểu.",
            "content": "<div class=\"visible-md visible-lg ads-responsive incontent-ad\" id=\"ads-chapter-pc-top\" align=\"center\" style=\"height:90px\"></div><p>Xưng hô thế này, để Tô Hiểu cảm giác có chút kỳ quái, bởi vì hắn cũng không có ký kết kia cái gọi là khế ước.</p> <p>\"Liệp Sát giả xưng hô này đại biểu cái gì.\"</p> <p>Tô Hiểu vấn đề này, để luân hồi nhạc viên xuất hiện to lớn phản ứng.</p> <p>【 người bình thường tại ký kết khế ước về sau, sẽ thành khế ước giả, làm vui vườn chấp hành nhiệm vụ, nhạc viên cho ban thưởng. 】</p> <p>【 cái gọi là Liệp Sát giả, là một chút thiên phú đặc thù khế ước giả, những này khế ước giả thiên phú càng thêm thích hợp chiến đấu. 】</p> <p>【 Liệp Sát giả tại thi hành phổ thông nhiệm vụ đồng thời, nhạc viên tướng cùng lúc tuyên bố săn giết nhiệm vụ, thanh lý những cái kia dị thường khế ước giả. 】 【 hỏi thăm số lần hao hết, nhạc viên không lại trả lời Liệp Sát giả vấn đề gì, mời ký kết khế ước hoặc đợi đợi tử vong. 】</p> <p>Chỗ có quang mang biến mất, bốn phía trở nên một mảnh đen kịt.</p> <p>Một trương bộ dáng cổ phác tấm da dê, trong hư không bắn ra, rủ xuống giữa không trung.</p> <p>Tô Hiểu phí sức đứng người lên, đi đến tấm da dê trước.</p> <p>Trên giấy da dê tràn đầy kỳ quái ký hiệu, tại nhất phía dưới vị trí, là mảng lớn trống không.</p> <p>【 là / không ký kết khế ước. 】</p> <p>Tô Hiểu mơ hồ cảm giác, nếu như hắn ký kết phần này khế ước, nhân sinh của hắn tướng sẽ phát sinh nghiêng trời lệch đất cải biến.</p> <p>Hắn có quá nhiều chuyện muốn làm, dù là coi như phía trước là vực sâu vạn trượng, hắn cũng chỉ có thể thả người nhảy xuống.</p> <p>\"Ta ~, đồng ý.\"</p> <p>Tô Hiểu vừa dứt lời, tay liền không bị khống chế nâng lên, về sau ngón cái ấn về phía tấm da dê trống không chỗ.</p> <p>Nhói nhói tại đầu ngón tay truyền đến, một vòng Diễm Hồng máu tươi tướng tấm da dê xâm nhiễm, cả trương tấm da dê đều biến thành màu đỏ nhạt, để lộ ra một cỗ nhàn nhạt mùi máu tanh. 【 khế ước thành lập! Bắt đầu chữa trị Liệp Sát giả thương thế. 】</p> <p>Nhạt lục sắc quang mang tại Tô Hiểu chung quanh xuất hiện, leo lên tại thân thể của hắn bên trên, ngắn ngủi mấy giây bên trong, thương thế của hắn liền triệt để khôi phục. 【 thương thế chữa trị hoàn thành, cưỡng chế thức tỉnh Liệp Sát giả thiên phú. 】</p> <p>Thân thể mới khôi phục bình thường, không đợi Tô Hiểu thở phào, một cỗ kịch liệt đau nhức tại các vị trí cơ thể truyền đến.</p> <p>Kịch liệt đau nhức tới phi thường đột nhiên, để Tô Hiểu các vị trí cơ thể mạch máu toàn bộ bạo khởi.</p> <p>Nhưng Tô Hiểu sự nhẫn nại vượt qua thường nhân, chỉ là phát ra rên lên một tiếng, quỳ một gối xuống trên mặt đất.</p> <p>Kịch liệt đau nhức tới đột nhiên, biến mất đồng dạng cấp tốc, Tô Hiểu phát giác được, trong cơ thể hắn phảng phất có một loại nào đó đồ vật bị tỉnh lại.</p> <p>Cái loại cảm giác này cũng không đường đột, giống như bản thân hắn liền có loại năng lực này, nhưng nhưng vẫn không năng phát giác.</p> <p>【 vì trực quan biểu hiện Liệp Sát giả tổng hợp tố chất, nửa số liệu hóa mở ra. 】</p> <p>【 cảnh cáo; nửa số liệu hóa làm phụ trợ năng lực chiến đấu, trái tim, đại não chờ trọng yếu tổ chức bị hao tổn nghiêm trọng, Liệp Sát giả y nguyên sẽ chết, mời Liệp Sát giả cẩn thận ứng đối diễn sinh vị diện . 】 【 Liệp Sát giả chuyên môn thí luyện bắt đầu, như không cách nào hoàn thành thí luyện, nhạc viên tướng bóc ra Liệp Sát giả thân phận, trở thành phổ thông khế ước giả, như tại nhiệm vụ bên trong tử vong, Liệp Sát giả sẽ triệt để tử vong. 】 【 nhạc viên điều lệ: Hết thảy đều tướng Đồng Giá Trao Đổi, 】</p> <p>Tô Hiểu vừa đọc xong trước mắt văn tự, cũng cảm giác mắt tối sầm lại, về sau mất đi tri giác.</p> <p>【 truyền tống bắt đầu. . . 】</p> <p>- - - - - - - - - - - - - - - - - - - - - -</p> <p>Tô Hiểu tỉnh lại lần nữa lúc, người đã ở một gian rách rưới trong phòng.</p> <p>Phòng ốc chỉ có mười mấy mét vuông lớn nhỏ, nóc nhà đã là nửa đổ sụp hình, ánh nắng bắn thẳng đến mà vào.</p> <p>Góc tường có đại lượng mạng nhện, trên lưới nhện đã che kín tro bụi, cửa sổ cùng cửa đã không cánh mà bay, nhưng bốn phía không có chút nào tia sáng xuyên vào, chỉ có thể nhìn thấy mảng lớn rác rưởi, một chút rác rưởi đã thông qua cửa sổ tràn vào đến trong phòng. </p> <p>Căn này rách rưới gian phòng, bị vùi lấp tại một tòa cỡ lớn trong đống rác, chỉ có nóc nhà là lối ra.</p> <p>Gay mũi hôi chua vị truyền đến, ngay tại Tô Hiểu chuẩn bị rời đi nơi này lúc, trên cánh tay truyền đến một trận thiêu đốt cảm giác.</p> <p>Một thanh lợi kiếm bộ dáng hình xăm màu đen, phù hiện tại hắn cánh tay bên trên.</p> <p>Loại kia màu lam nhạt văn tự xuất hiện lần nữa,</p> <p>Nhưng lần này cũng không phải là trôi nổi trong không khí, mà là trực tiếp ra hiện tại hắn trong tầm mắt, coi như thị giác di động, những cái kia văn tự cũng là đứng im trạng thái, phảng phất khảm nạm tại hắn võng mạc bên trên. </p> <p>Văn tự nội dung như sau:</p> <p>Tiến vào thế giới; hải tặc vương</p> <p>Thế giới độ khó: LV. 6. Luyện Ngục (này độ khó vì săn giết chuyên môn thí luyện độ khó, )</p> <p>Thế giới chi nguyên;0%(Liệp Sát giả thăm dò hoặc cùng thế giới hiện tại nhân vật giao lưu, thế giới chi nguyên sẽ tăng trưởng, tại kết toán thế giới lúc, cùng nhiệm vụ độ khó lẫn nhau tính toán, hình thành cuối cùng cho điểm) Thế giới giới thiệu vắn tắt; biển cả, tự do, hải tặc, Hải quân, Chính Phủ Thế Giới.</p> <p>Chủ tuyến nhiệm vụ; ám sát vương quốc Goa Quốc vương.</p> <p>Chi nhánh nhiệm vụ; không.</p> <p>Cảnh cáo: Xin chớ tại thế giới này đề cập nhạc viên hết thảy, như cảnh cáo vô hiệu, tướng cưỡng chế xử quyết!</p> <p>Nhắc nhở: Thế giới này vì Cao Đẳng diễn sinh thế giới, xin chớ rời đi vương quốc Goa khu vực, nếu không thế giới độ khó tướng tăng lên trên diện rộng!</p> <p>Nhắc nhở: Bởi vì Liệp Sát giả lần đầu tiến vào thế giới, bản Quốc tế ngữ nói Liệp Sát giả tự động nắm giữ, kỳ hạn (ba cái tự nhiên ngày)</p> <p>Thế giới, bắt đầu!</p> <p>Văn tự biến mất, Tô Hiểu bắt đầu chải vuốt hắn hiểu rõ đến tin tức.</p> <p>Đầu tiên, hắn đi vào một chỗ rất thần bí địa phương, nơi này tên là luân hồi nhạc viên, luân hồi nhạc viên mục đích hắn không được biết, nhưng mục đích của hắn rất rõ ràng, cái kia chính là tại luân hồi nhạc viên ở bên trong lấy được lực lượng, có lực lượng mới có thể báo thù. </p> <p>Tiếp theo liền là hắn tình cảnh hiện tại, hắn thế mà đi tới hải tặc vương thế giới.</p> <p>Hắn mặc dù muốn báo thù, nhưng ở lúc rảnh rỗi, cũng sẽ nhìn một chút Anime thả lỏng một ít tâm tình, người không thể luôn luôn căng cứng.</p> <p>Lấy Tô Hiểu đối hải tặc thế giới hiểu rõ, nơi này là một cái cao nguy thế giới, đến cuối cùng, những cường giả kia thậm chí có thể đánh chìm một tòa đảo, hoặc một mình đồ diệt một quốc gia, Mặc dù Tinh thông một chút kỹ xảo giết người, nhưng Tô Hiểu tại nơi này chỉ có thể coi là một người bình thường, đến loại này đầy là phi nhân quái vật thế giới, có thể nói bước đi liên tục khó khăn. </p> <p>Từ thế giới độ khó kia Địa Ngục hai chữ, liền có thể đoán ra thế giới này độ khó.</p> <p>Về phần cuối cùng cho ra nhiệm vụ, Tô Hiểu càng là không rõ ràng cho lắm.</p> <p>【 ám sát vương quốc Goa Quốc vương 】, chỉ có cái này đơn giản mấy chữ, không có cái khác bất luận cái gì manh mối.</p> <p>Ngay tại Tô Hiểu có chút đau đầu lúc, một cỗ tin tức, từ trên cánh tay thanh kiếm bén kia bộ dáng hình xăm bên trong truyền đến.</p> <p>Hắn có thể dùng ý thức kích hoạt lạc ấn, cái gọi là lạc ấn, liền là cánh tay hắn bên trên thanh kiếm bén kia bộ dáng hình xăm.</p> <p>Cái này đồ vật rất trọng yếu, có thật nhiều công năng.</p> <p>Tô Hiểu nếm thử kích hoạt lạc ấn, rất đơn giản liền làm đến, trước mắt hiển hiện mấy hàng chữ.</p> <p>Một, thông tin cá nhân.</p> <p>Hai, nhiệm vụ</p> <p>Ba, dự trữ không gian.</p> <p>Bốn, kỹ năng.</p> <p>Năm, trang bị.</p> <p>Giai vị quá thấp, cái khác công năng chưa giải khóa. . . .</p> <p>Tô Hiểu hiện tại ngoại trừ hạng thứ nhất (thông tin cá nhân) cùng hạng thứ hai (nhiệm vụ) bên ngoài, cái khác tạm thời không cần đến.</p> <p>Hắn bức thiết nghĩ biết, nhiệm vụ nội dung cụ thể, từ trước đó luân hồi nhạc viên biến hiện thái độ để phán đoán, tuyệt sẽ không dễ dàng tha thứ hắn nhiệm vụ thất bại , bình thường thất bại, khả năng đó là một con đường chết. </p> <p>Cái gì xuống làm phổ thông khế ước giả, hẳn là căn bản không có kia loại khả năng, mặc dù chỉ là ngắn ngủi tiếp xúc, nhưng Tô Hiểu mẫn cảm phát giác được luân hồi nhạc viên tàn khốc. </p> <p>Mở ra nhiệm vụ tuyển hạng, nhiệm vụ cụ thể tin tức xuất hiện.</p> <p>【 chủ tuyến nhiệm vụ: Ám sát vương quốc Goa Quốc vương 】</p> <p>Độ khó đẳng cấp: LV. 3.</p> <p>Nhiệm vụ giới thiệu vắn tắt: Vương quốc Goa chỗ Đông Hải, thống trị phụ cận thành trấn cùng thôn trang, xung quanh tọa lạc lấy máy xay gió trấn cùng Korpo Hill . </p> <p>Nhiệm vụ tin tức: Dùng tùy ý phương pháp giết chết vương quốc Goa Quốc vương, Philip Herbert, đối phương lâu dài thân ở trong vương cung, ám sát độ khó tương đối cao. </p> <p>Nhiệm vụ kỳ hạn: 72 giờ bên trong.</p> <p>Nhiệm vụ ban thưởng: Liệp Sát giả thân phận hoàn toàn kích hoạt.</p> <p>. . . ,</p> <p>Nhìn thấy trở lên tin tức, Tô Hiểu rốt cục minh bạch hắn muốn giết ai, cùng vị trí.</p> <p>Khó trách bốn phía nhiều như vậy rác rưởi, hắn hiện tại vị trí, hẳn là vương quốc Goa phụ cận phế phẩm trạm cuối cùng, trong nguyên tác toà kia bởi vì Thiên Long Nhân đến, bị đốt cháy núi rác thải. </p> <p>Trong nguyên tác nhân vật chính Monkey D. Luffy, cùng trọng yếu nhân vật Ace, Sabo, còn nhỏ liền sinh hoạt tại Korpo Hill, trên núi còn sinh hoạt lấy một đám sơn tặc. </p> <p>Cũng không biết hiện tại là thời kỳ nào, kia ba huynh đệ phải chăng đã ra biển, nếu như vẫn là còn nhỏ. . . .</p> <p>Về phần vương quốc Goa Thủ Đô, ngay tại Korpo Hill phụ cận, liên tiếp hắn chỗ phế phẩm trạm cuối cùng .</p> <p>Bốn phía những này rác rưởi liền là vương quốc Goa Thủ Đô chỗ sinh ra.</p> <p>Nghĩ tới những thứ này, Tô Hiểu ngược lại không nóng nảy rời đi, phế phẩm trạm cuối cùng du đãng đại lượng lưu dân, vô cùng nguy hiểm, hắn vẫn là trước tìm hiểu tình huống sau lại tính toán sau. </p> <p>Tướng nhiệm vụ bảng quan bế, Tô Hiểu mở ra thông tin cá nhân.</p> "
        }
    ]
}
 */
router.get("/download_chapters/:id", novelController.getFullChapters)

/**
 @api {get} /novel/search_suggestion Search suggestion novel
 @apiName SearchSuggestionNovel
 @apiGroup Novel

 @apiParam {String} search_text key to search novel

 @apiSuccess {String} status <code>success</code>
 @apiSuccess {Object} data List Novels

 @apiSuccessExample Success-Response:
 {
    "status": "success",
    "data": [
        {
            "id": 1,
            "title": "Tối Cường Hệ Thống Đế Hoàng",
            "image_url": "https://123truyen.com/images/2020/12/toi-cuong-he-thong-de-hoang.jpeg"
        },
        {
            "id": 2,
            "title": "Võ Thần Chúa Tể",
            "image_url": "https://123truyen.com/images/2019/07/vo-than-chua-te.jpeg"
        },
        {
            "id": 3,
            "title": "Thần Đế",
            "image_url": "https://123truyen.com/images/2020/03/than-de.jpeg"
        },
        {
            "id": 4,
            "title": "Tuyệt Thế Vũ Thần",
            "image_url": "https://123truyen.com/images/2019/07/tuyet-the-vu-than.jpeg"
        }
    ]
}
 */
router.get("/search_suggestion", novelController.searchSuggestion)

/**
 @api {get} /novel/search Search novel
 @apiName SearchNovel
 @apiGroup Novel

 @apiParam {String} search_text key to search novel

 @apiSuccess {String} status <code>success</code>
 @apiSuccess {Object} data List Novels

 @apiSuccessExample Success-Response:
 {
    "status": "success",
    "data": [
        {
            "id": 18,
            "image_url": "https://123truyen.com/images/2019/07/tuyet-the-vu-than.jpeg",
            "title": "Tuyệt Thế Vũ Thần",
            "details": "<p>Cửu Tiêu đại lục, tông môn mọc lên san sát như rừng, võ đạo vi tôn, kẻ yếu tầm thường, bị người khi nhục, cường giả giận dữ, máu chảy thành sông. Võ đạo hoàng giả, càng có thể quan sát thiên địa, ngạo cười non sông, động tắc thì thiên kinh thạch phá, phơi thây trăm vạn. Một đời cường nhân Lâm Phong, nghịch thiên xuất thế, đến kinh thế truyền thừa, tu võ đạo, đạp trời cao, phá thiên địa, ngạo trời xanh! Đôi lời của dịch giả: Tuyệt Thế Vũ Thần là một bộ thuộc thể loại Huyền Huyễn, nó có kiếm hiệp kiếm tu hay những loại Vũ Hồn huyền ảo đầy màu sắc. Lâm Phong, nhân vật chính, hắn có một đời tuổi trẻ ngông cuồng và những năm tháng thanh niên đầy nhiệt huyết. Hắn có những bóng hồng xinh đẹp và những cuộc tình đẹp đẽ đầy tình cảm</p>\n<p>Mời mọi người hãy ghé xem Tuyệt Thế Vũ Thần để có thể dõi theo bước chân của Lâm Phong. Cảnh giới tu luyện: Khí Vũ, Linh Vũ, Huyền Vũ, Thiên Vũ, Tôn Vũ... Mỗi cảnh giới lại phân làm chín tầng.</p>\n<p class=\"font-italic\"><strong>Chúc bạn có những giây phút vui vẻ khi đọc truyện Tuyệt Thế Vũ Thần!</strong></p>",
            "view_count": 1797616,
            "rating": 4.877879247027973
        },
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
router.get("/search", novelController.search)

module.exports = router
