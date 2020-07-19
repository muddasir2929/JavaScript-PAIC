const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10


const PI;
PI = 3.14159265359;

const PI = 3.14159265359;