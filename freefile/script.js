/*
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
The fn function takes one or two arguments:
arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression 
fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
Please solve it without the built-in Array.filter method.


In Javascript, there is the concept of "truthiness" and "falsiness". 
Values such as 0, undefined, null, and false are falsy. 
Most values are truthy: 1, {}, [], true, etc. 
In Javascript, the contents of if-statements don't need to be booleans. 
You can say "if ([1,2,3]) {}", and it's equivalent to saying 'if (true) {}".

*/

const Userfilter = function (arr, fn) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    let filterAns = fn(ele, i);
    if (filterAns) {
      result.push(arr[i]);
    }
  }
  return result;
};

function greaterThan10(n) {
  return n > 10;
}
function firstIndex(n, i) {
  return i === 0;
}
function plusOne(n) {
  return n + 1;
}

let arr = [0, 10, 20, 30];
console.log(Userfilter(arr, greaterThan10)); // [20, 30]
let arr2 = [1, 2, 3];
console.log(Userfilter(arr2, firstIndex)); // [1]
let arr3 = [-2, -1, 0, 1, 2];
console.log(Userfilter(arr3, plusOne)); // [-2,0,1,2]
