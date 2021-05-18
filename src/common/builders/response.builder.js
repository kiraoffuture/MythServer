const constants = require("../constants")
const {HttpCode, ResponseMessage} = require("../enums");

const toSuccess = (data) => {
    return {
        status: constants.successStatus,
        data: data
    }
}

const getErrorMessageFromCode = (code) => {
    switch (code) {
        case HttpCode.InternalServerError:
            return ResponseMessage.InternalServerError
        case HttpCode.BadRequest:
            return ResponseMessage.BadRequest
        case HttpCode.Unauthorized:
            return ResponseMessage.Unauthorized
        case HttpCode.Forbidden:
            return ResponseMessage.Forbidden
        case HttpCode.NotFound:
            return ResponseMessage.NotFound
        case HttpCode.ServiceUnavailable:
            return ResponseMessage.ServiceUnavailable
        default:
            return ResponseMessage.InternalServerError
    }
}

const toError = (code, message) => {
    if (code == null) return {
        code: HttpCode.InternalServerError,
        message: ResponseMessage.InternalServerError
    }
    return {
        code: code,
        message: message ? message : getErrorMessageFromCode(code)
    }
}

const build = (code = HttpCode.OK, data) => {
    switch (code) {
        case HttpCode.OK:
            return toSuccess(data)
        default:
            return toError(code, data)
    }
}
module.exports = {build}
