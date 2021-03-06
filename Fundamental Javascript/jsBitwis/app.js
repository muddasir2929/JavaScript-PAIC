// JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.

// Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers.

// After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.

// The examples above uses 4 bits unsigned binary numbers. Because of this ~ 5 returns 10.

// Since JavaScript uses 32 bits signed integers, it will not return 10. It will return -6.

// 00000000000000000000000000000101 (5)

// 11111111111111111111111111111010 (~5 = -6)

// A signed integer uses the leftmost bit as the minus sign.

// var x = 5 & 1;
// var x = 5 | 1;

// var x = 5 >>> 1;


// function dec2bin(dec){
//     return (dec >>> 0).toString(2);
//   }

// firstName = "John";
// lastName = "Doe";

// price = 19.90;
// tax = 0.20;

// fullPrice = price + (price * tax);


// var x = y + z;
// var values = ["Volvo", "Saab", "Fiat"];