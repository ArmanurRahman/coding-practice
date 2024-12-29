function getTrappingWater(arr = []) {
    let totalWaterArea = 0;
    let lp = 0;
    let rp = arr.length - 1;
    let lMax = 0;
    let rMax = 0;
    while (lp <= rp) {
        if (arr[lp] < arr[rp]) {
            if (lMax < arr[lp]) {
                lMax = arr[lp];
            } else {
                totalWaterArea = totalWaterArea + (lMax - arr[lp]);
            }
            lp++;
        } else {
            if (rMax < arr[rp]) {
                rMax = arr[rp];
            } else {
                totalWaterArea = totalWaterArea + (rMax - arr[rp]);
            }
            rp--;
        }
    }
    return totalWaterArea;
}

const result = getTrappingWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]);
console.log(result);
