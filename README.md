# phase-1-toy-problems

## Introduction
In this lab, we are going to solve three toy-problems: Student Grade Generator that prompts the user to input student marks ,  Speed Detector program  that takes the speed of a car as input and Net Salary Calculator whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits.  

## Instructions

# grade_generator.js

The function generateStudentGrade prompts the user to input a student's mark, converts it to a number using the Number function, and checks if the input is valid (i.e., between 0 and 100). If the input is invalid, the function returns an error message. Otherwise, the function determines the corresponding grade based on the mark using a series of if-else statements and returns the grade.

Note that the function assumes that the input is a number. If the input can be a string or other type, you may need to perform additional input validation before converting it to a number.
In this implementation, the readline module is used to create a readline interface that reads user input from the command line. The rl.question method prompts the user to input the student's mark and returns the user's answer as a string. The answer is then converted to a number and validated, and the corresponding grade is determined and returned.

Note that the generateStudentGrade function is now an asynchronous function that returns a Promise, so we need to use await to call it and then to handle the returned value.

# speed_detector.js

This function speedDetector takes a single argument speed, which represents the speed of the car in km/h. It first defines some constants: the speed limit (speedLimit) and the number of demerit points given per 5 km/h over the speed limit (demeritPointsPer5KmOver).

The function then checks if the speed is less than speedLimit + 5 km/h. If it is, the function returns "Ok", indicating that the driver is driving at a safe speed.

If the speed is greater than or equal to speedLimit + 5 km/h, the function calculates how many kilometers per hour over the speed limit the driver is going (kmOver). It then calculates the number of demerit points the driver should receive by dividing kmOver by 5, rounding down to the nearest integer, and multiplying by demeritPointsPer5KmOver.

If the number of demerit points is greater than or equal to 12, the function returns "License suspended", indicating that the driver's license should be suspended. Otherwise, the function returns the number of demerit points the driver received as a string, preceded by the word "Points: ".

# net_salary_calculator.js

In this program, we define three constants PAYEE_PERCENTAGE, NHIF_PERCENTAGE, and NSSF_PERCENTAGE which represent the tax rates for PAYEE, NHIF deductions, and NSSF deductions respectively. We then calculate the gross salary by adding the basic salary and benefits together.

Next, we calculate the PAYEE (tax), NHIF deductions, and NSSF deductions based on the gross salary and the corresponding percentages. Finally, we calculate the net salary by subtracting the PAYEE, NHIF deductions, and NSSF deductions from the gross salary.

We return an object containing all the calculated values so that they can be easily accessed and used by other parts of the program. In this example, we use console.log to print the salary details to the console.

## Resources

[grade_generator]:https://youtu.be/HF8qnAv4vEY
Author: coderunwithme9279 
[net_salary_calculator]:  https://youtu.be/4fVnqPKBkHQ
Author: Zaeem Ul Hassan
[speed_detector]: https://youtu.be/Rs_rAxEsAvI
Author: freeCodeCamp
