const boatToSavePeople = (people, limit) => {
    people.sort((a, b) => a - b);

    let left = 0;
    let right = people.length - 1;
    let boat = 0;

    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
        }
        right--;
        boat++;
    }
    return boat;
};

console.log(boatToSavePeople([3, 5, 3, 4], 5));
console.log(boatToSavePeople([3, 2, 2, 1], 3));
