function isPalindrome(s = "") {
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let left = Math.floor(s.length / 2);
    let right = left;
    if (s.length % 2 === 0) {
        left--;
    }
    let isPalindrome = true;
    while (left >= 0 && right < s.length) {
        if (s[left] !== s[right]) {
            isPalindrome = false;
            break;
        }
        left--;
        right++;
    }
    return isPalindrome;
}

s = "A man, a plan, a canal: Panama";
// s = "race a car";
// s = " ";
s = "ab";
const result = isPalindrome(s);
console.log(result);
