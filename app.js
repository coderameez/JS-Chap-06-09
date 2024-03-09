
// CHAPTER 6-9 
document.write("<h2> CHAPTER 6-9 </h2>")

// Question 01
document.write("<h4> Question 01 </h4>")
// Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

var a = 10
document.write("The value of a is:" + " " + a + "<br>" + "<br>");

++a;
document.write("The value of ++a is:" + " " + a + "<br>");
document.write("Now the value of a is:" + " " + a + "<br>" + "<br>");

a++;
document.write("The value of a++ is:" + " " + a + "<br>");
document.write("Now the value of a is:" + " " + a + "<br>" + "<br>");

--a;
document.write("The value of --a is:" + " " + a + "<br>");
document.write("Now the value of a is:" + " " + a + "<br>" + "<br>");

a--;
document.write("The value of a-- is:" + " " + a + "<br>");
document.write("Now the value of a is:" + " " + a + "<br>");

// Question 02 
document.write("<h4> Question 02 </h4>")

// 2. What will be the output in variables a, b & result after execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

// Explain the output at each stage:
--a;
// Here, the value of a is first decremented and then used, so a becomes 1.

--a - --b;
// Here, the value of b is first decremented and then used, so b becomes 0. The expression becomes 1 - 0 = 1.

--a - --b + ++b;
// Here, the value of b is incremented before it is used, so b becomes 1. The expression becomes 1 - 0 + 1 = 2.

--a - --b + ++b + b--;
// Here, the value of b is first used in the expression and then decremented, so b becomes 0. The final expression becomes 2 + 0 = 2.

document.write("a is" + " " + a + "<br>")
document.write("b is" + " " + b + "<br>")
document.write("result is" + " " + result)

// Question 03 
document.write("<h4> Question 03 </h4>")

// Write a program that takes input a name from user & greet the user.

var name = prompt("Enter your full name");
alert("Hello " + name + ", you have a beautiful name!");

// Question 05
// document.write("<h4> Question 05 </h4>")

// // 5. Write a program to take input a number from user & display it’s multiplication table on your browser.
// // If user does not enter a new number, multiplication table of 5 should be displayed by default.

var table = prompt("Enter a number for table", "5");

// document.write(table);
document.write(" <h5> TABLE FOR" + " " + table + "<br>");

suma = table * 1
document.write(table + " " + "x 1 =" + " " + suma + "<br>")

suma = table * 2
document.write(table + " " + "x 2 =" + " " + suma + "<br>")

suma = table * 3
document.write(table + " " + "x 3 =" + " " + suma + "<br>")

suma = table * 4
document.write(table + " " + "x 4 =" + " " + suma + "<br>")

suma = table * 5
document.write(table + " " + "x 5 =" + " " + suma + "<br>")

suma = table * 6
document.write(table + " " + "x 6 =" + " " + suma + "<br>")

suma = table * 7
document.write(table + " " + "x 7 =" + " " + suma + "<br>")

suma = table * 8
document.write(table + " " + "x 8 =" + " " + suma + "<br>")

suma = table * 9
document.write(table + " " + "x 9 =" + " " + suma + "<br>")

suma = table * 10
document.write(table + " " + "x 10 =" + " " + suma + "<br>")

// Questiom 06 
document.write("<h4> Question 06 </h4>")

// a) Take three subjects name from user and store them in 3 different variables.

var subjectOne = prompt("Enter Subject One name")
var subjectTwo = prompt("Enter Subject Two name")
var subjectThree = prompt("Enter Subject Three name")

// b) Total marks for each subject is 100, store it in another variable.
var totalMarks = 100;

// c) Take obtained marks for first subject from user and stored it in different variable.

var subjectOneMarks = +prompt("Enter Obtained Marks of" + " " + subjectOne);

// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
var subjectTwoMarks = +prompt("Enter Obtained Marks of" + " " + subjectTwo);
var subjectThreeMarks = +prompt("Enter Obtained Marks of" + " " + subjectThree);

// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
var totalMarksObtained = subjectOneMarks + subjectTwoMarks + subjectThreeMarks;
var percentage = (totalMarksObtained / (totalMarks * 3)) * 100;

document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subjectOne + "</td><td>" + totalMarks + "</td><td>" + subjectOneMarks + "</td></tr>");
document.write("<tr><td>" + subjectTwo + "</td><td>" + totalMarks + "</td><td>" + subjectTwoMarks + "</td></tr>");
document.write("<tr><td>" + subjectThree + "</td><td>" + totalMarks + "</td><td>" + subjectThreeMarks + "</td></tr>");
document.write("<tr><td><b>Total</b></td><td><b>" + (totalMarks * 3) + "</b></td><td><b>" + totalMarksObtained + "</b></td></tr>");
document.write("<tr><td><b>Percentage</b></td><td></td><td><b>" + percentage + "%</b></td></tr>");
document.write("</table>");
