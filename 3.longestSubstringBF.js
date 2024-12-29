function getLongestSubstring(s) {
    let longestSubstring = 0;
    for (let i = 0; i < s.length; i++) {
        const visited = new Map();
        let substring = 0;
        for (let j = i; j < s.length; j++) {
            if (visited.has(s[j])) {
                break;
            }
            visited.set(s[j], true);
            if (longestSubstring < ++substring) {
                longestSubstring = substring;
            }
        }
    }
    return longestSubstring;
}

// s = "abcabcbb";
// s = "bbbbb";
s = "pwwkew";
const result = getLongestSubstring(s);
console.log(result);
