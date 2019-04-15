'use strict'
var mapper = require('./keyboard.json')

function toThai(text) {
    var formated = text.split('').map(char => mapper[char]).join('');
    return formated;
}

module.exports = toThai