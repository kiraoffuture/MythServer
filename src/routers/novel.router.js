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
 @api {get} /novel/{id}/first_chapter Get first chapter of novel
 @apiName GetNovelFirstChapter
 @apiGroup Novel

 @apiParam {Integer} id Id of novel

 @apiSuccess {String} status <code>success</code>
 @apiSuccess {Object} data object Chapter

 @apiSuccessExample Success-Response:
 {
    "status": "success",
    "data": {
        "id": 1,
        "index": 1,
        "title": "Chapter 1: Bai Luochu",
        "content": "\n\n<p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">A stench filled the sky!</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">A strong and pungent stench of blood, along with the rotten smell of demonic beasts’ feces had filled the air of the Bestial Battle Arena. The smell was so bad that it was difficult for one to even open their eyes.</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">There was an ear-splitting roar, and it seemed as though countless people were screaming at the top of their lungs...</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Bai Luochu was lying on the ground with her eyes shut and brows knitted accentuated her wrinkles. Her pale and scrawny face was drenched with sweat and she looked like she was suffering from immeasurable pain.</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">—— “Evil dao witch! If you take your own life, we can still spare the lives of your sect members! If you persist in traveling down the wrong path, don’t blame us for being merciless!”</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Mockery and cold shouts constantly echoed in Bai Luochu’s mind and she felt as though her head was going to split open!&nbsp;</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">All of a sudden, the roar of a beast reverberated through the sky and it was accompanied by a loud “bang”! A heavy object smashed into Bai Luochu’s shoulder, and her body shot out like a broken rag doll. Brutally slamming into the wall of the Bestial Battle Arena, cracks started to spiderweb across it as she fell to the ground. Fresh blood gushed out from her mouth as she laid there, unmoving.</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">In her semi conscious state, her body twisted and squirmed continuously as her deathly pale countenance turned green. The blood coming out from her mouth didn’t stop as it stained her face, painting an extremely unsightly scene.</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">The sharp pain allowed her to regain her consciousness.</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">“Lu Wenshu…” Bai Luochu murmured softly, as her fists subconsciously tightened. “Lu Wenshu…”</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Bai Luochu was still on the ground and her pair of half-closed eyes seemed to have regained some clarity.</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">“Lu Wenshu, I deserted my apprenticeship for you. Yet, in order to obtain the inheritance, you joined hands with everyone to surround my temple, exterminate my people, and caused my death! Lu Wenshu… in this entire world, even if everyone betrayed me, how could you...”</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Bai Luochu released a deep and grim laughter as she barely supported her body off the ground. With her gaze fixed forward, she wanted to take a good look at the current expression on Lu Wenshu’s face!</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">As soon as she raised her head, she was stunned. The scene in front of her wasn’t the inheritance altar where she lost her consciousness. Instead, she only saw a pile of bones drenched in blood...</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">“Where… where is this?”</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Bai Luochu was shocked. There was only one thought in her mind at the moment and it was to stand up. However, she realized that her body wracked with pain the moment she tried to move. Her right arm had long lost all feeling and the piercing bone-chilling pain in her shoulder allowed her to recognize the fact that her arm was broken. She would feel a sharp pain shooting through her body along with the rising and falling of her chest and it was obvious she had several broken ribs.</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: italic; font-variant: normal; text-decoration: none; vertical-align: baseline;\">What is going on? Where in the world is she?</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">“Eat her! Eat her! …”</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">As Bai Luochu’s consciousness became clearer, cries from all over the arena entered her ears.</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Bai Luochu tried to search for the source of the noise, and discovered people standing on top of the walls surrounding her. They stretched their necks to look down at her as they gestured and pointed. As they screamed, their faces turned red in excitement and a maniacal look appeared in their eyes.</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Bai Luochu surveyed her surroundings as an odd expression crept up her face.</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: italic; font-variant: normal; text-decoration: none; vertical-align: baseline;\">This place… why did it look like the Bestial Battle Arena?</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: italic; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Wasn’t she supposed to be at the inheritance altar?</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">While she was thinking about what had actually transpired, a shadow appeared and pressed down above her head.</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Bai Luochu raised her head and saw a bloody mouth, which brought with it a pungent stench, trying to swallow her whole!</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Those sharp teeth still had remnant chunks of flesh that were dripping with blood. If the teeth really sank into her head, her skull would be ripped off her shoulders.</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">“Brute!” Bai Luochu let out a sharp glare as she formed a sword out of her spiritual energy. It shot straight towards the Fire Lion and she yelled, “Get lost!”</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: italic; font-variant: normal; text-decoration: none; vertical-align: baseline;\">It dares to eat her? This foolish beast must have eaten a bear’s heart or a leopard’s guts!</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Just as Bai Luochu assumed that her attack felled the beast, that ferocious beast’s body merely shivered a little before letting out an enraged roar. Its mouth shot towards Bai Luochu’s head once again! This time, it moved even faster.</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">In the past, Bai Luochu’s spiritual attack was something that supreme experts were unable to dodge. Right now, it couldn’t even fend-off a low-level beast!</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Bai Luochu was shocked. With a thought in mind, she immediately circulated her spirit qi, only to notice that the interior of her body was completely empty. Let alone spirit qi, even her meridians were blocked up...</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: italic; font-variant: normal; text-decoration: none; vertical-align: baseline;\">What in the world was going on?!</span></p><p dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Bai Luochu’s expression finally changed.&nbsp;</span><span style=\"color: rgb(0, 0, 0); font-weight: 400; font-style: italic; font-variant: normal; text-decoration: none; vertical-align: baseline;\">Why did her spiritual energy and spirit qi vanish?</span></p> \n"
    }
}
 */
router.get("/:id/first_chapter", novelController.getFirstChapterByNovelId)

module.exports = router
