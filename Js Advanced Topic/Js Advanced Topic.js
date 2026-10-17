"use strict";


var name;
console.log(name);

name = "Jone";

function test() {
    var x = 10;

    if (true) {
        var y = 20;
    }

    console.log(y);
}

test();

let newName = "Jone";

function testLet() {
    let x = 10;

    if (true) {
        let y = 20;
        console.log(y);
    }
}

testLet();


function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return "Hello, my name is " + this.name;
};


function Employee(name, age, employeeId, position) {
    Person.call(this, name, age);

    this.employeeId = employeeId;
    this.position = position;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.greet = function() {
    return "Hello, I am " + this.name + " and I work as " + this.position;
};

var employee1 = new Employee("Ahmad", 25, 101, "Developer");
var employee2 = new Employee("Omar", 28, 102, "Designer");
var employee3 = new Employee("Ali", 30, 103, "Manager");

document.getElementById("employees").innerHTML =
    employee1.greet() + "<br>" +
    employee2.greet() + "<br>" +
    employee3.greet();


var students1 = [
    "Ahmad", "Omar", "Ali", "Sara", "Lina",
    "Khaled", "Yousef", "Huda", "Rami", "Dana",
    "Maya", "Sami", "Tareq", "Noor", "Zaid",
    "Lama", "Fadi", "Hani", "Salma", "Rana",
    "Bara", "Laith", "Adam", "Yara", "Samer"
];

var students2 = [
    "Nour", "Malak", "Oday", "Razan", "Jad",
    "Bashar", "Kareem", "Leen", "Alaa", "Farah",
    "Tamer", "Mariam", "Firas", "Dana", "Omar",
    "Hassan", "Amal", "Rami", "Khalil", "Salah",
    "Mona", "Hiba", "Anas", "Sultan", "Rawan"
];

var allStudents = students1.concat(students2);

allStudents.sort();

var studentExists = allStudents.includes("Ahmad");

allStudents.reverse();

var studentText = "";

allStudents.forEach(function(student, index) {
    studentText += index + " - " + student + "<br>";
});

document.getElementById("students").innerHTML =
    "Ahmad exists: " + studentExists + "<br><br>" + studentText;


var studentRecords = [];

for (var i = 1; i <= 50; i++) {
    studentRecords.push({
        id: i,
        name: "Student " + i,
        grade: 50 + (i % 51)
    });
}

studentRecords.splice(2, 0, {
    id: 51,
    name: "New Student",
    grade: 90
});

studentRecords.splice(4, 1);

studentRecords.splice(5, 1, {
    id: 52,
    name: "Updated Student",
    grade: 95
});

var copiedStudents = studentRecords.slice(0, 5);

studentRecords.sort(function(a, b) {
    return b.grade - a.grade;
});

var recordsText = "";

studentRecords.forEach(function(student) {
    recordsText +=
        student.id + " - " +
        student.name + " - " +
        student.grade + "<br>";
});

document.getElementById("student-records").innerHTML = recordsText;


var product = {
    id: 1,
    name: "Laptop",
    price: 700,
    category: "Electronics",
    available: true
};

var jsonProduct = JSON.stringify(product);

var convertedProduct = JSON.parse(jsonProduct);

var jsonText =
    "Original: " + JSON.stringify(product) +
    "<br>JSON: " + jsonProduct +
    "<br>Converted: " + JSON.stringify(convertedProduct);

try {
    JSON.parse("{wrong json}");
} catch (error) {
    jsonText += "<br>Invalid JSON was handled";
}

document.getElementById("json-result").innerHTML = jsonText;


var square = number => number * number;

var isEven = number => number % 2 === 0;

var prices = [10, 20, 30];

var total = prices.reduce((sum, price) => sum + price, 0);

var numbers = [1, 2, 3, 4, 5];

var doubled = numbers.map(number => number * 2);

var evenNumbers = numbers.filter(number => number % 2 === 0);

document.getElementById("arrow-result").innerHTML =
    "Square: " + square(5) +
    "<br>Is 4 even? " + isEven(4) +
    "<br>Total: " + total +
    "<br>Doubled: " + doubled +
    "<br>Even numbers: " + evenNumbers;


var user = {
    name: "Ayman",
    email: "ayman@gmail.com",
    age: 24,
    address: "Amman"
};

var { name: userName, email, age, address } = user;

var skills = ["HTML", "CSS", "JavaScript"];

var [skill1, skill2, skill3] = skills;

function createUser(name = "Unknown", age = 18) {
    return {
        name: name,
        age: age
    };
}

var user1 = createUser("Ahmad", 25);
var user2 = createUser();

document.getElementById("user-result").innerHTML =
    "Name: " + userName +
    "<br>Email: " + email +
    "<br>Age: " + age +
    "<br>Address: " + address +
    "<br>Skills: " + skill1 + ", " + skill2 + ", " + skill3 +
    "<br>User 1: " + user1.name + " - " + user1.age +
    "<br>User 2: " + user2.name + " - " + user2.age;


var reportStudents = [
    { id: 1, name: "Ahmad", grade: 80 },
    { id: 2, name: "Sara", grade: 90 },
    { id: 3, name: "Omar", grade: 55 },
    { id: 4, name: "Lina", grade: 40 },
    { id: 5, name: "Ali", grade: 75 }
];

var reports = "";

reportStudents.forEach(function(student) {

    var status = student.grade >= 50 ? "Pass" : "Fail";

    reports += `
        <p>
            Name: ${student.name}<br>
            ID: ${student.id}<br>
            Grade: ${student.grade}<br>
            Status: ${status}
        </p>
    `;
});

document.getElementById("reports").innerHTML = reports;


class PersonClass {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getInfo() {
        return this.name + " - " + this.email;
    }
}

class Student extends PersonClass {

    constructor(name, email, major) {
        super(name, email);
        this.major = major;
    }

    getInfo() {
        return this.name + " - Student - " + this.major;
    }
}

class Instructor extends PersonClass {

    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }
}

