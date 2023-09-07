// Question: WAP take input and returns the product of all the non-zero numbers in the array. 
// For example, if the input is [2, 0, 3, -1, 5], the function should return 30 (which is the product of 2, 3, -1, and 5).

const input = [2, 0, 3, -1, 5];

const myFun = (input) => {
    let prod = 1
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== 0) { // Check for non-zero numbers
            prod = prod * input[i]
        }
    }
    return prod
}



const result = myFun(input)
console.log(result)

