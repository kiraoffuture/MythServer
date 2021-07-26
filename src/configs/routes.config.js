const routes = Object.freeze([
    {
        path: "/novel",
        router: "src/models/novel/novel.router"
    },
    {
        path: "/api",
        router: "src/models/public/public.router"
    },
    {
        path: "/chapter",
        router: "src/models/chapter/chapter.router"
    }
])

module.exports = routes
