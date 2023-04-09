// 1. Write a function called greetCustomer that will log "Welcome to the store" + the name parameter
console.log("#1");
const greetCustomer = (name) => {
  console.log("Welcome to the store " + name);
};
greetCustomer("Madina");

// 2. Write a function called logPositiveOrNegative that will log if the number parameter is a negative number, positive number, or 0
console.log("#2");
const logPositiveOrNegative = (number) => {
  if (number === 0) {
    console.log("Zero");
  } else if (number >= 1) {
    console.log("positive number");
  } else {
    console.log("negative number");
  }
};
logPositiveOrNegative(-3);
// 3. Write a function called returnIsPositive that will return if the number parameter is a positive "true" or not  positive "false"
console.log("#3");
const returnIsPositive = (number) => {
  if (number >= 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};
returnIsPositive(-7);

// 4. Write a function called returnIsTooShort that will return true if the password parameter is shorter than 8 characters
console.log("#4");

const returnIsTooShort = (password) => {
  if (password.length < 8) {
    console.log(true);
  } else {
    console.log(false);
  }
};
returnIsTooShort("Madina");
// 5. Write a function called returnIsBreakingLaw that will return true if the age parameter is < 21 AND drink parameter is "alcohol"

console.log("#5");

const returnIsBreakingLaw = (age, drink) => {
  if (age < 21 && drink === "alcohol") {
    console.log(true);
  } else {
    console.log(false);
  }
};
returnIsBreakingLaw(20, "alcohol");

// 6. Make a variable called count.
// Write a function called addToCount that will add the number parameter to the count variable.
// Call addToCount 4 times with different numbers

console.log("#6");
let count = 4;
const addToCount = (number) => {
  console.log(count + number);
};
addToCount(6);
addToCount(16);
addToCount(26);
addToCount(36);
// 7. Write a function called returnIsChase that will return true if the name parameter is "Chase" - Make case insensitive "Chase" "CHASE" "CHasE" all return true
console.log("#7");
const returnIsChase = (name) => {
  if (name.toLowerCase() === "chase") {
    console.log(true);
  } else {
    console.log(false);
  }
};
returnIsChase("CHase");
returnIsChase("Vasya");
// 8. Make a variable called class that is an array ["Sally", "Sam", "Frodo", "Gandalf", "Eragorn", "Gimley"]
// Write a function called returnClassIsTooSmall that will return true if the students parameter has less than 10 students
console.log("#8");

let classCh = ["Sally", "Sam", "Frodo", "Gandalf", "Eragorn", "Gimley"];
let classCh1 = [
  "Sally",
  "Sam",
  "Frodo",
  "Gandalf",
  "Eragorn",
  "Gimley",
  "Sally",
  "Sam",
  "Frodo",
  "Gandalf",
  "Eragorn",
  "Gimley",
];
const returnClassIsTooSmall = (students) => {
  if (students.length < 10) {
    console.log(true);
  } else {
    console.log(false);
  }
};
returnClassIsTooSmall(classCh);
returnClassIsTooSmall(classCh1);
// 9. Make a variable called combineStrings that will take stringOne parameter and stringTwo parameter and return them combined
// call this function 3 times with 6 strings.
console.log("#9");
const combineStrings = (stringOne, stringTwo) => {
  console.log(stringOne + stringTwo);
};
combineStrings("Vasya", "Vasilii");
combineStrings("Apple", "Pear");
combineStrings("libary", "book");
// 10. Write a function called returnDataType that will return the datatype of the data parameter
console.log("#10");
const returnDataType = (data) => {
  console.log(typeof data);
};
returnDataType(4);
returnDataType("typeof data");
returnDataType(true);
returnDataType([]);

// 11. Write a function called addStudentToClass that will push the student parameter to the class array from problem number 8
// Call this function 2 times
console.log("#11");
const addStudentToClass = (student) => {
  classCh.push(student);
  console.log(classCh);
};
addStudentToClass("Madina");
addStudentToClass("Alis");
// 12. VERY OPTIONAL - Make a variable called extraStudents. This should be an array with about 10 string names.

// Write a function called fillClass that will loop until the class array has >= 15 students. Every loop one student should be put into the class array and taken out of the extraStudents array
console.log("#12");

let extraStudents = [
  "Sally",
  "Sam",
  "Frodo",
  "Gandalf",
  "Eragorn",
  "Gimley",
  "Sally",
  "Sam",
  "Frodo",
  "Gandalf",
  "Eragorn",
  "Gimley",
];
let classCh3 = ["A", "B", "C", "D"];
const fillClass = (from, to) => {
  while (to.length < 15 && from.length > 0) {
    to.push(from.pop());
  }
};
fillClass(extraStudents, classCh3);
console.log(classCh3);
