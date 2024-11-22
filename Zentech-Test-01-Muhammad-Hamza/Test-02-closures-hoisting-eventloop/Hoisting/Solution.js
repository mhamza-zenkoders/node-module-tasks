// Explain the difference in hoisting behavior between var, let, and const with an example. How would you demonstrate these differences in a real-world use case?

/*
For var variable, the declaration and initialization are hoisted to the top of the scope, 
but the assignment is not. It is initialized as undefined while hoisting.
This means that the variable is declared but initialized as undefined 
until the execution reaches the assignment statement.*/

//Example
console.log(x);
var x = 5;

/*
For let and const variable, the declarations are hoisted to the top of the scope, but it is not initialized or assigned.
The variable remains in the Temporal Dead Zone until it reaches the assignment point.
Thats why we get ReferenceError when we try to access the variable before the assignment.*/

//Example
// console.log(y);
// let y = 5;

// console.log(z);
// const z = 5;







// What will the following code output, and why?
// console.log(a);
// var a = 10;
// let b = 20;
// console.log(b);

/* Answer:
For console.log(a); 
the output will be undefined because the declaration of var a is hoisted 
to the top of the scope, and it initialized as undefined.

For console.log(b);
the output will be number 20
as we know let variable is not initialized when hoisted, but in this case its value is 
assigned as 20 before accessing it.
*/








// Modify the code so that it doesn’t throw an error or print undefined.
var a = 10;
console.log(a);
let b = 20;
console.log(b);





// Write a function that demonstrates hoisting by declaring both a function and a variable with the same name. Explain the output when the function is called.

function Hoisting() {
    console.log(x); //It will print function as the whole function is hoisted first.
    var x;
    console.log(x); //It will still the assignment is not updated for x.
    x = "This is a vairable";
    console.log(x); //It will print the variable x with the assigned value as the assignment is updated and the variable taskes precedence in execution.
    function x() {
        return "This is a function!";
    }
    console.log(x); // It will still print variable x as the variable is hoisted last;
    return;
}

Hoisting();

//Now if we use Arrow function, the first two outputs will be undefined 
//as the variable is initialized as undefined until it reaches the assignment.

//and the second last output will be the function as the function is assigned in last.






// What is the scope of variables declared with var, let, and const when used inside loops? Provide an example that uses hoisting to illustrate your explanation.

/*
var: 
It is function-scoped or global-scoped if there is no function
It can be reassigned but can be redeclared.
When used in a loop, the varibale is not shared but new instance is created for each iteration */
/*
let: 
It is block-scoped
It can be reassigned and redeclared
When used in a loop, the variable is shared across all iterations of the loop.
 */
/*
let: 
It is blocked-scoped.
It cant be redeclared or reassigned.
It cant be used in loops as it cant reassigned.
*/

function scopesDemo() {

    console.log(a); // `undefined` because var is initialized as undefined when hoisted
    // console.log(b); // ReferenceError because let is not initialized when hoisted
    // console.log(c); // ReferenceError because const is not initialized when hoisted
    for (var a = 0; a < 3; a++) {
        setTimeout(() => console.log(a), 0); // Prints 3,3,3 as the variable is shared across all iterations and is updated in the last iteration
    }

    for (let b = 0; b < 3; b++) { 
        let d = 1;
        setTimeout(() => console.log(b), 0); // Prints 0, 1, 2 as new instance of let variable is created for each iteration.
    }
    //console.log(d); // Cant access d because it is declared inside the loop and is not in the scope of the outer function
    
    // for (const c = 0; c < 1; c++) { // Error cuz const cant be redeclared
    //     console.log(c);
    // }
}

scopesDemo();








// How does function expression hoisting differ from function declaration hoisting? Write code to demonstrate the difference.

//Using Function Declaration
testFunction(); // Logs the output as whole function is hoisted to the top of the scope.

function testFunction() {
    console.log('This is a function declaration');
}

//Using Function Expression
//using var for declaration
testFunction2(); // Prints undefined as the function declaration is hoisted and initialized as undefined.
var testFunction2 = function() {
    console.log('This is a function declaration using var');
}

testFunction2(); // Reference Error cuz the function declaration is hoisted but not initialized.
let testFunction2 = function() {
    console.log('This is a function declaration using let');
}


