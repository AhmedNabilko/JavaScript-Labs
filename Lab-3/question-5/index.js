
let students = [
    { Name: "ahmed", Degree: 85 },
    { Name: "sara", Degree: 92 },
    { Name: "mona", Degree: 55 },
    { Name: "ali", Degree: 48 },
    { Name: "ziad", Degree: 70 }
];



let student = students.find(student => student.Degree >= 90 && student.Degree <= 100);

console.log("Student with degree 90-100");
if (student) {
    console.log("Name: " + student.Name + "");
} else {
    console.log("Not Found student.");
}


let failStudents = students.filter(student => student.Degree < 60);

console.log("Students with degree < 60");
for (let index in failStudents) {
    console.log(failStudents[index].Name);
}

console.log("Array push() print(using for...in)");
students.push({ Name: "Hassan", Degree: 88 });


for (let index in students) {

    console.log(index + " : " + students[index].Name + " - " + students[index].Degree);
}





console.log("Array pop() print(using for...of)");
students.pop();

for (let student of students) {
    console.log(student.Name + " - " + student.Degree);
}


console.log("Sort array (alphabetical )");
students.sort((a, b) => {
    if (a.Name < b.Name) return -1;
    if (a.Name > b.Name) return 1;
    return 0;
});
for (let student of students) {
    console.log(student.Name + " - " + student.Degree);
}

console.log("Adding 2 students (at 2)");
students.splice(2, 0,
    { Name: "Ebrahim", Degree: 99 },
    { Name: "Morsy", Degree: 80 }
);

for (let student of students) {
    console.log(student.Name + " - " + student.Degree);
}




console.log("Removing 1 student (at 3)");
students.splice(3, 1);

for (let student of students) {
    console.log(student.Name + " - " + student.Degree);
}

