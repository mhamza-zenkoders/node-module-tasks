const os = require("os");

console.log("Version: ", os.version());
console.log("OS Type: ", os.type());
console.log("Architecture: ", os.arch());
console.log("Platform", os.platform());
console.log("Machine Type: ", os.machine());
console.log("Release: ", os.release());

console.log("/nCpus: ", os.cpus());
console.log("/nHost Name: ", os.hostname());

console.log("/nTotal Memory:", os.totalmem());
console.log("Total Memory in GB:", os.totalmem()/1000000000);
console.log("Free Memory:", os.freemem());
console.log("Free Memory:", os.freemem()/1000000000);

console.log("\nUptime:", os.uptime());
console.log("Uptime in Hours:", os.uptime()/3600);

