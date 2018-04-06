function student(fName, lName, age) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.greeting = function() {
        return "My name is: " + this.firstName + " " + this.lastName + ", and I'm " + this.age + " years old!";
        this.move();
    };
}

var objectStudents = [];
objectStudents.push(new student("Jenny", "Boyega", 9));
objectStudents.push(new student("Jhon", "Parker", 8));
objectStudents.push(new student("Timmy", "Turner", 4));
objectStudents.push(new student("Carl", "Jr", 6));

for (var i = 0; i < objectStudents.length; i++) {
    console.log(objectStudents[i].greeting());
}

objectStudents.forEach(student => {
    console.log(student.greeting());
});

// var student0 = {
//     firstName: "Jayne", 
//     lastName: "Leon",
//     age: 8,
//     move: function() {
//         console.log("Me movi!");
//     },
//     printar: student(this.firstName, this.lastName, this.age, this.move)
// };

// var student1 = new Object();
// student1.firstName = "Jhon";
// student1.lastName = "Parker";
// student1.age = 7;
// student1.move = function() {
//     console.log("Me movi também!");
// }
// student1.printar = student(this.firstName, this.lastName, this.age, this.move);

// var student2 = {};
// student2.firstName = "Zack";
// student2.lastName = "Schnyder";
// student2.age = 5;
// student2.move = function() {
//     console.log("Eu me remexo muito!");
// }
// student2.printar = student(this.firstName, this.lastName, this.age, this.move);

// objectStudents.push(student0);
// objectStudents.push(student1);
// objectStudents.push(student2);

// console.log(objectStudents[student0.printar]);
// objectStudents[student1.printar];
// objectStudents[student2.printar];


// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student.age);
// student.move();

// var students = ["Jhon", "Jacob", "Jingle", "Heimer", "Smith"];

// for (var i = 0; i < students.length; i++)
// {
//     console.log(students[i]);
// }