var student = new Student("Ahmad", "ahmad@gmail.com", "MIS");
var instructor = new Instructor("Omar", "omar@gmail.com", "JavaScript");

document.getElementById("classes-result").innerHTML =
    student.getInfo() + "<br>" +
    instructor.getInfo();


var storageResult = document.getElementById("storage-result");

document.getElementById("save-storage").addEventListener("click", function() {

    localStorage.setItem("username", "Ayman");
    localStorage.setItem("course", "JavaScript");

    storageResult.textContent = "Data saved";

});

document.getElementById("get-storage").addEventListener("click", function() {

    var username = localStorage.getItem("username");
    var course = localStorage.getItem("course");

    storageResult.textContent =
        username + " - " + course +
        " - Items: " + localStorage.length;

});

document.getElementById("remove-storage").addEventListener("click", function() {

    localStorage.removeItem("course");

    storageResult.textContent = "Course removed";

});

document.getElementById("clear-storage").addEventListener("click", function() {

    localStorage.clear();

    storageResult.textContent = "Storage cleared";

});


var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

var taskInput = document.getElementById("task-input");
var taskList = document.getElementById("task-list");
var taskCount = document.getElementById("task-count");

function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        var li = document.createElement("li");

        li.textContent = task.name;

        if (task.completed) {
            li.style.textDecoration = "line-through";
        }

        li.addEventListener("click", function() {

            task.completed = !task.completed;

            localStorage.setItem("tasks", JSON.stringify(tasks));

            displayTasks();

        });

        var deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function(event) {

            event.stopPropagation();

            tasks.splice(index, 1);

            localStorage.setItem("tasks", JSON.stringify(tasks));

            displayTasks();

        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });

    taskCount.textContent = "Tasks: " + tasks.length;
}

document.getElementById("add-task").addEventListener("click", function() {

    if (taskInput.value.trim() !== "") {

        tasks.push({
            name: taskInput.value,
            completed: false
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));

        taskInput.value = "";

        displayTasks();
    }
});

document.getElementById("clear-tasks").addEventListener("click", function() {

    tasks = [];

    localStorage.removeItem("tasks");

    displayTasks();

});

displayTasks();


var currentStep = 1;

var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");

function showStep(step) {

    step1.style.display = "none";
    step2.style.display = "none";
    step3.style.display = "none";

    if (step === 1) {
        step1.style.display = "block";
    }

    if (step === 2) {
        step2.style.display = "block";
    }

    if (step === 3) {
        step3.style.display = "block";
    }

    currentStep = step;

    sessionStorage.setItem("step", currentStep);
}

document.getElementById("next1").addEventListener("click", function() {

    sessionStorage.setItem("name", document.getElementById("name").value);
    sessionStorage.setItem("email", document.getElementById("email").value);

    showStep(2);

});

document.getElementById("back2").addEventListener("click", function() {
    showStep(1);
});

document.getElementById("next2").addEventListener("click", function() {

    sessionStorage.setItem("university", document.getElementById("university").value);
    sessionStorage.setItem("major", document.getElementById("major").value);

    document.getElementById("review").textContent =
        "Name: " + sessionStorage.getItem("name") +
        " | Email: " + sessionStorage.getItem("email") +
        " | University: " + sessionStorage.getItem("university") +
        " | Major: " + sessionStorage.getItem("major");

    showStep(3);

});

document.getElementById("back3").addEventListener("click", function() {
    showStep(2);
});

document.getElementById("confirm").addEventListener("click", function() {

    document.getElementById("registration-message").textContent =
        "Registration completed successfully";

});

var savedStep = sessionStorage.getItem("step");

if (savedStep) {
    showStep(Number(savedStep));
}