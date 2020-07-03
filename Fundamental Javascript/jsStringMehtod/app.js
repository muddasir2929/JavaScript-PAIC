// var str = "Please locate where 'locate' occurs!";
// var pos = str.indexOf("locate");
// alert(pos);
// the above code will show the index number of first word in most occurance words

// var str = "Please locate where 'locate' occurs!";
// var pos = str.lastIndexOf("locate");
// alert(pos);
// the above code will show the index number of last word in most occurance words

// var str = "Please locate where 'locate' occurs!";
// var pos = str.indexOf("locate", 15);
// alert(pos);
// the answer is 21.

// var str = "Please locate where 'locate' occurs!";
// var pos = str.lastIndexOf("locate", 15);
// alert(pos);
// the answer is 7.

// var str = "Please locate where 'locate' occurs!";
// var pos = str.search("locate");
// alert(pos);

// var str = "Please locate where 'locate' occurs!";
// var pos = str.slice(4, 11);
// alert(pos); 
// slice will take values from 4 to 10 in this case (11-1)

// var str = "Please locate where 'locate' occurs!";
// var pos = str.slice(-9, -4);
// alert(pos);
// this will take position from back in this case the answer will be (' occ)

// var str = "Please locate where 'locate' occurs!";
// var pos = str.slice(11);
// alert(pos);
// this will take position from 11 to ownward the rest of content will be counted.

// var str = "Please locate where 'locate' occurs!";
// var pos = str.slice(-11);
// alert(pos);

// the substring method is similar to the slice method, but difference is that it will not accept negative values as slice function


// the substr method is similar to the slice function. The difference is that the second parameter specifies the length of the extracted part.

// var str = "Please locate where 'locate' occurs!";
// var pos = str.substr(17, 7);
// alert(pos);
// the alert  will start from 17 index and it will take only six indexes (7-1) i.e (re 'loc)

// var str = "Please locate where 'locate' occurs!";
// var pos = str.substr(-7);
// alert(pos);
// the ansewer will be (occurs!)

// The replace() method replaces a specified value with another value in a string:
// var str = "Please locate where 'locate' occurs!";
// var pos = str.replace("where", "muhammad");
// alert(pos);

// replace is case sensitive. to eleminate case sensitiveness, we use (/string/i,)
// str = "Please visit Microsoft!";
// var n = str.replace(/MICROSOFT/i, "W3Schools");
// alert(n);


// To replace all matches, use a regular expression with a /g flag (global match):
// str = "Please visit Microsoft! the Microsoft is a company.";
// var n = str.replace(/Microsoft/g, "W3Schools");
// alert(n);

// var text1 = "hEllo woRld!";     
// var text2 = text1.toUpperCase();
// alert(text2);
// this will convert the whole string into upper case i.e (HELLO WORLD!)

// var text1 = "hEllo woRlD!";     
// var text2 = text1.toLowerCase();
// alert(text2);
// this will convert the whole string into lower case i.e (hello world!)


// the concat method
// var text1 = "Hello";
// var text2 = "World";
// var text3 = text1.concat(" ", text2);
// alert(text3);

// the below mentioned lines will do the same result.

// var text = "Hello" + " " + "World!";
// var text = "Hello".concat(" ", "World!");
// alert(text);

// the trim method
// var str = "       Hello World!        ";
// alert(str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));

// the charAt method
// var str = "HELLO WORLD";
// var x = str.charAt(0);
// alert(x); // H answer


// the charCodeAt method
// var str = "HELLO WORLD";
// var x = str.charCodeAt(7);
// alert(x); // H 79

// converting string into array
// var txt = "a,b,c,d,e";   // String
// txt.split("Hello");         
// alert(txt);