// Conditional Logic Exercises here
let age = 25;
let isAdult;
if (age < 18) {
    isAdult = false;
} else {
    isAdult = true;
}
console.log(isAdult);

let score = 94;
let grade = null;
if (score < 60) {
    grade = "F";
} else if (score < 70) {
    grade = "D";
} else if (score < 80) {
    grade = "C";
} else if (score < 90) {
    grade = "B";
} else if (score < 100) {
    grade = "A";
} else {
    grade = "A++";
}
console.log(score + ":" + grade);

let currentSeason = prompt("What season is it currently?");
if (currentSeason.toLowerCase() === "summer") {
    console.log("It's hot today.");
} else if (currentSeason.toLowerCase() === "spring") {
    console.log("The flowers are blooming.");
} else if (currentSeason.toLowerCase() === "fall") {
    console.log("The leaves are changing colors.");
} else if (currentSeason.toLowerCase() === "winter") {
    console.log("It's cold today.");
} else {
    console.log("Please enter a valid season next time.");
}
