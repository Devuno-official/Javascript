
  let current = init;
  let obj = {
    increment() {
      let increment = ++current;
      return increment;
    },
    decrement() {
      let decrement = current;
      --decrement;
      return decrement;
    },
    reset() {
      return init;
    },
  };
  return obj;
}

let counter = createCounter(5);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());

// const counter = createCounter(0);
// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.decrement()); // 1
// console.log(counter.reset()); // 0
// console.log(counter.reset()); // 0

