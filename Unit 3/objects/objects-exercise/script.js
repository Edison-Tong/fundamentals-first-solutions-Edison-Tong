// Objects Exercise here
let person = {
  firstName: "Lightning",
  lastName: "McQueen",
  hobby: "Tractor tipping",
};

console.log("Initial person:", person);
console.log("This person's name is:", person.firstName, person.lastName);
console.log("This person's hobby is:", person["hobby"]);
person.job = "Race Car";
let propName = "previousJob";
person[propName] = "Auto mechanic";
console.log("This persons previous job was:", person.previousJob);
console.log("Final person:", person);

let shapes = [
  {
    name: "chiliagon",
    sides: 1000,
  },
  {
    name: "Myriagon",
    sides: 10000,
  },
  {
    name: "Megagon",
    sides: 1000000,
  },
];

let circle = {
  name: "circle",
  sides: 0,
};
shapes.push(circle);

for (i = 0; i < shapes.length - 1; i++) {
  console.log(`A ${shapes[i].name} has ${shapes[i].sides} sides`);
}
console.log("Final shapes array:", shapes);

let numSides = parseInt(prompt("Please enter a number of sides you want to search for."));
let foundShape = null;

for (let i = 0; i < shapes.length; i++) {
  if (numSides === shapes[i].sides) {
    foundShape = shapes[i];
    break;
  }
}

if (foundShape === null) {
  console.log("No matching shape was found.");
} else {
  console.log(`We found a shape! It's the ${foundShape.name}`);
}
