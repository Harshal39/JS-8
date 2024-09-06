// Converting number to string

//1. Using toString() method
//Only works on objects or primitive types that have a toString() method. Directly calling toString() on null or undefined will throw an error
let number = 123;
let string = number.toString();
console.log(typeof(string));

//2.Using string concatenation
// Quick and simple. Works in all cases, even with null or undefined
let number_1 = 456;
let string_1 = number + "";
console.log(typeof(string_1));

//3.Using the string function
//Works on any type (e.g., numbers, objects, arrays, null, undefined).
let number_2 = 789;
let string_2 = String(number_2);
console.log(typeof(string_2));

//4.Using template literals
//Useful when you need to embed the number in a larger string or when dealing with multi-line strings. Flexible for more complex string interpolations.
let number_3 = 578;
let string_3 = `${number_3}`;
console.log(typeof(string_3));


//Converting string to number
//1.Using Number() function
//Converts the entire string and handles integers and floats. Returns NaN if the string is not a valid number
let str = "12345";
let num = Number(str);
console.log(typeof(num));

//2.Using parseInt() function
/*Parses the string and returns an integer.
  Allows specifying the base (radix) for conversion (e.g., base 10 for decimal, base 2 for binary). Stops parsing at the first non-digit character.
  Only works for integers. If the string starts with a non-numeric character, it returns NaN.
*/
let str_1 = "123";
let num_1 = parseInt(str_1,10);
console.log(num_1);
console.log(typeof(num_1));

//3.Using parseFloat() function
/*
Parses the string and returns a floating-point number.
Handles both integers and floats. Stops parsing at the first non-numeric character.
Doesn't allow specifying a base like parseInt()
*/
let str_2 = "345.78";
let num_2 = parseFloat(str_2);
console.log(num_2);
console.log(typeof(num_2));

//4.Using the unary plus (+) operator
/*
Converts the string to a number using the unary + operator.
Very concise. Works for both integers and floats.
Can be less readable and explicit than Number(). If the string is not a valid number, it returns NaN.
*/
let str_3 = "345";
let num_3 = +str_3;
console.log(num_3);
console.log(typeof(num_3));

//5.Using Math.floor() or Math.ceil() for integers
/*
Use Math.floor() to round down or Math.ceil() to round up after converting to a float.
Useful when you need to ensure integer conversion with rounding behavior.
Requires an extra step and is less direct than other methods.
*/
let str_4 = "567.67";
let num_4 = Math.floor(parseFloat(str_4));
console.log(num_4);
console.log(typeof(num_4));

/*
Number(): General-purpose method for converting strings to numbers.
parseInt(): Best for converting to integers, with optional base specification.
parseFloat(): Best for converting to floating-point numbers.
Unary +: Concise method, good for quick conversions.
Math.floor()/Math.ceil(): Use when rounding behavior is needed
*/


//String Escape Characters
let A = "It\'s a nice day";
console.log(A);//Used to include a single quote in a string that is enclosed in single/double quotes

let B = "He said \"Hello!\"";
console.log(B);//Used to include a double quote in a string that is enclosed in double quotes

let C = "This is backslash: \\";
console.log(C); //Used to include a backslash in a string.

let D = "Hello\nHarshal";
console.log(D);//Used to insert a new line in a string.

let E = "Hello\tWorld";
console.log(E);//Inserts a horizontal tab (a few spaces)


//Math.random gives some value between 0 to 1.
//Math.floor() is used to remove decimal point and number after it.


