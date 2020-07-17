// var carName = "Volvo";

// // code here can use carName

// function myFunction() {
//   // code here can also use carName
// }

// // code here can NOT use carName

// function myFunction() {
//     var carName = "Volvo";
//     // code here CAN use carName
//   }
  
//   // code here can NOT use carName
  

//   {
//     var x = 2;
//   }
//   // x CAN be used here

//   {
//     let x = 2;
//   }
//   // x can NOT be used here

//   var x = 10;
// // Here x is 10
// {
//   var x = 2;
//   // Here x is 2
// }
// // Here x is 2


var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10

var i = 5;
for (var i = 0; i < 10; i++) {
  // some statements
}
// Here i is 10


let i = 5;
for (let i = 0; i < 10; i++) {
  // some statements
}
// Here i is 5
