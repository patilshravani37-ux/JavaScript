//Find the Sum of All Array Elements
const numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum =", sum);

//Find Even Numbers from an Array
const n1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = n1.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

//Find the Square of Every Number
const n2 = [1, 2, 3, 4, 5];
const squares = n2.map(num => num * num);
console.log("Squares:", squares);

//Find Numbers Greater Than 50
const n3 = [20, 65, 45, 80, 35, 90, 55];
const result = n3.filter(num => num > 50);
console.log("Numbers greater than 50:", result);

//Convert Names to Uppercase
const names = ["akshay", "rahul", "priya", "neha"];
const upperNames = names.map(name => name.toUpperCase());
console.log("Uppercase names:", upperNames);

//Find the Maximum Number
const a = [25, 75, 12, 98, 43, 67];
const maximum = a.reduce(
    (max, num) => num > max ? num : max,
    numbers[0]
);
console.log("Maximum =", maximum);

//Calculate Total Price
const prices = [100, 250, 75, 300, 125];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log("Total price =", total);

//Add 10 to Every Number
const s = [5, 15, 25, 35, 45];
const updatedNumbers = s.map(num => num + 10);
console.log("Updated array:", updatedNumbers);

//Find Employees with Salary Above 50,000
const employees = [
    { name: "Amit", salary: 45000 },
    { name: "Priya", salary: 65000 },
    { name: "Rahul", salary: 55000 },
    { name: "Neha", salary: 40000 }
];
const highSalaryEmployees =
employees.filter(employee => employee.salary > 50000);
console.log(highSalaryEmployees);

//Find the Average of Array Elements
const b = [10, 20, 30, 40, 50];
const total1 = b.reduce((sum, num) => sum + num, 0);
const average = total1 / b.length;
console.log("Average =", average);
