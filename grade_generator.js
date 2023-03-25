const readline = require('readline');

// This function prompts the user to input a student's mark and returns the corresponding grade
async function generateStudentGrade() {
  // Create a readline interface to read user input from the command line
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Ask the user to input the student's mark
  const answer = await new Promise((resolve) => {
    rl.question("Enter the student's mark (between 0 and 100): ", resolve);
  });

  // Close the readline interface
  rl.close();

  // Convert the user input to a number and check if it is valid
  const mark = Number(answer);
  if (isNaN(mark) || mark < 0 || mark > 100) {
    return "Invalid input. Please enter a number between 0 and 100.";
  }

  // Determine the corresponding grade based on the mark
  if (mark >= 80) {
    return "A";
  } else if (mark >= 60) {
    return "B";
  } else if (mark >= 50) {
    return "C";
  } else if (mark >= 40) {
    return "D";
  } else {
    return "E";
  }
}

// Example usage:
generateStudentGrade().then((grade) => {
  console.log(grade); // Prints the generated grade (e.g., "B")
});


  
  
  
  

