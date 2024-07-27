// Test code and try out examples here

let message = "Global Scope";

if (true) {
  let message = "Block Scope";
  console.log(message); // Output?
}

console.log(message); // Output?

let humanSound = "Hello";
let birdSound = "Chirp";

function makeSounds() {
  let dogSound = "Bark";
  let catSound = "Meow";
  humanSound = "Hi";

  console.log(humanSound); // [1]
  console.log(dogSound); // [2]
  console.log(catSound);
}

console.log(birdSound); // [3]
makeSounds();
console.log(humanSound); // [4]
console.log(dogSound); // [5]

let name = "Alice";

if (true) {
  let name = "Bob";
  if (true) {
    let name = "Charlie";
    console.log(name); // [1]
  }
  console.log(name); // [2]
}

console.log(name); // [3]
