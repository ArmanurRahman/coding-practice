const arr = [50, 100, -30, 30, 60, 120];
const k = 2;

const getMaxSum = (arr, k) => {
    if (arr.length <= k) {
        return -1;
    }
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    let maxSum = windowSum;
    for (let i = 0; i < arr.length - k; i++) {
        windowSum = windowSum - arr[i] + arr[i + k];
        maxSum = Math.max(windowSum, maxSum);
    }
    return maxSum;
};

console.log(getMaxSum(arr, k));
