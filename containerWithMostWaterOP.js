// two pointer shifting method
function getContainerWithMostWaterArea(arr) {
    let maxArea = 0,
        head = 0,
        tail = arr.length - 1;
    while (head < tail) {
        const height = arr[head] < arr[tail] ? arr[head] : arr[tail];
        const width = tail - head;
        const area = height * width;
        maxArea = maxArea < area ? area : maxArea;
        if (arr[head] <= arr[tail]) {
            head++;
        } else {
            tail--;
        }
    }
    return maxArea;
}

console.log(getContainerWithMostWaterArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
