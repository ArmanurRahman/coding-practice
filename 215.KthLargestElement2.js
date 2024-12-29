function kthLargestElement(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, nums.length - k);
}

function quickSelect(nums, left, right, indexToFind) {
    const partitionIdx = getPartition(nums, left, right);
    if (partitionIdx === indexToFind) {
        return nums[indexToFind];
    } else if (indexToFind < partitionIdx) {
        return quickSelect(nums, left, partitionIdx - 1, indexToFind);
    } else {
        return quickSelect(nums, partitionIdx + 1, right, indexToFind);
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
