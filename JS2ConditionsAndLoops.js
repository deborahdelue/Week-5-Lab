/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  Conditions and Loops Lab
   FE JS2 Lab
*/

/** Key Terms:
 *  Boolean Operators
 *  Loop
 *   - for
 *   - for of
 *   - while
 *   - do while
 *  
 *  Conditional / Control Flow Statement
 *  "Equal To": == 
 *  "Strictly Equals": ===   
 *  Increment ++
 *  Decrement --
 *  Index
 *  Modulus
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1: Driving the speed limit.. ? \n`);

/**
 * Step 1: Create two variables: speedLimit and mySpeed
 * Step 2: Set their values to numbers between 1 and 100.
 * 
 * Step 3: Conditionals:
 *             a. Using a conditional, determine if mySpeed is greater than the speedLimit
 *             b. If true, print "Slow Down! Mom is mad!" to the console
 *             c. If mySpeed is equal to the speedLimit, print "Everyone is happy!" to the console
 *             d. If mySpeed is less than the speedLimit, print "Speed up! Dad is mad!"
 * 
 * 
 * ↓ YOUR CODE HERE ↓ */

var speedLimit = 100;
var mySpeed = 100;

if (mySpeed > speedLimit) {
   console.log("Slow Down! Mom is mad!")
} else if (mySpeed == speedLimit) {
   console.log("Everyone is happy!")
} else {
   console.log("Speed up! Dad is mad!")
}   
/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2: Is it time to wake up for work? \n`);

/**
 * Step 1: Create two variables, alarmSet and weekDay
 * Step 2: Set them to a boolean value
 * 
 * Step 3: Create a conditional... // if (true) {do thing} 
 *         to do something if the alarm is or isnt set & it is or isnt a week day. 
 *
 *         a. If alarm is set and it is a week day print "Sound Alarm! Time for work!" to the console
 *         b. Otherwise, print "I can sleep in!" to the console.
 * 
 * ↓ YOUR CODE HERE ↓ */

var alarmSet = true
var weekDay = true
 
if (alarmSet && weekDay) {
   console.log("Sound Alarm! Time for work!")
} else { 
   console.log("I can sleep in!")
}

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 3: Username & Password \n`);

/**
 * Step 1: Create two variables, username and password.
 * Step 2: Create a conditional/control flow statement:
 *         - if the username is "Tommy123" and the password is "12345"
 *	          or the username is "Timmy456" and the password is "6789", 
 *		       print "Admin Login Successful" to the console
 *
 *	        - otherwise, print "Admin Access Denied"
 * 
 * ↓ YOUR CODE HERE ↓ */

var username = "Tommy123"
var password = "12345"

if (username == "Tommy123" && password == "12345" || username == "Timmy456" && password == "6788") {
   console.log("Admin Login Successful")
} else {
   console.log("Admin Access Denied")
}

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 4: Student Class \n`);

/**
 * Step 1: Create a variable called studentClass. Don't give it a value yet.
 *         There is a variable called studentGrade. It could be any number from 0-12.
 * 
 * Step 2: Write code that will change the value of studentClass based on studentGrade
 *          - 0-6 will be Elementary
 *          - 7-8 will be Middle
 *          - 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior 
 *          
 *         Any other value should return "Error" to the console.
 * 
 * ↓ YOUR CODE HERE ↓ */

var studentClass;
var studentGrade = 13;

if (studentGrade >= 0 && studentGrade <= 6) {
   studentClass = "Elementry"
   } else if (studentGrade == 7 || studentGrade == 8) {
   studentClass = "Middle"
   } else if (studentGrade == 9) {
      studentGrade = "Freshman"
   } else if (studentGrade == 10) {
      studentGrade = "Sophomore"
   } else if (studentGrade == 11) {
      studentGrade = "Junior"
   } else if (studentGrade == 12) {
      studentGrade = "Senior"
   } else {
      console.log("Error")
   }
   console.log(studentGrade)




/*-------------------------------------------------------*/

console.log(`--------------------------
Question 5: Loops! \n`);

/**
 * Step 1: Write a "for loop" that will iterate backwards and print 10 to -10.
 * Step 2: Write a "do/while" loop that will prints 1 through 50.
 * Step 3: Modify the previous "do/while" loop.
 *         Print the iterator if the remainder (% // modulus) is 0 when divisible by 4.
 * 
 * ↓ YOUR CODE HERE ↓ */

// // INFO - this is the for loop for step 1
// for (let i = 10; i > -11; i--) { // this for loop has 3 expressions #1 is let 1 = 10; says to start the index abbreviated as i to start at 10, #2 is 1 > -11; says as long as the index is greater -11; expression #3 is i-- says increment downwards by 1
// } console.log(i)

// //  INFO - this is the do/while loop for step 2
// var number = 1 // number is the variable to start the process

// do {
// console.log(number) // this prints the numbers to the console log
// number++ // this increments the numbers up from 1 up by 1
// } while (number <= 50) // this says to stop the loop with the numbers reach 50

// //  INFO - this is the do/while loop for step 3 
// var counter = 1 // counter is the variable to start the process

// do {
//    if (counter % 4 == 0) { // computers the numbers of the counter that are evenly divisible by 4
//    console.log(counter) // this prints those evenly divisible by 4 numbers
//    }
//    counter++ //this increments the counter up from 0 by 1
//    } while (counter <= 50) // this says to stop the loop with the numbers reach 50




/*-------------------------------------------------------*/

console.log(`--------------------------
Question 6: Debugging an infinite loop! \n`);

/**
 * Step 1: Read through the written code below.
 *         Figure out why it's causing an infinite loop & fix the syntax.
 * Step 2: Uncomment out to test
 * 
 * ↓ YOUR CODE HERE ↓ */

         // start   / / stop   // increment
// for (let i = 11;  i > 10;   i++) { 
      // console.log(i);   
   
// INFO - there are several ways to fix this including starting with i = 0, changing the stop to be i < 10




console.log('-----------Finished------------')
