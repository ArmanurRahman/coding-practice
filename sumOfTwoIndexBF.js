const target = 11;
const array = [2, 3, 5, 9, 7, 4];
let isResultFound = false;
const result = [];
for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[j] === target - array[i]) {
            isResultFound = true;
            result.push(i, j);
            break;
        }
    }
    if (isResultFound) {
        break;
    }
}

console.log(result);
