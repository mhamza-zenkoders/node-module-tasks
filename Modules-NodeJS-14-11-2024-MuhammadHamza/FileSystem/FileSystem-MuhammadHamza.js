const fs = require("fs");

//Asynchronous Operations

console.log("\n\nAsynchronous File Operations\n")

fs.readFile("input-file.txt", "utf8", (err, data)=>{

    if(err){
        console.log("Error Reading Input File", err);
    }
    else{

        console.log("Data:", data);
    }
})

const output = 'this is output'

fs.writeFile("output.txt", output, (err)=> {
    if(err){
        console.log("Error Writing Output File", err);
    }else{
        console.log("File Written Successfully!")
    }

})


fs.appendFile("input-file.txt", "\nMuhammad Hamza", (err)=> {
    if(err){
        console.log("Error Appending Output File", err);
    }else{
        console.log("File Appended Successfully!");
    }
})

fs.unlink("output.txt", (err)=> {
    if(err){
        console.log("Error Deleting Output File", err);
    }else{
        console.log("File Deleted Successfully!");
    }
})

console.log("\n\nAsynchronous File Operations\n")







////Synchronous Operations

console.log("\n\nSynchronous File Operations\n")
try{
    const data = fs.readFileSync('sync-input-file.txt', "utf8");
    console.log("Sync Data: ", data);

    const output = 'This is the Output.';
    fs.writeFileSync('sync-output-file.txt', data);
    console.log("File Written Successfully Sync!");

    fs.appendFileSync('sync-output-file.txt', "/nMuhammad Hamza");
    console.log("File Appended Successfully Sync!");

    fs.unlinkSync('sync-output-file.txt', "/nMuhammad Hamza");
    console.log("File Deleted Successfully Sync!");

}catch(err){
    console.log("Error:", err)
}
console.log("Synchronous File Operations Done\n")
