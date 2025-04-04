/*
 * mapMethod syntax and work
 * let newarr = arr.map((val,index,itself) =>{
 *      // do somework                      
 *  })
 * 
 */

const arr = [1,2,3,4,5,6,7,8,9];
 // mapMethod create a new array
   const newarr = arr.map((val,index,itself) => {
            return val + val 
   })
       console.log(newarr);