// Question: Write a JavaScript function that takes an array of integers as input and returns the sum of all the positive numbers in the array. 
// input is [1, -2, 3, -4, 5], the function should return 9 (which is the sum of 1, 3, and 5).

const input = [1, -2, 3, -4, 5];

const sumPositive = (input) => {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {

        if (input[i] > 0) {
            sum = sum + input[i]
        }
    }
    return sum
}


const result = sumPositive(input)
console.log(result)