/*
    Arrow Function- 
                    This is a shorter or concise syntax for creating function.
                    1. No need to use function keyword and return keyword.

                    Disadvantages-
                    Does not have its own bindings to this or super, and should not be used as methods.
                    Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
*/

// es5 function 
function sum(a, b) {
    console.log('The sum of two number is:- ' + (a + b));
}
sum(12, 4);


// es6 arrow function
let add = (c, d) => console.log('The sum of two number is= ' + (c + d));
add(4, 9)