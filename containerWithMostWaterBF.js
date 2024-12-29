function getContainerWithMostWaterArea(arr) {
    let result = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const h = arr[i] < arr[j] ? arr[i] : arr[j];
            const w = j - i;
            const area = h * w;
            if (result < area) {
                result = area;
            }
        }
    }
    return result;
}

console.log(getContainerWithMostWaterArea([7, 1, 2, 3, 9]));
