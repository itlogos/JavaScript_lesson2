//1
console.log("Task 1");

let user = {};

user.name = "Филипп";
user.surname = "Шевченко";
console.log(user);

user.name = "Сергей";
console.log(user);

delete user.name;
console.log(user);
console.log("");
//2
console.log("Task 2");

let employeeSalaries = {
        director: 45000,
        secretary: 32500,
        accountant: 28000,
        programmer: 67000,
        nightWatchman: 22000
};

let sumSalary = 0;
for (let salary in employeeSalaries) {
    sumSalary += employeeSalaries[salary];
}

console.log("Фонд оплати праці склав " + sumSalary);

console.log("");
