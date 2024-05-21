

// Practice Problem #2

/* Wright a program to calculate the average marks of Mathematics, Biology
Chemistry, Physics and Bangla of a student */

 /* Input:
 The first line of the input is the marks of the five subjects mentioned above, respectively */

 /* Output: 
 Print the result 2 decimal places,
 =========================================
 Sample Input: 75.25, 65, 80, 35.45, 99.50
 =========================================
 Output: 71.04
 =========================================
  */

var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;

var totalMarks = mathematics + biology + chemistry + physics + bangla; // Adding all subject marks
console.log(totalMarks); // Total marks 
var totalSubject = 5; // 5 subjects

var average = totalMarks / totalSubject; // Divided total marks with total subject.

console.log(average); // I will be print long decimal number

average = average.toFixed(2); // Declare OR fixed 2 decimal.
console.log(average); // 2 decimal number will be print as a String.
average = parseFloat(average) // Convert string decimal number to integer (Number)
console.log(average);