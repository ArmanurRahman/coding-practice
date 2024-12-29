function backspaceCompare(s, t) {
    const sArray = [];
    const tArray = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "#") {
            sArray.pop();
        } else {
            sArray.push(s[i]);
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] === "#") {
            tArray.pop();
        } else {
            tArray.push(t[i]);
        }
    }
    if (tArray.length !== sArray.length) {
        return false;
    }
    for (let i = 0; i < tArray.length; i++) {
        if (tArray[i] !== sArray[i]) {
            return false;
        }
    }

    return true;
}

// test 1
// const s = "ab#c",
//     t = "ad#c";
// test 2
// const s = "ab##",
//     t = "c#d#";

// test 3
const s = "a#c",
    t = "b";
const result = backspaceCompare(s, t);
console.log(result);
