// getAverageOfNumbersArray takes an array of numbers and returns the average
function getAverageOfNumbersArray(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
}
