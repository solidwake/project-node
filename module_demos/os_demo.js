const os = require('os');

// Get the platform
console.log(os.platform());
// darwin
// The platform for MacOS is darwin, Windows is Win32

// Get the CPU architecture
console.log(os.arch());
// x64

// Get CPU core information
console.log(os.cpus());
// Returns an object with information about each core

// Get free memory
console.log(os.freemem());
// 2270572544

//Get total memory
console.log(os.totalmem());
// 17179869184

// Get home directory
console.log(os.homedir());
// /Users/idris

//Get uptime (in seconds)
console.log(os.uptime());
// 444659