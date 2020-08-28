// how to display javascript Object
// var person = { name: "John", age: 30, city: "New York" };
// document.write(person.name + ", " + person.age + ", " + person.city);

displaying object in a loop
var x = 0;
var txt = "";
var person = { name: "John", age: 30, city: "New York" };
for (x in person){
    txt += person[x] + " ";
};
document.write(txt);  // you must use person[x] while person.x will not work as it is variable.


// using Object.values function to convert object into an array
// var person = {name:"John", age:50, city:"New York"};
// var myArray = Object.values(person);
// document.write(myArray);

// using JSON.stringify function to convert an object into string.
// var person = {name:"John", age:30, city: "New York"};
// var myString = JSON.stringify(person);
// document.write(myString);

// using JSON.stringify function to convert an object into string.
// var person = {name:"John", age:30, city: "New York"};
// var myString = JSON.stringify(person);
// document.write(myString);

// using JSON.stringify function to convert an object into string.
// var person = {name:"John", age:30, city: "New York"};
// var myString = JSON.stringify(person);
// document.write(myString);

// Stringfy date
// var theDate = new Date();
// var myString = JSON.stringify(theDate);
// document.write(myString);


// stringfy functions
// var person = {
//     name : "john",
//     age: function(){
//         return 30
//     }
// }
// person.age = person.age.toString();
// console.log(person.age());
// var myString = JSON.stringify(person);
// document.write(myString);


// strigfy arrays
// var arr = ["John", "Peter", "Sally", "Jane"];
// var myString = JSON.stringify(arr);
// document.write(myString);