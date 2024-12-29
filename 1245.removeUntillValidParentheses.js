function validParentheses(s = "") {
    const arr = s.split("");
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "(") {
            stack.push(i);
        } else if (arr[i] === ")") {
            if (stack.length === 0) {
                arr[i] = null;
            } else {
                stack.pop();
            }
        }
    }
    let result = "";
    for (let i = 0; i < stack.length; i++) {
        arr[stack[i]] = null;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== null) {
            result += arr[i];
        }
    }
    return result;
}

var s = "lee(t(c)o)de)";
// s = "))((";
console.log(validParentheses(s));
