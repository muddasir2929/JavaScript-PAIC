// const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error

// var x = 10;
// // Here x is 10
// {
//   const x = 2;
//   // Here x is 2
// }
// // Here x is 10


// const PI;
// PI = 3.14159265359;

// const PI = 3.14159265359;

// const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error

// You can create a const object:
// const car = {type:"Fiat", model:"500", color:"white"};

// // You can change a property:
// car.color = "red";

// // You can add a property:
// car.owner = "Johnson";

// const car = {type:"Fiat", model:"500", color:"white"};
// car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

// // You can create a constant array:
// const cars = ["Saab", "Volvo", "BMW"];

// // You can change an element:
// cars[0] = "Toyota";

// // You can add an element:
// cars.push("Audi");


// var x = 2;    //  Allowed
// var x = 3;    //  Allowed
// x = 4;        //  Allowed


// var x = 2;         // Allowed
// const x = 2;       // Not allowed
// {
//   let x = 2;     // Allowed
//   const x = 2;   // Not allowed
// }


// const x = 2;       // Allowed
// const x = 3;       // Not allowed
// x = 3;             // Not allowed
// var x = 3;         // Not allowed
// let x = 3;         // Not allowed

// {
//   const x = 2;   // Allowed
//   const x = 3;   // Not allowed
//   x = 3;         // Not allowed
//   var x = 3;     // Not allowed
//   let x = 3;     // Not allowed
// }


// const x = 2;       // Allowed

// {
//   const x = 3;   // Allowed
// }

// {
//   const x = 4;   // Allowed
// }


// carName = "Volvo";    // You CAN use carName here
// var carName;

// carName = "Volvo";    // You can NOT use carName here
// const carName = "Volvo";

