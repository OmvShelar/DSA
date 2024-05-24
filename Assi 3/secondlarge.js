function findSecondLargest(arr) {
    let firstMax = -Infinity;
    let secondMax = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstMax) {
            secondMax = firstMax;
            firstMax = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== firstMax) {
            secondMax = arr[i];
        }
    }
    
    return secondMax;

}
const arr = [15, 6, 20, 28, 15,57];
const secondLargest = findSecondLargest(arr);
console.log("Second largest element:", secondLargest);