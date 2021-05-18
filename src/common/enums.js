const MySqlState = Object.freeze({
    DISCONNECTED: "disconnected",
    AUTHENTICATED: "authenticated"
})

const HttpCode = Object.freeze({
    OK: 200,
    BadRequest: 400,
    Unauthorized: 401,
    Forbidden: 403,
    NotFound: 404,
    InternalServerError: 500,
    ServiceUnavailable: 503,
})

const ResponseMessage = Object.freeze({
    BadRequest: "Bad Request",
    Unauthorized: "Unauthorized",
    Forbidden: "Forbidden",
    NotFound: "NotFound",
    InternalServerError: "Internal Server Error",
    ServiceUnavailable: "Service Unavilable"
})

module.exports = {HttpCode, ResponseMessage, MySqlState}
