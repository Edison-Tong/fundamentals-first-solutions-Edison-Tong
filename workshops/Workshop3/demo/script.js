// Demo: Splice and Concat
// Remove the 3rd element of the array and move it to the front of the array

// let arr = ["Apples", "Bananas", "Grapes", "Oranges"];
// let temp = arr.splice(2, 1);
// arr = temp.concat(arr);
// console.log(arr);

// Demo: Blastoff!
// Create a loop that simulates a countdown for a rocket.
// Count down from 10 to 1, and then print "Blast off!"

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }
// console.log("BLAST OFF!");

// Demo: Loops with Conditionals
// Loop over the following array and print a message indicating whether each number
// is even or odd.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(`${numbers[i]} - even`);
  } else {
    console.log(`${numbers[i]} - odd`);
  }
}
