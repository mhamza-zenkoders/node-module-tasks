// Write a function to find the kth smallest element in an unsorted array without sorting the entire array.
// (Hint: Use a variation of the Quickselect algorithm.)


// Implement a function that splits an array into chunks of a given size. For example, given [1, 2, 3, 4, 5] and a size of 2, return [[1, 2], [3, 4], [5]]. Ensure the function handles edge cases like empty arrays or chunk sizes larger than the array length.

function chunkArray(arr, chunk){
    if(arr.length === 0){
        return arr;
    }
    if(chunk > arr.length){
        console.log('Invalid Chunk Size');
        return arr;
    }
    let result=[];
    for(let i=0; i<arr.length; i+=chunk){
        result.push(arr.slice(i,i+chunk));
    }
    return result;
}

console.log(chunkArray([1, 2, 3, 4, 5],2));
console.log(chunkArray([1, 2, 3, 4, 5],5));
console.log(chunkArray([],5));

// Given an array of integers, write a function that finds the subarray with the maximum sum.
// (Hint: Use Kadane's Algorithm.)

function maxSumSubArray(arr){
    let result = arr[0];
    let resultSubArray = [];
    for (let i=0; i<arr.length; i++){
        let currentSum = 0;
        let currentSubArray = [];
        for(let j=i; j<arr.length; j++){
            currentSum += arr[j];
            currentSubArray.push(arr[j]);
            if(result<currentSum){
                result = currentSum;
                resultSubArray = currentSubArray;
            }
        }
    }
    console.log("The Sub Array With Maximum Sum", resultSubArray);
    return result;
}

const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSumSubArray(arr));

// Create a function that takes an array of integers and returns a new array containing only those elements that have a frequency greater than a given threshold.
// (For example, given [1, 2, 2, 3, 3, 3] and threshold 1, the output should be [2, 3].)



function filterByFreqency(arr, n) {
    let freqMap = new Map();
    let result = [];
    for (let a of arr) {
        freqMap.set(a, (freqMap.get(a) || 0) + 1);
    }
    for (let f of freqMap) {
        if (f[1] > n) {
            result.push(f[0]);
        }
    }
    return result;
}

console.log(filterByFreqency([1, 2, 2, 3, 3, 3], 2))

// Write a function that rotates an array to the right by k positions. For example, rotating [1, 2, 3, 4, 5] by 2 positions results in [4, 5, 1, 2, 3].

function rotateArray(arr, k) {
    let left = arr.splice(k + 1, arr.length - 1);
    arr = left.concat(arr)
    return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 5));
