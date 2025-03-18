 /*
  description :
    print 0 to 100 even number & use for loop ; 
    use of for-of loop  as well as loop-in loop on string,object and arrays ;
 */

      //basic for loop
 for(let i = 0 ; i <= 100; i++ ){
    if (i%2 === 0) 
      console.log("even num for 0 ->100 = ",i);        
 }
      
 //  for-of loop
 let str ="Muhammad Yasir";
 var text = "";
  let x ;
 for (let val of str) {
  
   x = text += val;
 } 
        console.log(x);
// for-in loop
const student = {
  name : "Yasir",
  age : 17,
  reault : 800,
};
const s = student;
for (let key in student) {
    var output = `${student[key]}`;
    console.log(output);
}

