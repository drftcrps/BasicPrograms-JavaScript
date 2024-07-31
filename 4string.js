function charCount(str) {
    const count = {};
    for (let char of str) {
        count[char] = count[char] ? count[char] + 1 : 1;
    }
    return count;
}

console.log(charCount("hello"));  
console.log(charCount("character"));  