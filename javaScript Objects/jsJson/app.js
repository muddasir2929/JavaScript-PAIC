// JSON stands for JavaScript Object Notation
// JSON is a lightweight data interchange format
// JSON is language independent *
// JSON is "self-describing" and easy to understand

// {
//     "employees":[
//       {"firstName":"John", "lastName":"Doe"},
//       {"firstName":"Anna", "lastName":"Smith"},
//       {"firstName":"Peter", "lastName":"Jones"}
//     ]
//     }


// A common use of JSON is to read data from a web server, and display the data in a web page.

// For simplicity, this can be demonstrated using a string as input.

// First, create a JavaScript string containing JSON syntax:

// var text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:
// var obj = JSON.parse(text);