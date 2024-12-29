function isPalindrome(s = "") {
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let left = 0;
    let right = s.length - 1;
    let isPalindrome = true;
    while (left <= right) {
        if (s[left] !== s[right]) {
            isPalindrome = false;
            break;
        }
        left++;
        right--;
    }
    return isPalindrome;
}

s = "A man, a plan, a canal: Panama";
s = "race a car";
s = " ";
const result = isPalindrome(s);
console.log(result);
