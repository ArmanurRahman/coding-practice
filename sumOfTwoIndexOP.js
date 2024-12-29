const target = 11;
const array = [2, 3, 5, 9, 7, 4];
const hashmap = new Map();
const result = [];
for (let i = 0; i < array.length; i++) {
    if (hashmap.has(array[i])) {
        result.push(hashmap.get(array[i]), i);
        break;
    }
    hashmap.set(target - array[i], i);
}

// console.log(hashmap);
console.log(result);
