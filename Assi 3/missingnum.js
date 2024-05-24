function findMissingNumberSum(arr) {
    const n = arr.length + 1; 
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
  }
  
  const myArray = [1, 3, 4, 6, 7];
  const missingNumber = findMissingNumberSum(myArray);
  console.log("Missing number using sum:", missingNumber); 
  