// Write a function that accepts an array and returns a new array with only unique elements.

function unique_arr(arr){
   return arr.filter((item,index)=>{
             arr.indexOf(item) === index ;
   })
}


let arr = [12, 43, 546, 567, 5, 768, 7];
   newarr = unique_arr(arr);
      newarr = [1,23,4,5465,76,8,76];
      console.log(newarr);
 