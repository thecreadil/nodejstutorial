const {readFileSync, writeFileSync} = require('fs')


const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first)
console.log(second)

writeFileSync('./content/createdFile.txt', 'Hello file, take this text ;)', {flag: 'a'})