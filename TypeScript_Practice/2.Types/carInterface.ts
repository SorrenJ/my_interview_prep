/*
Create an interface Car with properties make (string), 
model (string), and year (number). 
Then, create another interface ElectricCar that extends Car 
and adds a property batteryCapacity (number). 
Finally, create an object myCar of type ElectricCar and write a function printCarDetails 
that prints out the details of any car.


*/

interface Car {
    // Define fields here
  }

  interface ElectricCar extends Car {
    // Define new field here
  }

  const myCar: ElectricCar = {
    // Define your car here
  };

  function printCarDetails(car: Car) {
    // Your code here
  }