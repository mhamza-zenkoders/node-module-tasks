// Write a function that uses closures to create a private counter. The counter should have methods to increment, decrement, and retrieve the current value, but the value itself should not be directly accessible.

function Counter() {
    let count = 0;
    function increment() {
        count++;
    }
    function decrement() {
        count--;
    }
    function getValue() {
        return count;
    }
    return { increment, decrement, getValue };
}
let counter = Counter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log('Value After 3 Increments:', counter.getValue());

console.log(counter.decrement());
console.log(counter.decrement());
console.log('Value After 2 Decrements:', counter.getValue());






// Create a function that generates a list of functions, where each function returns its index in the list.
// (For example, if the list has three functions, calling the first function should return 0, the second 1, and so on.)


//Object Approach
console.log('Using Arrays Approach:');
function generateFunctions(n) {
    let functions = {};
    for (let i = 0; i < n; i++) {
        functions[`f${i}`] = function () {
            return i;
        }
    }
    return functions;
}
let functionsList = generateFunctions(7);

console.log(functionsList.f1());
console.log(functionsList.f2());
console.log(functionsList.f5());
console.log(functionsList.f6());

//Array Approach
console.log('Using Arrays Approach:')
function generateFunctionsArray(n) {
    let functions = [];
    for (let i = 0; i < n; i++) {
        functions.push(function () {
            return i;
        });
    }
    return functions;
}
let functionsArray = generateFunctionsArray(7);

console.log(functionsArray[0]());
console.log(functionsArray[1]());
console.log(functionsArray[5]());
console.log(functionsArray[6]());


// Write a function that creates a timer using closures. The timer should start at 0, increment by 1 every second, and provide a method to pause and resume the timer.

function counterTimer() {
    let count = 0;
    let intervalId = null;
    let paused = false;
    function start() {
        if (intervalId === null) {
            intervalId = setInterval(() => {
                if (!paused) {
                    count++;
                    console.log(count);
                }
            }, 1000);

        }
    }
    function pause() {
        paused = true;
    }
    function resume() {
        paused = false;
    }
    function stop() {
        clearInterval(intervalId);
        intervalId = null;
        count = 0;
    }
    return {
        start,
        pause,
        resume,
        stop
    }
}

let timer = counterTimer();
console.log('\nTimer Started')
timer.start();
setTimeout(function () {
    timer.pause();
    console.log('Timer Paused');
}, 6000)
setTimeout(function () {
    timer.resume();
    console.log('Timer Resumed');
}, 9000);

setTimeout(function () {
    timer.stop();
    console.log('Timer Stoped');
}, 17000);











// Implement a function that partially applies arguments to another function using closures.
// (For example, const add5 = partial(add, 5); add5(3) should return 8.)

function partial(func, firstArgument) {
    return function(lastArguments) {
        return func(firstArgument, lastArguments);
    };
}

function add(x, y) {
    return x + y;
}
function multiply(x, y) {
    return x * y;
}
function subtract(x, y) {
    return x - y;
}
function divide(x, y) {
    return x / y;
}

const add6 = partial(add, 6);
console.log('Adding 5 to value:', add6(10));

const subtract3 = partial(subtract, 3);
console.log('Subtract value from 3', subtract3(9));

const multiply10 = partial(multiply, 10);
console.log('Mutliply value by 10:', multiply10(7));

const divide10 = partial(add,10);
console.log('Divide value by 10:', divide10(7));
