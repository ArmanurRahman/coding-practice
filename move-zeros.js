const moveZeros = (arr) => {
    let i = 0;
    for (j = 0; j < arr.length; j++) {
        if (arr[j] !== 0) {
            arr[i] = arr[j];
            i++;
        }
    }

    arr.fill(0, i);
    return arr;
};

console.log(moveZeros([0, 11, 0, 3, 12, 0]));
