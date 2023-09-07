const arr = [1, 6, 33, 5, 11]

const addNum = (arr, value) => {
    let final = []
    for (let i = 0; i < arr.length; i++) {
        final.push(arr[i] + value)
    }
    return final
}

const result = addNum(arr, 5)
console.log(result)