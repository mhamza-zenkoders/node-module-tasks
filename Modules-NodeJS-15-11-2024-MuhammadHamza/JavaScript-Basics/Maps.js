
const students = new Map();

students.set(101, {name: "Shahmir Ghouri", grades: [79, 85, 80], attendance: 88 });
students.set(102, {name: "Hamza Younus", grades: [90,95,97], attendance: 95});
students.set(103, {name: "Taha Shahid", grades: [92, 89, 94], attendance: 97 });
students.set(104, {name: "Agha Asad", grades: [87, 76, 81], attendance: 75 });

console.log("\nStudents Maps:", students);

// Get a student's details by ID
console.log("\nDetails of Student with ID 102:", students.get(102));

// Check if a student exists
console.log("\nStudent with ID 105:", students.has(105));
console.log("\nStudent with ID 103:", students.has(103));

// Updating Students Info
if(students.has(102)){
    let s = students.get(102);
    s.grades.push(98);
    s.attendance = 97;
    students.set(102, s);
    console.log("Students Maps after Updating:", students);
}

// Delete a student
students.delete(103);
console.log("Students Maps after Deleting 103:", students);

// Get All Student IDs
console.log("\nAll Student IDs:", [...students.keys()]);
console.log("Student IDs:", Array.from(students.keys()));

//Get All Students Names
let studentsNames = Array.from(students.values()).map(student => student.name);
console.log("\nStudent Names:", studentsNames);

// Calculate Average Grades for Each Students
for (const [id,student] of students){
    const averageGrade = student.grades.reduce((sum,grade) => sum += grade, 0) / student.grades.length;
    console.log(`Average grade of ${student.name} (ID:${id}):`, averageGrade.toFixed(2));
}

// Clear the Map
students.clear();
console.log("\nAfter Clearing:", students);

