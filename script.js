#!/usr/bin/env node

// FIBONACCI

// Iteration
const fibIteration = (num) => {
    let fibArray = [];

    for (let i = 0; i < num; i++) {
        if ((fibArray[0] == null) || (fibArray[1] == null)) {
            fibArray.push(i);
        } else {
            let fibResult = fibArray[fibArray.length -1] + fibArray[fibArray.length -2];
            fibArray.push(fibResult);
        };
    };
    console.log("Iteration", fibArray);
};

fibIteration(8);

// Recursion
const fibRecursion = (length) => {
    
    // Exclude case
    if (length < 1 || isNaN(length)) return "Error - Number Needed";

    // Base case
    if (length === 1) return [0];
    if (length === 2) return [0, 1];

    // Recursive case
    return [...fibRecursion(length - 1),
            fibRecursion(length - 1)[length - 2] + fibRecursion(length - 1)[length - 3]];
};

console.log("Recursion", fibRecursion(8));

// MERGE SORT

const mergeSort = (merge) => {
const array = [];

    // Base Case
    if (array.length === 0) return "Error! Check Array!";
    if (array.length === 1) return array;
    
    // Recusive Case
    const split = Math.floor(array.length / 2);
    const left = array.slice(0, split);
    const right = array.slice(split, array.length);

    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    // Merge each side
    const result = [];
    let leftMerge = 0;
    let rightMerge = 0;

    while (leftMerge < left.length && rightMerge < right.length) {
        if (left[leftMerge] < right[rightMerge]) {
            result.push(left[leftMerge]);
            leftMerge++;
        } else {
            result.push(right[rightMerge]);
            rightMerge++;
        };
    };

    while (leftMerge < left.length) {
        result.push(left[leftMerge]);
        leftMerge++;
    }

    while (rightMerge < right.length) {
        result.push(right[rightMerge]);
        rightMerge++;
    };

    return result;
};

console.log("Recursion - Merge Sort", mergeSort([17, 34, 5, 9, 7, 15, 42, 2, 60]));