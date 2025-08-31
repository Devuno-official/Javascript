// Given an array of functions [f1, f2, f3, ..., fn],
// return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of
// functions is the identity function f(x) = x.

// You may assume each function in the array accepts one
// integer as input and returns one integer as output.

/* Approach
 *Agar tumhare paas [f, g, h] hai to iska matlab hai f(g(h(x))).
 *yaani last function pehle chalega aur uska output agle function ka input banega.
 *Base case (identity function)
 *Agar array empty hai, matlab koi function hi nahi hai.
 *to us case me hum simple identity function return karenge jo input x ko as it is return karega.
 *Iterative ya reduce sochna hai
 *Tum ek new function return karoge jo ek value lega.
 *Phir tum us value ko array ke functions ke through pass karte jaoge.
 *Order hamesha right-to-left hoga (kyunki composition me last function pehle chalta hai).
 *Flow example
 *maan lo input x = 2 aur functions [f, g, h].
 *Step 1 → h(2) chala.
 *Step 2 → uska result g(...) me gaya.
 *Step 3 → fir uska result f(...) me gaya.
 *Final answer mil gaya.
 */

var compose = function (fn ,x) {
  
  console.log(fn);
  console.log(x);

  // return function(x){
         
  // }
};

// let f = function (x) {
//   return x + 1;
// };
// let g = function (x) {
//   return x * 2;
// };
// let h = function (x) {
//   return x - 1;
// };

let result = compose([x => x + 1, x => 2 * x],23);
console.log(result);
