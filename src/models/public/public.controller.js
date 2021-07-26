const express = require("express")
const root = require('path').resolve('./')


const getApiDocPage = () => {
    return express.static(root + '/src/public/api-doc')
}

module.exports = {getApiDocPage}
