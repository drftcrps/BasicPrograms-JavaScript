function findMissingNumber(arr) {
    const n = arr.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

console.log(findMissingNumber([0, 1, 2, 4, 5]));   
console.log(findMissingNumber([0, 1, 3]));   
