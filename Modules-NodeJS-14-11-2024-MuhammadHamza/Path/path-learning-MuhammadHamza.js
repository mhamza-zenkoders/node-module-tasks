const path = require("path");

const filePath = __filename; // Gets the path to the file

console.log("\nFile Path:", path.dirname(filePath));
console.log("File Name:", path.basename(filePath));
console.log("File Extension:", path.extname(filePath));
console.log("File Format:", path.format({dir: path.dirname(filePath), base: path.basename(filePath)}) )

const dirPath = __dirname; // Gets the path to the folder where the file exists

console.log("\nDirectory Path:", path.dirname(dirPath));
console.log("Directory Name:", path.basename(dirPath));
console.log("Directory Extension:", path.extname(dirPath));

console.log("\nParsed Path:", path.dirname(dirPath)+ "\\MuhammadHamza\\" + path.basename(dirPath));







// const path = require("path");

// const filePath = __dirname;

// console.log("Current directory", __dirname);

// console.log("Directory:", path.dirname(filePath));




// // Get the file name
// console.log("File Name:", path.basename(filePath));

// // Join multiple segments
// const fullPath = path.parse("/Users/zeeshansikander/Desktop");
// console.log("Parsed Path:", fullPath);
