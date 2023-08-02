//CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const name = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour') 
require('./7-mind-grenade')
console.log(data)
console.log(name)


sayHi('john')
sayHi(name.susan)
sayHi(name.peter)
