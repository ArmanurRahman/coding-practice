function isValidParentheses(s) {
    const RIGHT_PARENTHESES = ["]", "}", ")"];
    const PAIR = { "]": "[", "}": "{", ")": "(" };
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (RIGHT_PARENTHESES.includes(s[i])) {
            const last = stack.pop();
            if (last !== PAIR[s[i]]) {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
}
let str = "(";
// let str = "()";
// let str = "()[]{}";
// let str = "(]";
// let str = "([])";
console.log(isValidParentheses(str));
