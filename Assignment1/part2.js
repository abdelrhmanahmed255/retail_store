// 1. What is the difference between forEach and for...of? When would you use each? (0.5 Grade)

/*
forEach is array method that runs function on each element
for...of is loop that works on arrays and strings

forEach cant use break to stop early
for...of can use break

use forEach for arrays when need index
use for...of when just need values
*/


// 2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. (0.5 Grade)

/*
hoisting moves declarations to top before code runs

var is hoisted with undefined value
let and const are hoisted but cant access before declaration
that area before declaration is TDZ

*/


// 3. What are the main differences between == and ===? (0.5 Grade)

/*
== compares values and converts types
=== compares values and types both

*/


// 4. Explain how try-catch works and why it is important in async operations. (0.5 Grade)

/*
try has code that might fail
catch handles the error if it happens

*/


// 5. What's the difference between type conversion and coercion? Provide examples of each. (0.5 Grade)

/*
conversion is when we change type ourselves
Number("5")  String(5)

coercion is javascript changes automatically
like this 
"5" + 2 = "52"
"5" - 2 = 3
*/
