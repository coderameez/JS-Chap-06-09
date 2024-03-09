// MATH EXPRESSIONS
document.write("<h2> CHAPTER 5 </h2>")

// question 01 

document.write("<h3>Question 1 </h3>")

var num1 = 3;
var num2 = 5;
total = num1 + num2;
document.write("sum of 3 and 5 is " + total + "<br>");

// question 02

// for subtraction 
document.write("<h3>Question 2 </h3>")

var num1 = 5;
var num2 = 3;
total = num1 - num2;
document.write("subtraction of 5 and 3 is " + total + "<br>");

// for multiplication

var num1 = 5;
var num2 = 3;
total = num1 * num2;
document.write("multiplication of 5 and 3 is " + total + "<br>");

// division 

var num1 = 6;
var num2 = 3;
total = num1 / num2;
document.write("division of 5 and 3 is " + total + "<br>");

// modulus 

var num1 = 6;
var num2 = 3;
total = num1 % num2;
document.write("modulus of 5 and 3 is " + total + "<br>");

// question 03

// a. Declare a variable.
document.write("<h3>Question 3 </h3>")
var num;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write("Value after variable declaration is undefined" + "<br>");

// c. Initialize the variable with some number.
num = 5;

// d. Show the value of variable in your browser like “Initial value: 5”.
document.write("Initial value:" + " " + num + "<br>");

// e. Increment the variable.
num = num + 1;
// or we can also perform it like this 
// num++;

// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write("Value after increment is:" + " " + num + "<br>");

// g. Add 7 to the variable. 
num = num + 7;

// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.write("Value after addition is:" + " " + num + "<br>");

// i. Decrement the variable.
num = num - 1;
// or we can also perform it like this
//num--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("Value after decrement is:" + " " + num + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.
num = 3 / num;

// l. Output : “The remainder is : 0”.
document.write("The remainder is :" + " " + num);

// question 04

document.write("<h3>Question 4 </h3>")

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying tickets to a movie.

var price = 600
total = price * 5

document.write("Total cost to buy 5 tickets to a movie is" + " " + total + "PKR")

// question 05

document.write("<h3>Question 5 </h3>")
document.write("<h5> Table of 4 </h5>")

// for (var i = 1; i <= 10; i++) {
//     document.write("4 x " + i + " = " + (4 * i) + "<br>");
// }

var num = 4
suma = num * 1
document.write("4 x 1 =" + " " + suma + "<br>")

suma = num * 2
document.write("4 x 2 =" + " " + suma + "<br>")

suma = num * 3
document.write("4 x 3 =" + " " + suma + "<br>")

suma = num * 4
document.write("4 x 4 =" + " " + suma + "<br>")

suma = num * 5
document.write("4 x 5 =" + " " + suma + "<br>")

suma = num * 6
document.write("4 x 6 =" + " " + suma + "<br>")

suma = num * 7
document.write("4 x 7 =" + " " + suma + "<br>")

suma = num * 8
document.write("4 x 8 =" + " " + suma + "<br>")

suma = num * 9
document.write("4 x 9 =" + " " + suma + "<br>")

suma = num * 10
document.write("4 x 10 =" + " " + suma + "<br>")

// Question 06

document.write("<h3> Question 06 </h3>")

// 6. The Temperature Converter: It’s hot out! Let’s make aconverter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var celsius = 28
fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "°C" + " " + "is" + " " + fahrenheit + "°F " + "<br>")

var fah = 73
celsius = (fah - 32) * 5 / 9
document.write(fah + "°F " + " " + "is" + " " + celsius + "°C")

// question 07

document.write("<h3> Question 07 </h3>")

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
var item1Price = 650;

// b. Price of item 2
var item2Price = 100;

// c. Ordered quantity of item 1
var item1Quantity = 3;

// d. Ordered Quantity of item 2
var item2Quantity = 7;

// e. Shipping charges
var shippingCharges = 100;

// Compute the total cost
var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;

// Show the receipt in the browser
document.write("<h5>Shopping Cart</h5>");
document.write("<p> Price of item 1 is" + " " + item1Price + "<br>");
document.write("<p> Quantity of item 1 is" + " " + item1Quantity + "<br>");
document.write("<p> Price of item 2 is" + " " + item2Price + "<br>");
document.write("<p> Quantity of item 2 is" + " " + item2Quantity + "<br>");
document.write("<p> Shipping Charges" + " " + shippingCharges + "<br>" + "<br>");
document.write("Total Cost of your order is" + " " + totalCost);

// Question 08

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser.

document.write("<h3> Question 08 </h3>")

var totalMarks = 980;
var marksObtained = 804;
result = 804 / 980 * 100;

document.write("<h5> Marks Sheet" + "<br>");
document.write("<p> Total Marks :" + " " + totalMarks + "<br>");
document.write("<p> Marks obtained :" + " " + marksObtained + "<br>");
document.write("<p> Percentage :" + " " + result + "%");

// Question 09 

document.write("<h3> Question 09 </h3>")
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)


var total = (10 * 104.80) + (25 * 28);
document.write("<h5> Currency in PKR </h5>");
document.write("Total Currency in PKR:" + " " + total);

// Question 10 

document.write("<h3> Question 10 </h3>")
// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var num = 4;
result = (num + 5) * (10) / 2;

document.write(result);

// Question 11 

document.write("<h3> Question 11 </h3>")
// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
var currentYear = 2023

// b. Store their birth year in a variable.
var birthYear = 2004

// c. Calculate their 2 possible ages based on the stored values.
var age = (currentYear - birthYear);

document.write("<h5> Age Calculator </h5>")
document.write("Current Year:" + " " + currentYear + "<br>");
document.write("Birth Year:" + " " + birthYear + "<br>");
document.write("Your Age is:" + " " + age);

// Question 12 

document.write("<h3> Question 12 </h3>")

// 12. The Geometrizer: Calculate properties of a circle.

// a. Store a radius into a variable.
var radius = 20;

// b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142)
circumference = 2 * Math.PI * radius

//Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
area = Math.PI * radius * radius

document.write("<h5> The Geometrizer </h5>");
document.write("Radius of a Cirlce:" + " " + radius + "<br>");
document.write("The Circumference is:" + " " + circumference + "<br>");
document.write("The Area is:" + " " + area);

// Question 13 

document.write("<h3> Question 13 </h3>")

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.

// a. Store your favorite snack into a variable
var snack = "cheetos"

// b. Store your current age into a variable.
var age = 18

// c. Store a maximum age into a variable.
var maxAge = 50

// d. Store an estimated amount per day (as a number).
var maxAmount = 2

// e. Calculate how many would you eat total for the rest of your life.
var totalAmount = (maxAge - age) * 365 * maxAmount;

document.write("Favourite snack:" + " " + snack + "<br>");
document.write("Current age:" + " " + age + "<br>");
document.write("Estimated maximum age:" + " " + maxAge + "<br>");
document.write("Amount of snacks per day" + " " + maxAmount + "<br>");
document.write("You will Need" + " " + totalAmount + " " + snack + " " + "to last you untill the ripe old age" + " " + maxAge + "<br>");

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
