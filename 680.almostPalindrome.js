function isPalindrome(str, l, r) {
    while (l <= r) {
        if (str[l] !== str[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}

function validPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while (left <= right) {
        if (s[right] !== s[left]) {
            if (
                !isPalindrome(s, left + 1, right) &&
                !isPalindrome(s, left, right - 1)
            ) {
                return false;
            } else {
                return true;
            }
        }
        right--;
        left++;
    }
    return true;
}
s = "aba";
s = "abca";
s = "abc";
s = "abccdba";
const result = validPalindrome(s);
console.log(result);
