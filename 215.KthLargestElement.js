function kthLargestElement(nums, k) {
    quickSort(nums, 0, nums.length - 1);
    return nums[nums.length - k];
}

function quickSort(nums, left, right) {
    if (left < right) {
        const partitionIdx = getPartition(nums, left, right);
        quickSort(nums, left, partitionIdx - 1);
        quickSort(nums, partitionIdx + 1, right);
    }
}

function getPartition(nums, left, right) {
    let pivot = nums[right];
    let partitionIndex = left;
    for (let j = left; j < right; j++) {
        if (nums[j] < pivot) {
            swap(nums, partitionIndex, j);
            partitionIndex++;
        }
    }
    swap(nums, partitionIndex, right);
    return partitionIndex;
}

function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];

console.log(kthLargestElement(nums, 4));
