const axios = require("axios")

const endPoint = "103.82.25.200"

const test = () => {
    const id = 21852
    console.log(`id = ${id}`)
    const fullChapterUrl = `http://${endPoint}/novel/download_chapters/${id}`

    const array = [...Array(parseInt(20)).keys()]
    array.forEach(param => {
        axios.get(fullChapterUrl).then(fetchFullChapterResult => {
            console.log("done")
        }).catch(e => {
            console.log(e)
        })
    })
}

test()
