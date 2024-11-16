const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.json");

//Read Data From File
function readData() {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.log("\nError Reading the File:", err);
    return [];
  }
}

//Write Data Into File
function writeData(data) {
  try {
    const dataString = JSON.stringify(data);
    fs.writeFileSync(filePath, dataString);
  } catch (err) {
    console.log("\nError Writing the File:", err);
  }
}

//Add Single JSON Object
function addData(newData) {
  let data = readData();
  data.push(newData);
  writeData(data);
  console.log("\nData Added Successfully!");
}

//Add JS Object By Name
function deleteDatabyName(name) {
  let data = readData();
  data = data.filter((o) => o.name.toLowerCase() != name.toLowerCase());
  writeData(data);
  console.log(`\nData with Name ${name} is Deleted Successfully!`);
}

//Add JS Object By Index in Array
function deleteDatabyIndex(index) {
  let data = readData();
  if (index >= 0 && index < data.length) {
    data.splice(index, 1);
  } else {
    console.log("\nInvalid Index To Delete!");
  }
  writeData(data);
  console.log(`\nData at Index ${index} is Deleted Successfully!`);
}

//Data: Array of JSON Objects
const data = [
  {
    name: "Hamza Younus",
    age: 24,
    profession: "Software Engineer",
    skills: ["JavaScript", "Python", "React", "Node.js"],
  },
  {
    name: "Taha Shahid",
    age: 30,
    profession: "Project Manager",
    skills: ["JavaScript", "Python", "Agile", "Jira"],
  },
  {
    name: "Shahmir Ghouri",
    age: 28,
    profession: "Data Scientist",
    skills: ["Python", "Machine Learning", "R", "SQL"],
  },
];

writeData(data);
console.log("Data:", readData());

//New Data
const newData = {
  name: "Agha Asad",
  age: 24,
  profession: "Finance Manager",
  skills: ["Excel", "PowerBi", "Tabluea"],
};

addData(newData);
console.log("Data:", readData());

deleteDatabyName("Shahmir Ghouri");
console.log("Data:", readData());

deleteDatabyIndex(1);
console.log("Data:", readData());




// How replace function works
myOBJ = {
    name: "Hamza Younus",
    age: 24,
    profession: "Software Engineer",
    skills: ["JavaScript", "Python", "React", "Node.js"],
  }

const jsonString = JSON.stringify(
  myObj,
  (key, value) => {
    // Change all string values to uppercase
    return typeof value === "string" ? value.toUpperCase() : value;
  },
  2
);
console.log(jsonString);

