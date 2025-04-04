/* 
  Description : 
    for a given array of number , print the square of each value using the forEach loop
*/


 let arr = [1,2,3,4,5];

  arr.forEach((val,index,arr) =>{          // callback function
      console.log(val,"square is equal to",val*val);
  })
             
function myfun(pev, curr){
    return pev + curr ;         // callbacks function 
}    

let newarr = arr.reduce(myfun);
    console.log(newarr);

    