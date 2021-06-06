const logError = (function_name, params, error) => {
    console.log(new Date().toLocaleString())
    console.log("Function: " + function_name + ", params = " + JSON.stringify(params) + ", error = ")
    console.log(error)
    console.log("=========================================================================\n")
}

module.exports = logError
