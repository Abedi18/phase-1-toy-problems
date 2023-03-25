function speedDetector(speed) {
    // Define the speed limit and the number of demerit points given per 5 km/h over the limit
    const speedLimit = 70;
    const demeritPointsPer5KmOver = 1;
  
    // Check if the speed is less than speedLimit + 5 km/h
    if (speed < speedLimit + 5) {
      // If so, return "Ok"
      return "Ok";
    } else {
      // If not, calculate how many km/h over the speed limit the driver is going
      const kmOver = speed - speedLimit;
  
      // Calculate the number of demerit points the driver should receive
      const demeritPoints = Math.floor(kmOver / 5) * demeritPointsPer5KmOver;
  
      // If the driver has received 12 or more demerit points, return "License suspended"
      if (demeritPoints >= 12) {
        return "License suspended";
      } else {
        // Otherwise, return the number of demerit points as a string
        return "Points: " + demeritPoints;
      }
    }
  }

// console.log(speedDetector(80));   // Outputs: "Points: 2"
// console.log(speedDetector(70)); // Outputs: "Ok"
console.log(speedDetector(135)); // Outputs: "License suspended"
  
  
  
  
  

