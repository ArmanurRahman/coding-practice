const search = (left, right, array, target) => {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
        return mid;
    }
    if (left >= right) {
        return -1;
    }
    if (target < array[mid]) {
        right = mid - 1;
    } else {
        left = mid + 1;
    }
    return search(left, right, array, target);
};

const binarySearch = (array, target) => {
    const left = 0;
    const right = array.length;
    return search(left, right, array, target);
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 9;
console.log(binarySearch(arr, target));
