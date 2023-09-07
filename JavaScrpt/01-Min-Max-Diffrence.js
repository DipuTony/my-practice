const maxMin = (arr) => {
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return { min, max };
};

const handleCount = (minMax, arr) => {
    const min = minMax.min;
    const max = minMax.max;

    // Create an object to store values from arr
    const arrValues = {};
    for (let i = 0; i < arr.length; i++) {
        arrValues[arr[i]] = true;
    }
    console.log(arrValues)
    for (let i = min; i <= max; i++) {
        if (!arrValues[i]) {
            console.log(i);
        }
    }
};

const handleClick = () => {
    const arr = [2, 5, 9, 1, 11];

    const minMax = maxMin(arr);
    handleCount(minMax, arr);
};

handleClick();