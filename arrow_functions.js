//Array Example
let languages = ["Core Java", "JavaScript", "Csharp", "Python"];
console.log(languages);
console.log(languages[0]); 
console.log(languages[2]); 
console.log(languages.length);
languages.push("Advance Java");
console.log(languages);
languages[2] = "c++";
console.log(languages);

//Arrow Example
//Addition
const add = (a, b) => a + b;
console.log(add(10, 20));

//square
const square = num => num * num;
console.log(square(6));

//cube
const cube = num => num * num * num;
console.log(cube(3));

//check even
const isEven = num => num % 2 === 0;
console.log(isEven(10));
console.log(isEven(7));

//Find Greatest Number
const greaterNumber = (a, b) => a > b ? a : b;
console.log(greaterNumber(25, 40));

//map() Example
//Double every functions
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log(doubled);

// Add 5 to Every Number
let mark = [50, 60, 70, 80];
let updatedMarks = mark.map(mark => mark + 5);
console.log(updatedMarks);

//Convert Names to Uppercase
let names = ["amit", "ravi", "priya"];
let upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);

//Find Squares
let n1 = [2, 3, 4, 5];
let squares = n1.map(num => num * num);
console.log(squares);

//Convert Celsius to Fahrenheit
let temperatures = [0, 10, 20, 30];
let fahrenheit = temperatures.map(temp => (temp * 9/5) + 32);
console.log(fahrenheit)

//filter() Example
//Find Even Numbers
let n2 = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = n2.filter(num => num % 2 === 0);
console.log(evenNumbers);

//Find Odd Numbers
let n3 = [1, 2, 3, 4, 5, 6, 7];
let oddNumbers = n3.filter(num => num % 2 !== 0);
console.log(oddNumbers);

//Students Who Passed
let mark2 = [35, 78, 25, 90, 40, 38, 65];
let passed = mark2.filter(mark => mark >= 40);
console.log(passed);

//Numbers Greater Than 50
let n4 = [25, 60, 45, 80, 30, 100];
let greater = n4.filter(num => num > 50);
console.log(greater);

//Words with More Than 4 Letters
let words = ["cat", "apple", "book", "computer", "pen"];
let longWords = words.filter(word => word.length > 4);
console.log(longWords);

//reduce() example
//Find Total of Numbers
let n5 = [10, 20, 30, 40];
let total = n5.reduce((sum, num) => sum + num, 0);
console.log(total);

//Find Product
let n6 = [2, 3, 4];
let product = n6.reduce((result, num) => result * num, 1);
console.log(product);

//Find Total Marks
let marks = [75, 80, 65, 90, 85];
let totalMarks = marks.reduce((total, mark) => total + mark, 0);
console.log(totalMarks);

//Find Maximum Number
let s = [45, 80, 25, 100, 60];
let maximum = s.reduce(
    (max, num) => num > max ? num : max
);
console.log(maximum);
//Find Minimum Number
let r = [45, 80, 25, 100, 60];
let minimum = r.reduce(
    (min, num) => num < min ? num : min
);
console.log(minimum);

//Student Marks Example Using All Three Methods
let mark1 = [35, 45, 60, 75, 30, 80, 90];
//Use filter() to find passed students
let passedMarks = mark1.filter(mark => mark >= 40);
console.log(passedMarks);

//Use map() to add Grace Marks
let graceMarks = passedMarks.map(mark => mark + 5);
console.log(graceMarks);

// Use reduce() to find Total
let total1 = graceMarks.reduce((sum, mark) => sum + mark, 0);
console.log(total1);
