let count = 0;
function inception() {
    console.log(count);
    if (count > 3) {
        return "done";
    }
    count++;
    inception();
}

inception();
