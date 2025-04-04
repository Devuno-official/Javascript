/**
 * Qs.2 : take a number n as input form user. create an array of number from     *  1 to n.
 * 
 * Qs.2 : use the reduce  method to calculate sum of all number in the array 
 * 
 * Qs.3 : use the reduce method to calculate product of all number in the array.
 * 
 */
    
let n = prompt("enter a number ");
         window.confirm(n);
    const arr = [];  
   for(let i = 1; i <= n ;i++){
         arr.push(i);
   } 
     console.log(arr);
     
     // sum 
const sum = arr.reduce((pev,cur) =>{
          return pev + cur ;
})
      console.log("sum = ",sum);

      // product
const product = arr.reduce((pev,cur) =>{
       return pev * cur;
})
      console.log("product = ",product);