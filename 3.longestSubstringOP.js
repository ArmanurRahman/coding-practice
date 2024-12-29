function getLongestSubstring(s) {
    let longestSubstring = 0;
    const visited = new Map();
    let left = 0,
        right = 0;
    while (right < s.length) {
        if (visited.has(s[right])) {
            if (visited.get(s[right]) >= left) {
                left = visited.get(s[right]) + 1;
            }
        }
        visited.set(s[right], right);
        longestSubstring = Math.max(longestSubstring, right - left + 1);
        right++;
    }
    return longestSubstring;
}

// s = "abcabcbb";
// s = "bbbbb";
// s = "pwwkew";
s = " ";
// s = "aabaab!bb";
const result = getLongestSubstring(s);
console.log(result);
