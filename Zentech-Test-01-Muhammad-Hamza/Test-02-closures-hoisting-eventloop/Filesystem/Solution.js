// Write a function to read all files in a directory recursively and return their paths as an array.
// (For example, given a directory structure, return ['dir/file1.txt', 'dir/subdir/file2.txt'].)

function readAllFiles(dir, files = []) {
    const fs = require('fs');
    fs.readdirSync(dir).forEach(file => {
        const filePath = `${dir}/${file}`
        if (fs.statSync(filePath).isDirectory()) {
            readAllFiles(filePath, files);
        } else
            files.push(filePath);
    })

    return files;
}

const files = readAllFiles('./');
console.log(files);








// Implement a function to monitor changes in a file and log any modifications to the console in real time.

function realTimeFileChanges(filePath) {
    const fs = require('fs');
    fs.watch(filePath, (event, filename) => {
        console.log(`File ${filename} has been ${event}!`);
        console.log('Updated Data', fs.readFileSync(filename, 'utf-8'))
    });
}

realTimeFileChanges('./file1.txt');







// Write a program that reads a large file line by line without loading the entire file into memory. Explain why this approach is efficient.

function readLargeFile(filePath) {
    const fs = require('fs');
    const readline = require('readline');
    const fileStream = fs.createReadStream(filePath, { encoding: "utf8" });
    const rl = readline.createInterface({
        input: fileStream,
        output: process.stdout,
    });

    rl.on('line', (line) => {
        console.log(line);
    });

    rl.on('close', () => {
        console.log('--End of File--');
    });
}

readLargeFile('./lyrics.txt');

/*This approach is memory-efficient because it reads the file line by line, 
avoiding full file loading into memory, 
keeping memory usage constant regardless of file size
It processes data efficiently without slowing down other tasks
*/








// Create a function that writes JSON data to a file. If the file already exists, append the new data without overwriting the existing content.


function addDataToFile(filePath, newData) {
    const fs = require('fs');
    if (fs.existsSync(filePath)) {
        const existingData = fs.readFileSync(filePath, 'utf8');
        const existingJson = JSON.parse(existingData);
        existingJson.push(newData);
        fs.writeFileSync(filePath, JSON.stringify(existingJson, null, 2));
    } else {
        fs.writeFileSync(filePath, JSON.stringify([newData], null, 2));
    }

}

let newData = {
    id: 2,
    name: "Bluetooth Speaker",
    price: 29.99,
    inStock: false,
    rating: 4.8
}

addDataToFile('./products.json', newData);



// How would you handle reading and writing files concurrently in Node.js to prevent data corruption? Write an example that safely handles concurrent writes.
