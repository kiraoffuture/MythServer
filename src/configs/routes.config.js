const routes = Object.freeze([
    {
        path: "/novel",
        router: "src/routers/novel.router"
    },
    {
        path: "/api",
        router: "src/routers/public.router"
    },
    {
        path: "/chapter",
        router: "src/routers/chapter.router"
    }
])

module.exports = routes
