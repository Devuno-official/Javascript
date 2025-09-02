/*

1. **Goal samajho:**

   * Tumhe ek **function** return karna hai jo multiple functions ko ek ke baad ek lagaye.
   * Agar tumhare paas `[f, g, h]` hai, aur input `x`,
     to order hoga → `f(g(h(x)))`.
   * Matlab **right se left** apply karna hai.

---

2. **Empty Array Case (Identity Function):**

   * Agar functions array khali hai, return a function jo `x` ko wahi return kare.
   * Example: `fn(x) = x`.

---

3. **Flow Build Karna:**

   * Tum ek **wrapper function** banate ho jo ek value lega.
   * Phir tum array ke har function ko apply karoge.
   * Order ke liye: ya to array ko reverse karke left-to-right chalana, ya seedha right-to-left iterate karna.

---

4. **Dry Run Example:**

   * Suppose `arr = [f, g, h]`, aur input `2`.
   * Start: `val = 2`.
   * Step 1 → `val = h(2)`.
   * Step 2 → `val = g(val)`.
   * Step 3 → `val = f(val)`.
   * Return `val`.

---

5. **Summary of Thinking:**

   * Identity handle karo.
   * Ek loop ya reduce use karke functions ko **chain** karo.
   * Order: right to left.
   * Wrapper function return karo jo final composed value dega.
 */

var compose = function (functions) {

     return function(x){

     }
};

let f = function (x) {
  return x + 1;
};
let g = function (x) {
  return x * 2;
};77
let h = function (x) {
  return x - 1;
};

let result = compose([x => x + 1, x => 2 * x],23);
console.log(result);
