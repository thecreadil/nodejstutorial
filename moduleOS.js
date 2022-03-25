const os = require('os')

// User info
console.log(os.userInfo())

// system uptime in seconds
console.log(`The system uptime is ${os.uptime()}`)

// Current OS info
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)