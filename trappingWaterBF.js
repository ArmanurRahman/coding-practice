function getTrappingWater(arr = []) {
    // console.log(arr.splice(0, 5));
    let totalWaterArea = 0;
    for (let i = 0; i < arr.length; i++) {
        const lMax = Math.max(...arr.slice(0, i + 1));
        const rMax = Math.max(...arr.slice(i, arr.length));
        totalWaterArea += Math.min(lMax, rMax) - arr[i];
    }
    return totalWaterArea;
}

const result = getTrappingWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]);
console.log(result);
