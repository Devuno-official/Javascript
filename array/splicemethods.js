let arr = [1,2,3,4,5,6,7,8,9];
// Delete a element
  // arr.splice(2,4); ==> [1,2,7,8,9,]

  // replace a element
    // arr.splice(7,2,10,20); ==> [1,2,3,4,5,6,7,10,20]

    // Add a element 
     // arr.splice(9,0,10,11); ==> [1,3,3,4,5,6,7,8,9,10,11]

      // sum of arr 
  console.log("the sum is = ",arr.reduce(function(a,b){
        return a+b;
})) // ==> 45

0