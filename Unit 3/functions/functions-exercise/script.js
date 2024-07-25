// Functions Exercise here

// Example Function and Calls
// function addTwoNumbers(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }
// Example Calls
// let addTwoNumbersResult1 = addTwoNumbers(2, 2);
// console.log("AddTwoNumbers Exercise:", addTwoNumbersResult1);

// let addTwoNumbersResult2 = addTwoNumbers(1, 4);
// console.log("AddTwoNumbers Exercise:", addTwoNumbersResult2);

// Rest of Exercises Here:
function addTwoNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
console.log("addTwoNumbers exercise:", addTwoNumbers(2, 2));
console.log("addTwoNumbers exercise:", addTwoNumbers(12, 55));

function addAndMultiplyBy5(num1, num2) {
    let result = (num1 + num2) * 5;
    return result;
}
console.log("addAndMultiplyBy5 exercise:", addAndMultiplyBy5(10, 5));
console.log("addAndMultiplyBy5 exercise:", addAndMultiplyBy5(100, 12));

function hoursToMinutes(hours) {
    let minutes = hours * 60;
    return minutes;
}
console.log("hoursToMinutes exercise:", hoursToMinutes(2));
console.log("hoursToMinutes exercise:", hoursToMinutes(5000));

function getGreeting(name) {
    return `Hello ${name}!`;
}
console.log("getGreeting exercise:", getGreeting("Joe"));
console.log("getGreeting exercise:", getGreeting("sad little turtle man"));

function giveMeBiggest(num1, num2) {
    let biggest;
    if (num1 > num2) {
        biggest = num1;
    } else if (num1 < num2) {
        biggest = num1;
    } else {
        biggest = "They are the same number.";
    }
    return biggest;
}
console.log("giveMeBiggest exercise:", giveMeBiggest(100, 999));
console.log("giveMeBiggest exercise:", giveMeBiggest(20, 20));

function getLast(arr) {
    let last = arr[arr.length - 1];
    return last;
}
console.log("getLast exercise:", getLast([67, 7, 1, 5]));
console.log(
    "getLast exercise:",
    getLast([12, 23, 43, 5, 2, 756, 34, 6567, 2, 434, 5674, 2, 45, 34, 3452, 0])
);

function multiplyAll(arr) {
    let product = arr[0];
    for (let i = 1; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}
console.log("multiplyAll exercise:", multiplyAll([1, 2, 3, 4]));
console.log("multiplyAll exercise:", multiplyAll([2, 4, 8, 2, 3]));

function getLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log("getLargest exercise:", getLargest([7, 2, 7, 9, 3, 8, 12]));
console.log(
    "getLargest exercise:",
    getLargest([
        16, 2, 5, 15, 16, 16, 16, 4, 2, 7, 8, 17, 12, 13, 34, 5, 2, 1, 1, 1,
    ])
);
